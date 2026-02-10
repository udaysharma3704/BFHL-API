const axios = require("axios");
require("dotenv").config();

exports.askAI = async (question) => {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
      {
        contents: [
          {
            role: "user",
            parts: [{ text: question }]
          }
        ]
      },
      {
        params: {
          key: process.env.GEMINI_API_KEY
        }
      }
    );

    return response.data.candidates[0].content.parts[0].text.trim();


  } catch (error) {
    console.error(
      "Gemini Error:",
      error.response?.data || error.message
    );
    throw new Error("AI service failed");
  }
};