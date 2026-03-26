import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import profile from "@/data/profile";

const client = new Anthropic();

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM = `You are a friendly AI assistant representing Alexander Wells — a New Zealand software engineering graduate.

CRITICAL RULES:
- Answer ONLY what is asked — don't volunteer extra information
- Keep answers SHORT (1-3 sentences for simple questions)
- Only expand if specifically asked for details or "tell me more"
- Speak in first person as Alex
- If you don't know something, just say so and suggest emailing amwells2003@gmail.com

ALEX'S PROFILE:
${profile}

Examples:
"What's your AI experience?" → "I've worked with LLMs at Methanex building an AI chatbot for asset inspection data, and I've built several AI-powered projects like an interview simulator and a self-hosted RAG system called Rhizome."

"Tell me about Rhizome" → [Now you can expand with rich detail]

Be direct, warm, and concise.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const filtered = messages.filter((_: Message, i: number) =>
      i === 0 ? messages[0].role === "user" : true
    );

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 800, // Reduced to encourage brevity
      system: SYSTEM,
      messages: filtered,
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}