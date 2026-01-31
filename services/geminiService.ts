import { GoogleGenAI } from "@google/genai";
import { Transaction } from "../types";

export const getFinancialInsights = async (transactions: Transaction[]): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "Please configure your Gemini API key to receive financial insights.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Analyze these recent transactions and provide a sharp, executive-level financial insight in 15 words or less.
    Be punchy, encouraging, and specific to the data if possible.
    
    Transactions:
    ${JSON.stringify(transactions)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    
    return response.text?.replace(/"/g, '') || "Diversifying your assets is key to long-term stability.";
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "Monitor your recurring subscriptions to optimize monthly cash flow.";
  }
};