import React, { useEffect, useState } from "react";

import "./SidebarChat.css";
import { Avatar } from "@mui/material";
import db from "../../FirebaseConfig";
import { Link } from "react-router-dom";

export const SidebarChat = ({ id, name, addNewChat }) => {
  const [messages, setMessages] = useState("");
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  });
  const createChat = () => {
    const roomName = prompt("Please Enter name for NEW chat room");

    if (roomName) {
      //do something database queries
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar style={{ marginRight: "12px" }} />
        <div className="sidebarChat-info">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  );
};
