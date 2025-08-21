export const dynamicPrompt = (question, mode = "detail") => {
  const map = {
    summary: "Provide a concise summary from the PDF only.",
    key_points: "Extract bullet key points from the PDF only.",
    detail: "Answer comprehensively from the PDF only."
  };
  return `
You are an AI PDF Expert.
${map[mode] ?? map.detail}

User Question: ${question}

Respond ONLY in JSON:
{
  "answer": "",
  "summary": "",
  "key_points": []
}
`;
};