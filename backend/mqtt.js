const mqtt = require("mqtt");

exports.connectToRoom = (roomId) => {
  const mqttClient = mqtt.connect("mqtt://192.168.10.102:1883"); // MQTT Broker(server)를 연결

  mqttClient.on("connect", () => {
    console.log("MQTT connected :", mqttClient.connected);
    mqttClient.subscribe(`/room/${roomId}`, () => {
      console.log(`/room/${roomId} 구독 중`);
    });
  });

  mqttClient.on("disconnect", () => {
    console.log("MQTT disconnect");
    mqttClient.end();
  });

  mqttClient.on("error", (error) => {
    console.log("MQTT error: ", error);
    process.exit(1);
  });

  mqttClient.on("message", (topic, message) => {
    console.log(`보낸 메세지 ==> ${topic}: ${message.toString()}`);
  });

  return mqttClient;
};
