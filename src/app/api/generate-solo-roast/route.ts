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

    const prompt = `You are a brutally honest, sarcastic comedian hosting a party game. Read the following Game Data for a single player who played a 'Would You Rather' game.\n\nGame Data: ${gameData}\n\nI need you to generate a humorous analysis based on their specific answers.
1. Give them a funny superlative award title based on their most unhinged choices.
2. Write a 2-3 sentence brutal but funny roast calling out specific weird answers they made.
3. Suggest a funny defining emoji for them.
Return the result EXACTLY as a JSON object with this shape:
{
  "title": "...",
  "roast": ["sentence 1...", "sentence 2..."],
  "emoji": "..."
}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const cleanJson = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();

    return NextResponse.json(JSON.parse(cleanJson));
  } catch (error) {
    console.error("Gemini API Error (Solo Roast):", error);
    return NextResponse.json(
      { error: "Failed to generate solo roast." },
      { status: 500 }
    );
  }
}
