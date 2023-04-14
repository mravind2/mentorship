const express = require('express');
const Chat = require('./ChatModel');

const router = express.Router();

router.get('/api/chat', async (req, res) => {
  try {
    const messages = await Chat.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/api/chat', async (req, res) => {
  const newMessage = new Chat({
    username: req.body.username,
    message: req.body.message,
    timestamp: new Date(),
  });

  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
