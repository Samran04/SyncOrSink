import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { gameData } = await req.json();

    if (!gameData) {
      return NextResponse.json({ error: "Game data is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const prompt = `You are a brutally honest, sarcastic comedian hosting a party game. Read the following Game Data between a group of players playing a 'Would You Rather' game.\n\nGame Data: ${gameData}\n\nI need you to generate a humorous analysis based on their specific answers.
1. Write a 2-sentence roast for the whole group on their voting choices and dynamic.
2. Select up to 3 notable players (e.g. the most chaotic, the most basic, the outlier) and give them a funny superlative award title and a 1-sentence roast calling out a specific weird answer if applicable.
Return the result EXACTLY as a JSON object with this shape:
{
  "groupRoast": "sentence...",
  "customAwards": [
    { "playerName": "...", "title": "...", "roast": "..." }
  ]
}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const cleanJson = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();

    return NextResponse.json(JSON.parse(cleanJson));
  } catch (error: any) {
    console.error("Gemini API Error (Roasts):", error);
    return NextResponse.json(
      { error: "Failed to generate roasts." },
      { status: 500 }
    );
  }
}
