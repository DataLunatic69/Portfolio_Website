import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import "./styles/main.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="app">
      <nav className="sidebar">
        <div
          className={`nav-item ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          ABOUT ME
        </div>
        <div
          className={`nav-item ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          CONTACT ME
        </div>
      </nav>

      <main className="main-content">
        {activeTab === "about" && <AboutMe />}
        {activeTab === "contact" && <Contact />}
      </main>
    </div>
  );
}
