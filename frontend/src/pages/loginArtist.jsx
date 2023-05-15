import React, { useContext, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "@/context/context";
import { useAuthContext } from "../context/context";

export default function LoginArtist() {
  const router = useRouter();

  const [emailArtist, setEmailArtist] = useState();
  const [passwordArtist, setPasswordArtist] = useState();
  const { setIsClient, setIsArtist, currentUser, setCurrentUser } =
    useAuthContext();

  const EmailInput = async (event) => {
    setEmailArtist(event.target.value);
  };
  const PassInput = async (event) => {
    setPasswordArtist(event.target.value);
  };

  const handleLogin = () => {
    loginArt();
  };

  const loginArt = async () => {
    try {
      const { data } = await axios.post("http://localhost:7070/artist/login", {
        email: emailArtist,
        password: passwordArtist,
      });
      Cookie.set("token", data?.token);
      Cookie.set("user", data?.user.email);
      Cookie.set("role", data?.user.Role);

      setCurrentUser({
        username: data?.user?.username,
        image: data?.user?.image,
        isArtist: data?.user?.isArtist,
      });

      toast("Successfully logged in!");

      // router.push("/");
    } catch (error) {
      toast("Password or Email incorrect!");
    }
  };

  return (
    <div className="w-full  h-[60vh]  mt-[150px] flex flex-col items-center justify-center gap-10">
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
        <div className="flex gap-2 px-[20px]">
          <input type="checkbox" />
          <p>Remind me</p>
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
