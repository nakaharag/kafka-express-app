const { Kafka } = require('kafkajs');

let producer;

const connectProducer = async () => {
  if (!producer) {
    const kafka = new Kafka({
      clientId: `kafka-express-app-${process.pid}`,
      brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
    });

    producer = kafka.producer();

    try {
      await producer.connect();
      console.log(`Kafka producer connected in worker ${process.pid}`);
    } catch (error) {
      console.error(`Error connecting Kafka producer in worker ${process.pid}:`, error);
    }
  }
};

connectProducer();

exports.sendMessage = async (topic, message) => {
  await producer.send({
    topic,
    messages: [{ value: message }],
  });
};

process.on('SIGINT', async () => {
  try {
    await producer.disconnect();
    console.log(`Kafka producer disconnected in worker ${process.pid}`);
    process.exit(0);
  } catch (error) {
    console.error(`Error disconnecting Kafka producer in worker ${process.pid}:`, error);
    process.exit(1);
  }
});