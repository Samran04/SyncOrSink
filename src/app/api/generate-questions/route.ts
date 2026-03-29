import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { vibe } = await req.json();

    if (!vibe) {
      return NextResponse.json({ error: "Vibe is required" }, { status: 400 });
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

    const prompt = `You are a witty, edgy writer for a Gen Z party game called SyncOrSink. Generate 10 fast-paced 'Would You Rather' questions based on the theme: ${vibe}. The questions should be hilarious, relatable, and force players into tough, 5-second gut-reaction choices. Return ONLY a JSON array of objects, where each object has 'question', 'optionA', and 'optionB' properties with string values.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json(JSON.parse(responseText));
  } catch (error: any) {
    console.error("Gemini API Error (Questions):", error);
    return NextResponse.json(
      { error: "Failed to generate questions." },
      { status: 500 }
    );
  }
}
