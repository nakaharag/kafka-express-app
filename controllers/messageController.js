const kafkaService = require('../services/kafkaService');

exports.sendMessage = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    await kafkaService.sendMessage('test-topic', message);
    res.status(200).json({ status: 'Message sent to Kafka' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Error sending message to Kafka' });
  }
};