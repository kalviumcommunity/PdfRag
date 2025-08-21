import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const runGemini = async (prompt, cfg = {}) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      temperature: cfg.temperature ?? 0.3,
      topP: cfg.topP ?? 0.9,
      topK: cfg.topK ?? 40,
      stopSequences: cfg.stop ?? []
    }
  });
  const r = await model.generateContent(prompt);
  return r.response.text();
};