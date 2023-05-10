import { useContext, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Context } from "@/context/context";
import toast from "react-hot-toast";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { setCurrentUser, setIsClient, setIsArtist } = useContext(Context);

  const EmailInput = async (event) => {
    setEmail(event.target.value);
  };
  const PassInput = async (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    loginUser();
  };

  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:7070/user/login", {
        email: email,
        password: password,
      });

      toast.success("Login successful");

      setCurrentUser(null);

      Cookie.set("token", res.data?.token);
      Cookie.set("user", res.data?.user.email);
      console.log(res.data.user.Role);
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("Нууц үг эсвэл Цахим хаяг буруу байна");
    }
  };

  return (
    <div className="w-full h-full  mt-[150px] flex flex-col items-center justify-center gap-10">
      <div className="text-[32px] text-[#1b1927]">Нэвтрэх</div>
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

        <div className="w-[100%] flex justify-between px-[10px] flex-col gap-6">
          <Link href="/loginArtist">
            <p className="text-[16px] ml-[10px] ">
              Уран бүтээлч бол энд дарна уу?
            </p>
          </Link>
          <Link href="/SignUp">
            <p className="text-[16px] ml-[10px] ">
              Шинэ хэрэглэгч бол энд дарна уу ?
            </p>
          </Link>
        </div>

        <button
          className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white"
          onClick={handleLogin}
        >
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
