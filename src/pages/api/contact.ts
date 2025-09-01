// src/pages/api/contact.ts
import type { APIRoute } from "astro";
import { createClient } from "microcms-js-sdk";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get("name");
  const gender = data.get("gender");
  const email = data.get("email");
  const type = data.get("type");
  const content = data.get("content");
  const source = data.getAll("source");

  console.log("name..edc", name, gender, source);
  // microCMSクライアントを初期化
  const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
  });

  try {
    // 取得したデータをmicroCMSに登録
    const response = await client.create({
      endpoint: "contacts", // 作成したAPIのエンドポイント
      content: {
        name: name,
        gender: [gender],
        email: email,
        type: [type],
        content: content,
        source: source,
      },
    });

    // 成功したら完了ページにリダイレクト
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/contact/thanks",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "送信中にエラーが発生しました",
      }),
      {
        status: 500,
      }
    );
  }
};
