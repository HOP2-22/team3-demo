import React, { createContext, useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";

export const Context = createContext({});

export const Provider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpass, setCheckPass] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordUserSignUp, setPasswordUserSignUp] = useState("");
  const [checkpassUserSignUp, setCheckPassUserSignUp] = useState("");

  const [artistType, setArtistType] = useState("");
  const [username, setUserName] = useState("");

  // USER FUNCTIONS

  const loginUser = async () => {
    if (password == checkpass) {
      try {
        const res = await axios.post("http://localhost:7070/user/login", {
          email: email,
          password: password,
        });
        alert("Login successful");
        Cookie.set("token", res.data?.token);
      } catch (error) {
        alert("Нууц үг эсвэл Цахим хаяг буруу байна");
      }
    } else {
      alert("nuuts ug taarahgui baina");
    }
  };

  // ARTIST FUNCTION

  const signUp = async () => {
    if (passwordUserSignUp == checkpassUserSignUp) {
      try {
        const res = await axios.post("http://localhost:7070/artist/create", {
          email: emailSignUp,
          password: passwordUserSignUp,
          username: username,
          type_of: artistType,
        });

        alert("amjilttai burgegdle");
      } catch (error) {
        alert("Нууц үг эсвэл Цахим хаяг буруу байна");
      }
    } else {
      alert("nuuts ug taarahgui baina");
    }
  };

  return (
    <Context.Provider
      value={{
        // functions
        loginUser,
        signUp,

        // user sign up and login states
        setEmail,
        setPassword,
        setCheckPass,
        setPasswordUserSignUp,
        setCheckPassUserSignUp,
        setEmailSignUp,
        // artist sign up and login states
        setArtistType,
        setUserName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
