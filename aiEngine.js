require("dotenv").config();
const { OpenAI } = require("openai");
console.log("Loaded API Key:", process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function askAI(message, industry) {
  const prompt = `The user is a lead in the ${industry} industry. Based on their message: "${message}", classify the lead.`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
}

module.exports = askAI;
