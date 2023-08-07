import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../../FirebaseConfig";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../reducer";

export const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-container">
        <img src="" alt="" />
        <div className="login-text">
          <h1>Sign In to Dandaro</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};
