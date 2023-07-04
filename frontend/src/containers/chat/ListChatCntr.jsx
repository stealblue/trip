import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListChatComp from "../../components/chat/ListChatComp";
import { listChats } from "../../modules/chat/ChatMod";
import WebSocket from "ws";
import mqtt from "mqtt";

const ListChatsCntr = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();
  const { chats, chatError, loading, room } = useSelector(
    ({ ChatMod, RoomMod }) => ({
      chats: ChatMod.chats,
      chatError: ChatMod.chatError,
      room: RoomMod.room?._id,
    })
  );

  const onChange = (e) => {
    setInputMessage(e.target.value);
  };

  useEffect(() => {
    const mqttClient = mqtt.connect("mqtt://192.168.10.104:1883");
    const ws = new WebSocket("ws://localhost:8080");
    mqttClient.on("connect", () => {
      console.log("MQTT connected : ", mqttClient.connected);
      mqttClient.subscribe(`/room/${room}`, () => {
        console.log(`/room/${room} 구독중`);
      });
    });
    mqttClient.on("message", (topic, message) => {
      console.log(`받은 메시지 ==> ${topic}: ${message.toString()}`);
      const receivedMessage = JSON.parse(message.toString());
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    });

    ws.onmessage = (event) => {
      console.log(`WebSocket으로 받은 메시지: ${event.data}`);
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    return () => {
      mqttClient.end();
      ws.close();
    };
    // dispatch(listChats({ room }));
  }, []);

  const handleSendMessage = () => {
    const newMessage = {
      user: "User",
      content: inputMessage,
    };

    // MQTT로 메시지를 보냄
    const mqttClient = mqtt.connect("mqtt://192.168.10.102:1883");
    mqttClient.publish("/chatroom", JSON.stringify(newMessage));

    // WebSocket으로 메시지를 보냄
    const ws = new WebSocket("ws://localhost:8080");
    ws.send(JSON.stringify(newMessage));

    setInputMessage("");
  };

  return (
    <ListChatComp
      chats={chats}
      onChange={onChange}
      loading={loading}
      chatError={chatError}
      inputMessage={inputMessage}
      onClick={handleSendMessage}
    />
  );
};

export default ListChatsCntr;
