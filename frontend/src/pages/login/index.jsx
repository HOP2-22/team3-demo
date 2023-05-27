import { useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { UserContext } from "@/context/UserContext";
import { ArtistContext } from "@/context/Artistcontext";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { push } = useRouter();

  const { setIsClient } = useContext(UserContext);
  const { setUser, setIsArtist } = useContext(ArtistContext);

  const emailHandler = async (event) => {
    setForm({ ...form, email: event.target.value });
  };
  const passwordHandler = async (event) => {
    setForm({ ...form, password: event.target.value });
  };

  //nguu enter drhr shud login hiigddg function herg blnbh gj bdlo
  //ghd nguu login hiigdehgu bgaa zasaj cddguee trns bish blj bga tinth

  useEffect(() => {
    document.addEventListener("keyup", onkey, true);
  }, []);

  const onkey = async (event) => {
    if (event.keyCode === 13 && event.code === "Enter") {
      login();
    }
  };

  const login = async () => {
    if (form.email.length === 0) {
      return toast.error("write your email address");
    }

    if (form.password.length === 0) {
      return toast.error("write your password");
    }

    try {
      //end aldaa baigaa tul yanzlaarai

      //hamgi bagadaa pass ni 8 baih ystoi gsn blhr alda grcjao
      // trns bish zuerbnao

      const { data } = await axios.post("http://localhost:7070/user/login", {
        email: form?.email,
        password: form?.password,
      });

      Cookie.set("token", data?.token);

      setIsClient(true);
      setIsArtist(false);

      setUser(data.data);

      setForm({
        email: "",
        password: "",
      });

      push("/");

      toast.success("login successful");
    } catch (error) {
      toast.error("login error");
      console.log(error);
    }
  };

  return (
    <div
      className="w-full  h-[60vh]   py-[650px] flex flex-col items-center justify-center gap-10"
      style={{ backgroundColor: "#090520" }}
    >
      <div className="text-[32px] text-[white]">Нэвтрэх</div>
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
            value={form?.password}
            placeholder="••••••••••"
            onChange={passwordHandler}
          />
        </div>

        <div className="w-[100%] flex justify-between px-[10px] flex-col gap-6">
          <Link href="/login/artist">
            <p className="text-[white] ml-[10px] ">
              Уран бүтээлч бол энд дарна уу?
            </p>
          </Link>
          <Link href="/signup">
            <p className="text-[white] ml-[10px] ">
              Шинэ хэрэглэгч бол энд дарна уу ?
            </p>
          </Link>
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

export default Login;
