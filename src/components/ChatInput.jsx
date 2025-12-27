import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="p-4 border-t border-gray-700 flex gap-2">
      <input
        className="flex-1 bg-gray-800 text-white p-3 rounded"
        placeholder="Ask something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 px-4 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}
