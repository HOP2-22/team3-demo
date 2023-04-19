import React, { useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";

export default function LoginArtist() {
  const [emailArtist, setEmailArtist] = useState();
  const [passwordArtist, setPasswordArtist] = useState();
  const [checkpassArtist, setCheckPassArtist] = useState();

  const loginArt = async () => {
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

  const EmailInput = async (event) => {
    setEmailArtist(event.target.value);
  };
  const PassInput = async (event) => {
    setPasswordArtist(event.target.value);
  };
  const PassInputCheck = async (event) => {
    setCheckPassArtist(event.target.value);
  };
  const handleLogin = () => {
    loginArt();
  };
  return (
    <div className="w-full h-full  mt-[150px] flex flex-col items-center justify-center gap-10">
      <div className="text-[32px] text-[#1b1927]"> Нэвтрэх</div>
      <div className="flex flex-col gap-6">
        <div className="">
          <p className="px-[20px] text-[16px]">Цахим хаяг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={EmailInput}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px]">Нууц үг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={PassInput}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px]">Нууц үгээ давтна уу?</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={PassInputCheck}
          />
        </div>
        <button
          className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white"
          onClick={handleLogin}>
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
