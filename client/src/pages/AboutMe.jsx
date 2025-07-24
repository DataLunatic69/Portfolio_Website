
import React, { useState } from 'react';

// Chatbot Component
function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [
        ...messages,
        { type: 'user', content: input },
        { type: 'assistant', content: 'Thanks for your message! This is a demo response.' }
      ];
      setMessages(newMessages);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.length === 0 ? (
          <div className="chat-placeholder">
            Start a conversation...
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`message message-${msg.type}`}>
              {msg.content}
            </div>
          ))
        )}
      </div>
      <div className="chat-input-area">
        <textarea
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          rows="1"
        />
        <button className="send-btn" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

// Main AboutMe Page
export default function AboutMe() {
  return (
    <div className="about-container">
      <section className="profile-section">
        <div className="profile-header">
          <img
            src="https://avatars.githubusercontent.com/u/00000000?v=4"
            alt="Aman Singh"
            className="profile-avatar"
            style={{ width: 100, height: 100, borderRadius: '50%', marginRight: 24 }}
          />
          <div>
            <h1>Aman Singh</h1>
            <h2>Student at IIIT Guwahati</h2>
            <div className="location">India</div>
          </div>
        </div>
        <div className="about-content">
          <p>
            Hi! I'm Aman, a passionate Computer Science student at IIIT Guwahati. I love building AI tools, contributing to open source, and exploring the world of machine learning and NLP.
          </p>
        </div>
      </section>

      <section className="education-section">
        <h3>Education</h3>
        <div className="education-item">
          <h4>B.Tech in Computer Science</h4>
          <div className="institution">IIIT Guwahati</div>
          <div className="duration">2022 - 2026</div>
        </div>
      </section>

      <section className="project-grid">
        <h3>GitHub Projects</h3>
        <div className="project-card">
          <h4>Math Misconception Classifier</h4>
          <p>A machine learning model to identify misconceptions in math MCQs using embeddings and transformers.</p>
          <a href="https://github.com/username/math-misconception-classifier" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h4>Virtual Digit Recognizer</h4>
          <p>A computer vision project that recognizes hand-drawn digits in real-time using CNN.</p>
          <a href="https://github.com/username/virtual-digit-recognizer" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h4>LipSync AI</h4>
          <p>A lip-sync generator using transformers to align audio with facial movements.</p>
          <a href="https://github.com/username/lipsync-ai" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </section>

      <section className="interests-list">
        <h3>Hobbies & Interests</h3>
        <ul>
          <li>Reading about AI and ML</li>
          <li>Contributing to open source</li>
          <li>Playing chess</li>
          <li>Watching documentaries</li>
        </ul>
      </section>

      <section className="chatbot-section">
        <h3>Ask Me Anything</h3>
        <Chatbot />
      </section>
    </div>
  );
}