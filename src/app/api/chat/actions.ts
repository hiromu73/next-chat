"use server";
import { revalidatePath } from "next/cache";

export type State = {
  result: string | null;
  message: string | null;
};

export const actionMessage = async (_: State, formData: FormData): Promise<State> => {
  const apiKey = process.env.DIFY_APIKEY || "";
  const inputMessage = formData.get("userMessage");

  const message = { answer: "賛成" };
  const body = {
    inputs: message,
    query: `${inputMessage} ${message}の意見を持っています`,
    // response_mode: "blocking",
    response_mode: "streaming",
    conversation_id: "",
    user: "abc-123",
    files: [
      {
        type: "image",
        transfer_method: "remote_url",
        url: "https://cloud.dify.ai/logo/logo-site.png",
      },
    ],
  };

  console.log("body-----");
  console.log(body);
  try {
    // DBにユーザーメッセージ追加

    // DifyのAPIを実行
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

    // レスポンスがストリームの場合の処理
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("Response body is null");
    }

    let result = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // デコードして文字列に変換
      const chunk = new TextDecoder().decode(value);
      // 各データ行を処理
      const lines = chunk.split("\n").filter((line) => line.trim());
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const jsonStr = line.slice(6); // "data: " を除去
          try {
            const data = JSON.parse(jsonStr);
            // ここでデータを処理
            console.log("Received data:", data);
            result += data.answer || "";
          } catch (e) {
            console.log("Invalid JSON in stream:", jsonStr);
          }
        }
      }
    }

    // revalidatePath("/chat");
    return { result: "ok", message: result };
  } catch (error) {
    console.log(error);
    return { result: "error", message: "エラーが発生しました" };
  }
};
