const kafkaService = require('../services/kafkaService');
const { randomUUID } = require('crypto');

exports.sendMessage = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  console.log('Message:', message);
  console.log('Topic:', message.topic);

  try {
    await kafkaService.sendMessage(message.topic, message);
    res.status(200).json({ status: 'Message sent to Kafka' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Error sending message to Kafka' });
  }
};