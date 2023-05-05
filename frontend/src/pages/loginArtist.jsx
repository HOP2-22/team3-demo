import React, { useContext, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "@/context/context";
export default function LoginArtist() {
  const router = useRouter();

  const [emailArtist, setEmailArtist] = useState();
  const [passwordArtist, setPasswordArtist] = useState();
  const [checkpassArtist, setCheckPassArtist] = useState();
  const { setIsClient, setIsArtist } = useContext(Context);

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
  const loginArt = async () => {
    console.log("================================================");
    if (passwordArtist == checkpassArtist) {
      try {
        const res = await axios.post("http://localhost:7070/artist/login", {
          email: emailArtist,
          password: passwordArtist,
        });
        Cookie.set("token", res.data?.token);
        Cookie.set("user", res.data.user.email);
        console.log(res);

        toast("Successfully logged in!");
        setIsArtist(true);
        setIsClient(false);
        router.push("/CreateProduct");
      } catch (error) {
        toast("Password or Email incorrect!");
      }
    } else {
      toast("Password does not match!");
    }
  };

  return (
    <div className="w-full h-full  mt-[150px] flex flex-col items-center justify-center gap-10">
      <ToastContainer />
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
