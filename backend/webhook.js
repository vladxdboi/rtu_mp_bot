const axios = require('axios');

const TELEGRAM_BOT_TOKEN = '7911027827:AAFmPaq8pUdQSjKOASuMAgrTd9001raAtJ4';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const update = req.body;
    console.log('Received update:', update);

    if (update.message && update.message.text === '/start') {
      const chatId = update.message.chat.id;
      const message = "Welcome! Click here to access the web app: https://t.me/rtu_dep_bot/Bobing";

      try {
        const response = await axios.post(TELEGRAM_API_URL, {
          chat_id: chatId,
          text: message,
        });

        if (response.status === 200) {
          console.log('Message sent to Telegram.');
          return res.status(200).json({ status: 'ok' });
        } else {
          console.error('Failed to send message:', response.data);
          return res.status(500).json({ status: 'error', message: 'Failed to send message' });
        }
      } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).json({ status: 'error', message: 'Error communicating with Telegram API' });
      }
    } else {
      return res.status(400).json({ status: 'error', message: 'Invalid message' });
    }
  } else {
    // Respond with 405 Method Not Allowed for non-POST requests
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }
};