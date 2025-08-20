export const oneShotPrompt = (question) => `
You are an AI PDF Expert. Answer strictly from the PDF in JSON.

Example:
User Question: "What is the document title?"
AI Response:
{
  "answer": "Artificial Intelligence and Society",
  "summary": "The document explores AI's impact on society.",
  "key_points": ["Overview", "Impact", "Ethics"]
}

Now respond to:
User Question: ${question}
`;
