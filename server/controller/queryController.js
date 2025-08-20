import { GoogleGenerativeAI } from "@google/generative-ai";
import { zeroShotPrompt } from "../utils/prompts/zeroShotPrompt.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const queryPDF = async (req, res) => {
  try {
    const { question } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = zeroShotPrompt(question);
    const resp = await model.generateContent(prompt);
    const text = resp.response.text();

    return res.json({ result: text });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
