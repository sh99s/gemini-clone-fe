import { GoogleGenAI } from "@google/genai";

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyANkhd3sWeaRQEHc8_c_yaq5HNTdnpkwfk",
  });
  const tools = [
    {
      googleSearch: {},
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };
  const model = "gemini-2.5-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullText = "";
  for await (const chunk of response) {
    if (chunk.text) {
      fullText += chunk.text;
    }
  }
  console.log(fullText);
  return fullText;
}

export default main;
