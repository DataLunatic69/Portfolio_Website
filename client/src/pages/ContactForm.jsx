import React, { useState } from "react";

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Replace API_HOST
    const API_HOST = "http://localhost:8000";
    const res = await fetch(`${API_HOST}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields)
    });
    if (res.ok) setStatus("sent");
    else setStatus("error");
  };

  return (
    <div className="contact-card">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-header">Contact Me</div>
        <input name="name" placeholder="Your Name" value={fields.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" value={fields.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" rows={5} value={fields.message} onChange={handleChange} required />
        <button type="submit" className="send-btn">Send</button>
        {status === "sent" && <div className="form-success">Thanks! I'll get back to you.</div>}
        {status === "error" && <div className="form-error">Sending failed. Please try again.</div>}
      </form>
    </div>
  );
}
