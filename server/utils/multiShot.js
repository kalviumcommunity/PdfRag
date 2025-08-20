export const multiShotPrompt = (question) => `
You are an AI PDF Expert. Answer strictly from the PDF in JSON.

Example 1:
User Question: "Summarize the introduction"
AI Response:
{
  "answer": "Introduction frames the scope and goals.",
  "summary": "It outlines motivation and objectives.",
  "key_points": ["Motivation", "Scope", "Goals"]
}

Example 2:
User Question: "List key findings"
AI Response:
{
  "answer": "Findings include increased adoption and cost savings.",
  "summary": "Adoption rose; costs decreased.",
  "key_points": ["Adoption", "Cost savings", "Outcomes"]
}

Now respond to:
User Question: ${question}
`;
