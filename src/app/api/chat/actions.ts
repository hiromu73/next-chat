"use server";

export type State = {
  result: string | null;
  message: string | null;
  role: string | null;
};

export const actionMessage = async (_: State, formData: FormData, options?: string): Promise<State> => {
  const apiKey = process.env.DIFY_APIKEY || "";
  const inputMessage = formData.get("userMessage");

  const option = options === undefined ? undefined : options === "Agree" ? "賛成" : "反対";

  const message = { answer: options === undefined ? undefined : options === "Agree" ? "賛成" : "反対" };
  const body =
    option === undefined
      ? {
          inputs: {}, // 必須 nullやから文字不可 => 必要ない？ → 必要なければdify上で削除する
          query: `${inputMessage}`,
          // response_mode: "blocking",
          response_mode: "streaming",
          conversation_id: "", //userIdを入れていく
          user: "abc-123", //useName
          files: [
            {
              type: "image",
              transfer_method: "remote_url",
              url: "https://cloud.dify.ai/logo/logo-site.png",
            },
          ],
        }
      : {
          // 必須 nullやから文字不可 => 必要ない？ → 必要なければdify上で削除する
          inputs: {},
          query: `${inputMessage}に対して${option}の意見を持っています.`,
          // response_mode: "blocking",
          response_mode: "streaming",
          conversation_id: "", //userIdを入れていく
          user: "abc-123", //useName
          files: [
            {
              type: "image",
              transfer_method: "remote_url",
              url: "https://cloud.dify.ai/logo/logo-site.png",
            },
          ],
        };

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
          const jsonStr = line.slice(6);
          try {
            const data = JSON.parse(jsonStr);
            result += data.answer || "";
          } catch (e) {
            console.log(`Invalid JSON in ${e}stream:`, jsonStr);
          }
        }
      }
    }

    console.log(result);

    return { result: "ok", message: result, role: "assistant" };
  } catch (error) {
    console.log(error);
    return { result: "error", message: "エラーが発生しました", role: "assistant" };
  }
};
