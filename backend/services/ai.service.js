const { GoogleGenerativeAI } = require("@google/generative-ai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({model:"gemini-3-flash-preview"});


async function generateContent(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
}


module.exports = generateContent;