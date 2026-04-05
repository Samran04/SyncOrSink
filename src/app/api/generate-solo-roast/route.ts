import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

async function callWithRetry(model: ReturnType<typeof genAI.getGenerativeModel>, prompt: string, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("429") && attempt < maxRetries - 1) {
        const delay = (attempt + 1) * 5000;
        console.log(`Rate limited, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})`);
        await new Promise(r => setTimeout(r, delay));
      } else {
        throw err;
      }
    }
  }
  throw new Error("Max retries reached");
}

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
      model: "gemini-2.0-flash",
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 1.0,
      },
    });

    const prompt = `You are a brutally honest, sarcastic comedian hosting a party game. Read the following Game Data for a single player who played a 'Would You Rather' game.\n\nGame Data: ${gameData}\n\nI need you to generate a completely fresh, highly creative, and uniquely humorous analysis based on their specific answers. Do not reuse generic roasting formats. Focus heavily on the exact content of what they chose. Here is a random salt to ensure completely fresh chaos: ${Date.now()}-${Math.random()}.
1. Give them a funny superlative award title based on their most unhinged choices.
2. Write a 2-3 sentence brutal but funny roast calling out specific weird answers they made.
3. Suggest a funny defining emoji for them.
Return the result EXACTLY as a JSON object with this shape:
{
  "title": "...",
  "roast": ["sentence 1...", "sentence 2..."],
  "emoji": "..."
}`;

    const responseText = await callWithRetry(model, prompt);
    const cleanStr = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
    const match = cleanStr.match(/\{[\s\S]*\}/);
    const finalJsonStr = match ? match[0] : cleanStr;

    return NextResponse.json(JSON.parse(finalJsonStr));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Gemini API Error (Solo Roast):", errMsg);
    return NextResponse.json(
      { error: "Failed to generate solo roast.", detail: errMsg },
      { status: 500 }
    );
  }
}
