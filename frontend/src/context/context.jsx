import React, { createContext, useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";

export const Context = createContext({});

export const Provider = ({ children }) => {
  const [userLogin, setUserLlogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpass, setCheckPass] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordUserSignUp, setPasswordUserSignUp] = useState("");
  const [checkpassUserSignUp, setCheckPassUserSignUp] = useState("");

  const [emailArtist, setEmailArtist] = useState("");
  const [passwordArtist, setPasswordArtist] = useState("");
  const [checkpassArtist, setCheckPassArtist] = useState("");
  const [emailSignUpArtist, setEmailSignUpArtist] = useState("");
  const [passwordSignUpArtist, setPasswordSignUpArtist] = useState("");
  const [checkpassSignUpArtist, setCheckPassSignUpArtist] = useState("");
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

  const signUpUser = async () => {
    if (passwordUserSignUp == checkpassUserSignUp) {
      try {
        const res = await axios.post("http://localhost:7070/user/create", {
          email: emailSignUp,
          password: passwordUserSignUp,
        });

        alert("amjilttai burgegdle");
      } catch (error) {
        alert("Нууц үг эсвэл Цахим хаяг буруу байна");
      }
    } else {
      alert("nuuts ug taarahgui baina");
    }
  };

  // ARTIST FUNCTION

  const login = async () => {
    console.log("is fnction working");
    if (passwordArtist == checkpassArtist) {
      try {
        const res = await axios.post("http://localhost:7070/artist/login", {
          email: emailArtist,
          password: passwordArtist,
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
        signUpUser,
        login,
        signUp,

        // user sign up and login states
        email,
        setEmail,
        password,
        setPassword,
        checkpass,
        setCheckPass,
        passwordUserSignUp,
        setPasswordUserSignUp,
        checkpassUserSignUp,
        setCheckPassUserSignUp,
        emailSignUp,
        setEmailSignUp,
        // artist sign up and login states
        emailArtist,
        setEmailArtist,
        passwordArtist,
        setPasswordArtist,
        checkpassArtist,
        setCheckPassArtist,
        emailSignUpArtist,
        setEmailSignUpArtist,
        passwordSignUpArtist,
        setPasswordSignUpArtist,
        checkpassSignUpArtist,
        setCheckPassSignUpArtist,
        artistType,
        setArtistType,
        username,
        setUserName,
      }}>
      {children}
    </Context.Provider>
  );
};
