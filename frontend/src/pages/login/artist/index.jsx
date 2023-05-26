import axios from "axios";
import React, { useContext, useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

import { UserContext } from "@/context/UserContext";
import { ArtistContext } from "@/context/Artistcontext";
import { toast } from "react-hot-toast";

const ArtistLogin = () => {
  const { push } = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { setIsArtist, setUser, user } = useContext(ArtistContext);

  const { setIsClient } = useContext(UserContext);

  const emailHandler = async (event) => {
    setForm({ ...form, email: event.target.value });
  };

  const passwordHandler = async (event) => {
    setForm({ ...form, password: event.target.value });
  };

  const login = async () => {
    try {
      if (form.email.length === 0) {
        return toast.error("write your email address");
      }

      if (form.password.length === 0) {
        return toast.error("write your password");
      }

      const { data } = await axios.post("http://localhost:7070/artist/login", {
        email: form?.email,
        password: form?.password,
      });

      Cookie.set("token", data?.token);

      setIsClient(false);
      setIsArtist(true);

      setUser(data?.user);

      toast.success("Successfully logged in!");

      push("/add_merch");
    } catch (error) {
      toast.error("Password or Email incorrect!");
    }
  };

  return (
    <div
      className="w-full  h-[60vh]  py-[650px] flex flex-col items-center justify-center gap-10"
      style={{ backgroundColor: "#090520" }}
    >
      <div className="text-[32px] text-[white]"> Нэвтрэх</div>
      <div className="flex flex-col gap-6">
        <div className="">
          <p className="px-[20px] text-[white]">Цахим хаяг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            value={form?.email}
            onChange={emailHandler}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[white]">Нууц үг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            value={form?.password}
            onChange={passwordHandler}
          />
        </div>
        <div className="flex gap-2 px-[20px]">
          <input type="checkbox" />
          <p style={{ color: "white" }}>Remind me</p>
        </div>
        <button
          className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white"
          onClick={() => login()}
        >
          Нэвтрэх
        </button>
      </div>
    </div>
  );
};

export default ArtistLogin;
