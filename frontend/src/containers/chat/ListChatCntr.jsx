// // // // import React, { useEffect, useState } from "react";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import ListChatComp from "../../components/chat/ListChatComp";
// // // // import { listChats } from "../../modules/chat/ChatMod";
// // // // import mqtt from "mqtt";

// // // // const ListChatsCntr = () => {
// // // //   const dispatch = useDispatch();
// // // //   const { chats, chatError, loading, room } = useSelector(
// // // //     ({ ChatMod, RoomMod }) => ({
// // // //       chats: ChatMod.chats,
// // // //       chatError: ChatMod.chatError,
// // // //       room: RoomMod.room?._id,
// // // //     })
// // // //   );

// // // //   const [message, setMessage] = useState([]);
// // // //   const [inputMessage, setInputMessage] = useState("");

// // // //   const onChange = (e) => {
// // // //     setInputMessage(e.target.value);
// // // //   };

// // // //   useEffect(() => {
// // // //     const mqttClient = mqtt.connect("mqtt://192.168.10.104:1883");
// // // //     mqttClient.on("connect", () => {
// // // //       console.log("MQTT connected:", mqttClient.connected);
// // // //       mqttClient.subscribe(`/room/${room}`, () => {
// // // //         console.log(`/room/${room} 구독 중`);
// // // //       });
// // // //     });

// // // //     mqttClient.on("message", (topic, message) => {
// // // //       console.log(`받은 메시지 ==> ${topic}: ${message.toString()}`);
// // // //       const receivedMessage = JSON.parse(message.toString());
// // // //       setMessages((prevMessages) => [...prevMessages, receivedMessage]);
// // // //     });

// // // //     return () => {
// // // //       mqttClient.end();
// // // //     };

// // // //     // dispatch(listChats({ room }));
// // // //   }, [room]);

// // // //   const handleSendMessage = () => {
// // // //     const newMessage = {
// // // //       user: "User",
// // // //       content: inputMessage,
// // // //     };

// // // //     const mqttClient = mqtt.connect("mqtt://192.168.10.104:1883");
// // // //     mqttClient.publish(`/room/${room}`, JSON.stringify(newMessage));

// // // //     setInputMessage("");
// // // //   };

// // // //   return (
// // // //     <ListChatComp
// // // //       chats={chats}
// // // //       onChange={onChange}
// // // //       loading={loading}
// // // //       chatError={chatError}
// // // //       inputMessage={inputMessage}
// // // //       onClick={handleSendMessage}
// // // //     />
// // // //   );
// // // // };

// // // // export default ListChatsCntr;

// // // import React, { useEffect, useState } from "react";
// // // import { useSelector } from "react-redux";
// // // import ListChatComp from "../../components/chat/ListChatComp";
// // // import mqtt from "mqtt";

// // // const ListChatsCntr = () => {
// // //   const { chats, chatError, loading, room } = useSelector(
// // //     ({ ChatMod, RoomMod }) => ({
// // //       chats: ChatMod.chats,
// // //       chatError: ChatMod.chatError,
// // //       room: RoomMod.room?._id,
// // //     })
// // //   );

// // //   const [messages, setMessages] = useState([]);
// // //   const [inputMessage, setInputMessage] = useState("");

// // //   const onChange = (e) => {
// // //     setInputMessage(e.target.value);
// // //   };

// // //   useEffect(() => {
// // //     const mqttClient = mqtt.connect("mqtt://192.168.10.104:1883");
// // //     mqttClient.on("connect", () => {
// // //       console.log("MQTT connected:", mqttClient.connected);
// // //       mqttClient.subscribe(`/room/${room}`, () => {
// // //         console.log(`/room/${room} 구독 중`);
// // //       });
// // //     });

// // //     mqttClient.on("message", (topic, message) => {
// // //       console.log(`받은 메시지 ==> ${topic}: ${message.toString()}`);
// // //       const receivedMessage = JSON.parse(message.toString());
// // //       setMessages((prevMessages) => [...prevMessages, receivedMessage]);
// // //     });

// // //     return () => {
// // //       mqttClient.end();
// // //     };

// // //     // dispatch(listChats({ room }));
// // //   }, [room]);

// // //   const handleSendMessage = () => {
// // //     const newMessage = {
// // //       user: "User",
// // //       content: inputMessage,
// // //     };

// // //     const mqttClient = mqtt.connect("mqtt://192.168.10.104:1883");
// // //     mqttClient.publish(`/room/${room}`, JSON.stringify(newMessage));

// // //     setInputMessage("");
// // //   };

// // //   return (
// // //     <ListChatComp
// // //       chats={chats}
// // //       messages={messages}
// // //       onChange={onChange}
// // //       loading={loading}
// // //       chatError={chatError}
// // //       inputMessage={inputMessage}
// // //       onClick={handleSendMessage}
// // //     />
// // //   );
// // // };

// // // export default ListChatsCntr;

// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import ListChatComp from "../../components/chat/ListChatComp";
// // import { listChats } from "../../modules/chat/ChatMod";
// // import { client } from "paho-mqtt";
// // import io from "socket.io-client";

