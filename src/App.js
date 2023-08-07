import React from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Chat } from "./components/Chat/Chat";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { useStateValue } from "./StateProvider";
// import { Homepage } from "./components/Homepage";

export const App = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              {/* <Route path="/" /> */}
              <Route path="/" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
      <p style={{ padding: "10px" }}>Site Developed By Dylan Madawo | 2023</p>
    </div>
  );
};
