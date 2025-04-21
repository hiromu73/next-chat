"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

interface State {
  result: string | null;
  message: string | null;
  role: string | null;
}
export const actionMessage = async (_: State, formData: FormData, options?: string): Promise<State> => {
  const role = {
    user: "user",
    assistant: "assistant",
  } as const;

  const apiKey = process.env.DIFY_APIKEY || "";
  const inputMessage = formData.get("userMessage");
  if (typeof inputMessage !== "string") {
    throw new Error("userMessage is not a valid string");
  }
  const { userId, redirectToSignIn } = await auth();
  console.log("userId");
  console.log(userId);

  if (!userId) return redirectToSignIn();

  console.log("formDate");
  console.log(formData);

  const option = options === undefined ? undefined : options === "Agree" ? "賛成" : "反対";
  const query = option === undefined ? inputMessage : `${inputMessage}に対して${option}の意見を持っています.`;
  console.log(`query : ${query}`);

  const body = {
    inputs: {},
    query: query,
    // response_mode: "blocking", // Agentがblocking modeを対応していない
    response_mode: "streaming",
    conversation_id: "", // userIdを入れていく
    user: "abc-123", // useName
    files: [
      {
        type: "image",
        transfer_method: "remote_url",
        url: "https://cloud.dify.ai/logo/logo-site.png",
      },
    ],
  };

  console.log("body");
  console.log(body);

  try {
    const response = await fetch("https://api.dify.ai/v1/chat-messages", {
      cache: "force-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else if (response.ok && option !== undefined) {
      try {
        await prisma.chat.create({
          data: {
            title: inputMessage as string,
            option: option,
            type: "text", // 仮
            // mode: "mode"  TODO: schemを作る、APIに含む作業をする
            userId: userId,
          },
        });
        console.log(`Dify - inputmessage : ${inputMessage}`);
        await prisma.message.create({
          data: {
            role: role.user,
            chatMessage: inputMessage,
            chatSessionId: userId,
          },
        });
      } catch (e) {
        console.log(`Error creating chat: ${e}`);
      }
    } else {
      try {
        await prisma.message.create({
          data: {
            role: role.user,
            chatMessage: inputMessage,
            chatSessionId: userId,
          },
        });
      } catch (e) {
        console.log(`Error creating chat: ${e}`);
      }
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("Response body is null");
    }

    let result = "";
    while (reader) {
      const { done, value } = await reader.read();
      if (done) break;

      // デコードして文字列に変換
      const chunk = new TextDecoder().decode(value);
      // 各データ行を処理
      const lines = chunk.split("\n").filter((line) => line.trim());
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          // console.log(`lines -- ${lines}`);
          // console.log(`line -- ${line}`);

          const jsonStr = line.slice(6);
          try {
            const data = JSON.parse(jsonStr);
            // console.log(`data -- ${data}`);
            result += data.answer || "";
          } catch (e) {
            console.log(`Invalid JSON in ${e}stream:`, jsonStr);
          }
        }
      }
    }

    if (result.startsWith("ターン")) {
      result = result.replace("ターン", "");
    }

    if (result != "") {
      try {
        console.log(`Dify - result : ${result}`);
        await prisma.message.create({
          data: {
            role: role.assistant,
            chatMessage: result,
            chatSessionId: userId,
          },
        });
      } catch (e) {
        console.log(`Error creating chat: ${e}`);
      }
    }

    return { result: "ok", message: result, role: "assistant" };
  } catch (error) {
    console.log(error);
    return { result: "error", message: "エラーが発生しました", role: "assistant" };
  }
};
