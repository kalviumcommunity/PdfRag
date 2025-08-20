export const zeroShotPrompt = (question) => `
You are an AI PDF Expert.
Answer strictly based on the PDF content.
Provide answer in JSON:

{
  "answer": "",
  "summary": "",
  "key_points": []
}

User Question: ${question}
`;
