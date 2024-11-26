import React, { useState } from "react";
import axios from "axios";

function App() {
  const [messageStatus, setMessageStatus] = useState("");

  const sendTelegramMessage = async () => {
    try {
      const response = await axios.post("http://localhost:8000/webhook", {
        message: "/start",  // Simulate user input "/start"
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