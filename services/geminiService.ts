
import { GoogleGenAI } from "@google/genai";

export const getWagyuExpertAdvice = async (wagyuName: string) => {
  const API_KEY = process.env.API_KEY;
  if (!API_KEY) return "AIアドバイスをご利用いただくにはAPIキーが必要です。";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `${wagyuName}について、おすすめの食べ方（焼き加減や調味料）や、一緒に楽しむべき地元の飲み物について、食通のような口調で300文字以内で詳しく教えてください。`,
      config: {
        systemInstruction: "あなたは日本の和牛に精通したシニアソムリエ兼美食家です。専門的かつ魅力的なアドバイスを提供してください。"
      }
    });
    return response.text || "情報を取得できませんでした。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "現在、AIアドバイザーは休憩中です。";
  }
};
