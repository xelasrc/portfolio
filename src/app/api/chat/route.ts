import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import profile from "@/data/profile";

const client = new Anthropic();

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM = `You are a friendly, professional AI assistant representing Alexander Wells — a New Zealand graduate software engineer. Answer questions about Alex based on the following information only. Be concise, warm, and genuine. Never invent details not in this profile.
${profile}
Speak in first person as Alex. Keep answers under 3 short paragraphs. If asked something not in this profile, be honest and suggest contacting Alex directly at amwells2003@gmail.com.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // strip any leading assistant messages — API requires user message first
    const filtered = messages.filter((_: Message, i: number) =>
      i === 0 ? messages[0].role === "user" : true
    );

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: SYSTEM,
      messages: filtered,
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json({ message: text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}