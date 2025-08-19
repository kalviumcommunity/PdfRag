 import { RetrievalQAChain } from "langchain/chains";
import { systemPrompt, createUserPrompt } from "./utils/prompts.js";

 // Query uploaded PDF
 app.post("/api/query", async (req, res) => {
   try {
     const { fileId, question } = req.body;
     const vectorStore = vectorStores[fileId];
     if (!vectorStore) return res.status(404).json({ error: "File not found" });

     const retriever = vectorStore.asRetriever();
     const model = new ChatGoogleGenerativeAI({
       apiKey: process.env.GEMINI_API_KEY,
       model: "gemini-2.0-flash",
     });

     const qaChain = RetrievalQAChain.fromLLM(model, retriever);
     const result = await qaChain.call({
       query: `
       ${systemPrompt}
       ${createUserPrompt(question)}
       `
     });

     res.json({ result: result.text });
   } catch (err) {
     console.error(" Query error:", err);
     res.status(500).json({ error: err.message || "Internal server error" });
   }
 });
