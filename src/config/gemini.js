import { GoogleGenerativeAI } from "@google/generative-ai";
const YOUR_API_KEY = "AIzaSyDHoxzEih0lYAs89r_c1PAXtb_qYMGZryA";
const genAI = new GoogleGenerativeAI(YOUR_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const makeRequest = async (prompt) => {
  const result = await model.generateContent(prompt);
  return result.response.text();
};
export default makeRequest;
