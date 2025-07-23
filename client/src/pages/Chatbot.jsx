import React, { useState } from "react";

export default function Chatbot() {
  const [threadId] = useState(() => crypto.randomUUID());
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // Replace API_HOST with your backend URL
  const API_HOST = "http://localhost:8000"; 

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return;

    setMessages(msgs => [...msgs, {role: "user", content: input}]);
    
    const res = await fetch(`${API_HOST}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        thread_id: threadId,
        query: input
      })
    });
    const data = await res.json();
    if (data.status === "interrupted") {
      setMessages(msgs => [...msgs, {role: "assistant", content: data.interrupt_data.llm_response}]);
    } else if (data.result && data.result.final_response) {
      setMessages(msgs => [...msgs, {role: "assistant", content: data.result.final_response}]);
    }
    setInput("");
  };

  return (
    <div className="chatbot-card">
      <div className="chatbot-title">Ask me about my work, education, or interests!</div>
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div
            className={`chat-bubble ${msg.role === "user" ? "user-bubble" : "assistant-bubble"}`}
            key={i}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-input-row">
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="send-btn">Send</button>
      </form>
    </div>
  );
}
