const mqtt = require("mqtt");

const topicArray = []; // topic(주제)를 담을 객체

module.exports = () => {
  const client = mqtt.connect("mqtt://192.168.10.104:1883"); // MQTT Broker(server)를 연결

  client.on("connect", (roomId, user) => {
    console.log("connected :", client.connected);
    client.subscribe(`/room/${roomId}`, () => {
      topicArray.push(`/room/${roomId}`);
    });
  });

  client.on("disconnect", () => {
    client.end();
  });

  client.on("error", (error) => {
    console.log("error: ", error);
    process.exit(1);
  });

  client.on("message", (topic, message, packet) => {
    console.log("topic : ", topic);
    console.log("message : ", message);
    console.log("packet : ", packet);
    client.publish(topic, message);
  });
};
