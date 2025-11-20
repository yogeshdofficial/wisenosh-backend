import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("No Gemini API key in .env");
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function getResponseFromBase64StrImg(
  prompt: string,
  mimetype: string,
  img: string
) {
  const response = await model.generateContent([
    { inlineData: { data: img.toString(), mimeType: mimetype } },
    prompt,
  ]);
  return response.response.text();
}
