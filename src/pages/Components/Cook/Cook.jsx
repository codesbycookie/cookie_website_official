/* eslint-disable no-unused-vars */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export default function CookChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey there! I’m Cook 👋 — how can I help you build something awesome today?",
    },
  ]);
  const scrollRef = useRef(null);

  // 🌀 Auto-scroll to bottom when messages update
  useEffect(() => {
    const viewport = scrollRef.current?.querySelector("[data-slot='scroll-area-viewport']");
    if (viewport) {
      requestAnimationFrame(() =>
        viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" })
      );
    }
  }, [messages]);

  const basePrompt = `
You are **Cook**, the official AI assistant of **Cookie Inc.** — a creative tech studio crafting digital experiences through websites, branding, and software solutions.

- Tagline: “Experience Every Byte.”
- Tone: Professional, creative, minimalist, and friendly.
- Services: Website Development, UI/UX Design, Branding & Logo, Mobile Apps, Dynamic & Portfolio Websites.
- Audience: Startups, entrepreneurs, and small businesses.

Always be polite, concise (1–3 sentences), and helpful.  
If asked for pricing: “Pricing depends on the project scope — would you like me to connect you with our team for a custom quote?”  
`;

const handleSend = async () => {
  if (!input.trim()) return;

  const userMsg = { role: "user", text: input };
  setMessages((m) => [...m, userMsg]);
  setInput("");
  setLoading(true);

  try {
    // 🧩 Construct proper conversation flow
    const conversation = [
      { role: "user", parts: [{ text: basePrompt }] }, 
      ...messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.text }],
      })),
      { role: "user", parts: [{ text: input }] },
    ];

    const stream = await model.generateContentStream({
      contents: conversation,
    });

    let response = "";
    setMessages((m) => [...m, { role: "assistant", text: "" }]);

    for await (const chunk of stream.stream) {
      const chunkText = chunk.text();
      response += chunkText;

      setMessages((m) => {
        const updated = [...m];
        updated[updated.length - 1] = { role: "assistant", text: response };
        return updated;
      });
    }
  } catch (err) {
    console.error("Gemini API Error:", err);
    setMessages((m) => [
      ...m,
      { role: "assistant", text: "Oops! Something went wrong — please try again later." },
    ]);
  } finally {
    setLoading(false);
  }
};

  return (
    <motion.div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <Button
          className="size-14 rounded-full flex items-center justify-center shadow-md bg-dark-cream hover:bg-light-cream text-white"
          onClick={() => setOpen(true)}
        >
          <MessageCircle size={24} />
        </Button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white w-80 md:w-96 h-[480px] rounded-3xl flex flex-col shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-light-cream to-dark-cream text-white px-5 py-3 flex justify-between items-center">
            <span className="font-semibold text-base">Cook from Cookie Inc</span>
            <X
              size={20}
              className="cursor-pointer hover:text-extra-light-cream transition-colors"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Messages (scrollable area) */}
          <ScrollArea
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto scroll-smooth"
          >
            <div className="flex flex-col gap-3 min-h-full">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] break-words ${
                      msg.role === "user"
                        ? "bg-dark-cream text-white"
                        : "bg-gray-100 text-gray-800 border border-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <div className="text-gray-400 text-sm italic animate-pulse">
                  Cook is thinking...
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-gray-200 bg-white">
            <Textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 resize-none border-gray-300 text-sm focus:ring-1 focus:ring-dark-cream rounded-lg"
            />
            <Button
              onClick={handleSend}
              disabled={loading}
              className="bg-dark-cream hover:bg-light-cream text-white rounded-lg size-10 flex items-center justify-center"
            >
              <Send size={18} />
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
