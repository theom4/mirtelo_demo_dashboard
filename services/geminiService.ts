
import { GoogleGenAI } from "@google/genai";
import { Transaction } from "../types";

export const getFinancialInsights = async (transactions: Transaction[]): Promise<string> => {
  // Use the API key directly from the environment variable as per SDK requirements.
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "Insights are currently unavailable. Please check your configuration.";
  }

  // Initialize the client using the API key from environment variables.
  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Analyze the following recent financial transactions and provide a brief, friendly, 2-sentence financial insight or tip for the user.
    Focus on spending patterns or positive reinforcement.
    
    Transactions:
    ${JSON.stringify(transactions)}
  `;

  try {
    // Correct usage: call generateContent directly on ai.models with the model name and prompt.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    // Correct usage: access the .text property of GenerateContentResponse.
    return response.text || "Keep up the great work with your financial planning!";
  } catch (error) {
    console.error("Error fetching Gemini insights:", error);
    return "Continue monitoring your expenses to stay on track with your goals.";
  }
};
