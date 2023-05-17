import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

const Create = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [boolean, setBoolean] = useState(false);

  const EmailInput = async (event) => {
    setEmail(event.target.value);
  };
  const PassInput = async (event) => {
    setPassword(event.target.value);
  };
  const CreateUser = async () => {
    try {
      const response = await axios.post("http://localhost:7070/user/create", {
        email: email,
        password: password,
      });
      console.log(response);
      alert("User created successfully");
    } catch (error) {
      console.log(error);
      alert("email esvel password buruu bn");
    }
  };
  return (
    <div className="mt-[100px] w-full h-[500px] flex items-center justify-center" style={{backgroundColor: "#090520"}}>
      <div className="flex flex-col items-center gap-[30px]" >
        <p className="text-[32px] font-bold"> Нэвтрэх</p>
        <div className="flex flex-col items-center gap-[20px]">
          <div className="flex flex-col gap-4">
            <p className="ml-[20px] text-[16px]">Цахим хаяг</p>
            <input
              placeholder="email"
              onChange={EmailInput}
              className="w-[350px] h-[45px] text-[20px] rounded-full shadow-2xl px-[20px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="ml-[20px] text-[16px]">Нууц үг</p>
            <input
              placeholder="········"
              onChange={PassInput}
              className="text-[20px] w-[350px] h-[45px] rounded-full shadow-2xl px-[20px] outline-none"
            />
          </div>
          <button
            onClick={() => {
              CreateUser();
            }}
            className=" w-[350px] h-[45px] rounded-full bg-[#1b1927] text-white">
            Нэвтрэх
          </button>
          <p>Шинэ бүртгүүлэх бол энд дарна уу?</p>
        </div>
      </div>
    </div>
  );
};

export default Create;
