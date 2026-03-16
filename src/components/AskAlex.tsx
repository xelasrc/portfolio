"use client";

import { useState, useRef, useEffect } from "react";
import Reveal from "@/components/Reveal";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What's your AI experience?",
  "When are you available?",
  "What tech do you prefer?",
  "Tell me about Methanex",
];

export default function AskAlex() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! I'm an AI version of Alex. Ask me anything about his background, skills, projects, or what he's looking for in a role.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const isFirstRender = useRef(true);

  const msgsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "Something went wrong. Try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ask-alex" className="max-w-6xl mx-auto px-6 md:px-14 py-24 border-t border-border">
      <Reveal>
        <p className="font-mono text-accent text-xs tracking-widest mb-2">// 05. Ask Alex</p>
        <h2 className="font-syne font-bold text-bright text-4xl tracking-tight mb-3">Ask Alex anything</h2>
        <p className="text-muted mb-10 max-w-lg">
          Powered by Claude AI. Ask about my experience, projects, availability, or anything on my CV.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="max-w-3xl border border-border bg-surface">

          {/* header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
            <div className="w-9 h-9 shrink-0">
              <img src="/apple-touch-icon.png" alt="AW" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-syne font-bold text-bright text-sm">Alex Wells</p>
              <p className="font-mono text-muted text-xs">Software Engineer</p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
          </div>

          {/* suggestions */}
          <div className="flex gap-2 px-6 py-2 overflow-x-auto scrollbar-none border-b border-border text-muted">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="px-3 py-1.5 border border-border text-muted font-mono text-xs transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5 shrink-0"
              >
                {s}
              </button>
            ))}
          </div>

          {/* messages */}
          <div ref={msgsRef} className="h-80 overflow-y-auto px-6 py-4 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-7 h-7 shrink-0 self-end ${msg.role === "assistant" ? "" : "bg-border flex items-center justify-center font-syne font-bold text-xs text-muted"}`}>
                  {msg.role === "assistant" ? (
                    <img src="/apple-touch-icon.png" alt="AW" className="w-full h-full object-cover" />
                  ) : (
                    "You"
                  )}
                </div>
                <div className={`px-4 py-3 text-sm leading-relaxed max-w-sm ${msg.role === "assistant" ? "bg-bg border border-border text-text" : "bg-accent/10 border border-accent/20 text-bright"}`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <div className="w-7 h-7 shrink-0 self-end">
                  <img src="/apple-touch-icon.png" alt="AW" className="w-full h-full object-cover" />
                </div>
                <div className="px-4 py-3 bg-bg border border-border flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <div className="flex gap-3 px-6 py-4 border-t border-border">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask me anything about Alex…"
              className="flex-1 bg-bg border border-border text-bright text-sm px-4 py-2.5 outline-none placeholder:text-muted focus:border-accent transition-colors duration-200"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className="px-5 py-2.5 bg-accent text-bg font-bold text-sm transition-all duration-200 hover:bg-sky-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>

        </div>
      </Reveal>
    </section>
  );
}