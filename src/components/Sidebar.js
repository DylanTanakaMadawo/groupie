import React, { useEffect, useState } from "react";
import db from "../FirebaseConfig";

import "./sidebar.css";

import { Avatar, Divider, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";
import { SidebarChat } from "./SidebarChat/SidebarChat";
import { useStateValue } from "../StateProvider";

export const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLargeIcon style={{ color: "#e6e6e6" }} />
          </IconButton>
          <IconButton>
            <ChatIcon style={{ color: "#e6e6e6" }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{ color: "#e6e6e6" }} />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar-chats">
        <SidebarChat addNewChat />
        <Divider sx={{ margin: "0 20px 0 20px", backgroundColor: "#2b2b2b" }} />
        {rooms.map((room) => (
          <>
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
            <Divider
              sx={{ margin: "0 20px 0 20px", backgroundColor: "#2b2b2b" }}
            />
          </>
        ))}
      </div>
    </div>
  );
};
