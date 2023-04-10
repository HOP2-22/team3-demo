import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const EmailInput = async (event) => {
    setEmail(event.target.value);
  };
  const PassInput = async (event) => {
    setPassword(event.target.value);
  };
  const Login = async () => {
    console.log("dfgdfgdfgdffudsthfgvsdyftgsdhfsdghfvhsdvfsdhg");
    try {
      const response = await axios.post("http://localhost:7070/user/login", {
        email: email,
        password: password,
      });
      console.log(response);
      alert("Login successfully ");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-[500px] w-full h-[600px]">
      <input placeholder="email" onChange={EmailInput} />
      <input placeholder="password" onChange={PassInput} />
      <button
        onClick={() => {
          Login();
        }}>
        dfgdf
      </button>
    </div>
  );
};

export default Login;
