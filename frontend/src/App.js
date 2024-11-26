import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [messageStatus, setMessageStatus] = useState("");

  const sendTelegramMessage = async () => {
    try {
      await axios.post("https://rtu-mp-bot-two.vercel.app/webhook", {
        message: "/start",
      });
      setMessageStatus("Message sent successfully!");
    } catch (error) {
      setMessageStatus("Failed to send message.");
    }
  };

  return (
    <div className="card">
      <h1>Welcome to My Web App!</h1>
      <p>Click the button below to get started:</p>
      <button onClick={sendTelegramMessage}>Send Start Message to Telegram</button>
      <p>{messageStatus}</p>
    </div>
  );
}

export default App;