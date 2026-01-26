import { GoogleGenAI } from "@google/genai";
import { Transaction } from "../types";

// Helper to get the API key safely
const getApiKey = (): string | undefined => {
  return process.env.API_KEY;
};

export const getFinancialInsights = async (transactions: Transaction[]): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "API Key not found. Please ensure process.env.API_KEY is set.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Analyze the following recent financial transactions and provide a brief, friendly, 2-sentence financial insight or tip for the user.
    Focus on spending patterns or positive reinforcement.
    
    Transactions:
    ${JSON.stringify(transactions)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "No insights available at this time.";
  } catch (error) {
    console.error("Error fetching Gemini insights:", error);
    return "Unable to generate insights right now.";
  }
};