// // const ListChatsCntr = () => {
// //   const dispatch = useDispatch();
// //   const { chats, chatError, loading, room } = useSelector(
// //     ({ ChatMod, RoomMod }) => ({
// //       chats: ChatMod.chats,
// //       chatError: ChatMod.chatError,
// //       room: RoomMod.room?._id,
// //     })
// //   );

// //   const [messages, setMessages] = useState([]);
// //   const [inputMessage, setInputMessage] = useState("");

// //   const onChange = (e) => {
// //     setInputMessage(e.target.value);
// //   };

// //   useEffect(() => {
// //     const mqttClient = new client("ws://localhost:8080", "clientId");
// //     mqttClient.onConnectionLost = (responseObject) => {
// //       if (responseObject.errorCode !== 0) {
// //         console.log("Connection lost: " + responseObject.errorMessage);
// //       }
// //     };

// //     mqttClient.onMessageArrived = (message) => {
// //       console.log("Received message: " + message.payloadString);
// //       const receivedMessage = JSON.parse(message.payloadString);
// //       setMessages((prevMessages) => [...prevMessages, receivedMessage]);
// //     };

// //     mqttClient.connect({ onSuccess: onConnect });

// //     const onConnect = () => {
// //       console.log("Connected");
// //       mqttClient.subscribe(`/room/${room}`);
// //     };

// //     return () => {
// //       mqttClient.disconnect();
// //     };

// //     // dispatch(listChats({ room }));
// //   }, [room]);

// //   const handleSendMessage = () => {
// //     const newMessage = {
// //       user: "User",
// //       content: inputMessage,
// //     };

// //     const mqttClient = new client("ws://localhost:8080", "clientId");
// //     mqttClient.send(`/room/${room}`, JSON.stringify(newMessage));

// //     setInputMessage("");
// //   };

// //   return (
// //     <ListChatComp
// //       chats={chats}
// //       onChange={onChange}
// //       loading={loading}
// //       chatError={chatError}
// //       inputMessage={inputMessage}
// //       onClick={handleSendMessage}
// //     />
// //   );
// // };

// // export default ListChatsCntr;


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ListChatComp from "../../components/chat/ListChatComp";
// import { listChats } from "../../modules/chat/ChatMod";
// import mqtt from "mqtt";

// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import ListChatComp from "../../components/chat/ListChatComp";
// // import { listChats } from "../../modules/chat/ChatMod";
// // import { client } from "paho-mqtt";


// // const ListChatsCntr = () => {
// //   const dispatch = useDispatch();
// //   const { chats, chatError, loading, room } = useSelector(
// //     ({ ChatMod, RoomMod }) => ({
// //       chats: ChatMod.chats,
// //       chatError: ChatMod.chatError,
// //       room: RoomMod.room?._id,
// //     })
// //   );

// //   const [messages, setMessages] = useState([]);
// //   const [inputMessage, setInputMessage] = useState("");

// //   const onChange = (e) => {
// //     setInputMessage(e.target.value);
// //   };


//   useEffect(() => {
//     const mqttClient = mqtt.connect("mqtt://localhost:1883"); // 서버 주소에 맞게 수정

//     mqttClient.on("connect", () => {
//       console.log("MQTT connected:", mqttClient.connected);
//     });

//     mqttClient.on("disconnect", () => {
//       console.log("mqttClient disconnected");
//     });

//     mqttClient.on("error", (error) => {
//       console.log("MQTT error:", error);
//     });

//     mqttClient.on("message", (topic, message) => {
//       console.log("Received message ==> ", topic, " : ", message);
//       setMessages((prevMessages) => [...prevMessages, message.toString()]);
//     });

// //   useEffect(() => {
// //     const mqttClient = new client("ws://localhost:8080", "clientId");
// //     mqttClient.onConnectionLost = (responseObject) => {
// //       if (responseObject.errorCode !== 0) {
// //         console.log("Connection lost: " + responseObject.errorMessage);
// //       }
// //     };

// //     mqttClient.onMessageArrived = (message) => {
// //       console.log("Received message: " + message.payloadString);
// //       const receivedMessage = JSON.parse(message.payloadString);
// //       setMessages((prevMessages) => [...prevMessages, receivedMessage]);
// //     };

// //     mqttClient.connect({ onSuccess: onConnect });

// //     const onConnect = () => {
// //       console.log("Connected");
// //       mqttClient.subscribe(`/room/${room}`);
// //     };


// //     return () => {
// //       mqttClient.disconnect();
// //     };

// //     // dispatch(listChats({ room }));
// //   }, [room]);

// //   const handleSendMessage = () => {
// //     const newMessage = {
// //       user: "User",
// //       content: inputMessage,
// //     };


//     const mqttClient = mqtt("mqtt://localhost:1883"); // 서버 주소에 맞게 수정
//     mqttClient.publish(`/room/${room}`, JSON.stringify(newMessage));

// //     const mqttClient = new client("ws://localhost:8080", "clientId");
// //     mqttClient.send(`/room/${room}`, JSON.stringify(newMessage));


// //     setInputMessage("");
// //   };

// //   return (
// //     <ListChatComp
// //       chats={chats}
// //       onChange={onChange}
// //       loading={loading}
// //       chatError={chatError}
// //       inputMessage={inputMessage}
// //       onClick={handleSendMessage}
// //     />
// //   );
// // };

// // export default ListChatsCntr;
