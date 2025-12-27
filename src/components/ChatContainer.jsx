import { useState } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

export default function ChatContainer() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("http://api.yogeshramadoss.cloud/chat/invoke", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: text })
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.output }
    ]);
  };

  return (
    <div className="flex flex-col w-full h-full max-w-4xl mx-auto">

      {/* HEADER */}
      <div className="text-center py-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-blue-400">
          WELCOME TO CHAT ME
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Your personal AI assistant powered by Ollama
        </p>
      </div>

      {/* CHAT MESSAGES */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} text={m.content} />
        ))}
      </div>

      {/* INPUT */}
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
