import OpenAi from "openai";

export const openAi = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});
