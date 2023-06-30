const mqtt = require("mqtt");

const options = {
  host: "127.0.0.1",
  port: 1883,
};

const topicArray = [];

const client = mqtt.connect(url, options);

client.on("connect", () => {
  console.log("connected :", client.connected);
  topicArray.push(url);
  client.subscribe(topicArray, (err) => {
    if (!err) client.publish(`/chat/room/${options.roomId}`, "입장!");
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
});

// client.publish(`/chat/room/${options.roomId}`, options.msg);

// client.subscribe(topicArray);
