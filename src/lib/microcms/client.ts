// src/lib/microcms/client.ts
import { createClient } from "microcms-js-sdk";

// 環境変数の値をログ出力
console.log("Service Domain:", import.meta.env.MICROCMS_SERVICE_DOMAIN);
console.log("API Key:", import.meta.env.MICROCMS_API_KEY);

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export default client;
