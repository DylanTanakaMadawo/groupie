import React from "react";
import { Sidebar } from "./Sidebar";
import { Chat } from "./Chat/Chat";

export const Homepage = () => {
  return (
    <>
      <Sidebar />
      <Chat />
    </>
  );
};
