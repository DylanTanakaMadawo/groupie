import React, { useEffect, useState } from "react";
import db from "../../FirebaseConfig";
import MenuIcon from "@mui/icons-material/Menu";

import "./index.css";

import { SidebarChat } from "../SidebarChat/SidebarChat";
// import { useStateValue } from "../../StateProvider";

import { Divider, IconButton } from "@mui/material";

export const Appdrawer = () => {
  // const toggleBtn = document.querySelector(".toggle-btn");
  // const toggleBtnIcon = document.querySelector(".toggle-btn i");
  const dropDownMenu = document.querySelector(".dropdown-menu");

  // toggleBtn.onclick = () => {
  //   dropDownMenu.classList.toggle("open");
  // };

  const toggleFunction = () => {
    dropDownMenu.classList.toggle("open");
  };

  const [rooms, setRooms] = useState([]);
  // const [{ user }, dispatch] = useStateValue();

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
    <>
      <div>
        <div className="toggle-btn">
          <i>
            <IconButton
              sx={{ color: "white", backgroundColor: "black" }}
              onClick={toggleFunction}
            >
              <MenuIcon />
            </IconButton>
          </i>
        </div>
        <div className="dropdown-menu">
          {rooms.map((room) => (
            <>
              <SidebarChat key={room.id} id={room.id} name={room.data.name} />
              <Divider
                sx={{ margin: "0 20px 0 20px", backgroundColor: "#2b2b2b" }}
              />
            </>
          ))}
        </div>
        {}
      </div>
    </>
  );
};
