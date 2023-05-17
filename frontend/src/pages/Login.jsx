import { useContext, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Context } from "@/context/context";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

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
      const { data } = await axios.post("http://localhost:7070/user/login", {
        email: email,
        password: password,
      });

      toast.success("Login successful");

      setCurrentUser(null);

      Cookie.set("token", data?.token);
      Cookie.set("user", data?.user.email);
      Cookies.set("role", data?.user.Role);
      Cookies.set("image", data?.user.image);
      Cookies.set("userId", data?.user._id);

      setIsClient(true);
      setIsArtist(false);

      setCurrentUser({
        username: data?.user?.username,
        image: data?.user?.image,
        userid: data?.user._id,
      });

      router.push("/");
    } catch (error) {
      alert("Нууц үг эсвэл Цахим хаяг буруу байна");
    }
  };

  return (
    <div className="w-full  h-[60vh]  mt-[75px] flex flex-col items-center justify-center gap-10"style={{backgroundColor: "#090520"}}>
      <div className="text-[32px] text-[white]">Нэвтрэх</div>
      <div className="flex flex-col gap-6">
        <div className="">
          <p className="px-[20px] text-[white]">Цахим хаяг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={EmailInput}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[white]">Нууц үг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={PassInput}
          />
        </div>

        <div className="w-[100%] flex justify-between px-[10px] flex-col gap-6">
          <Link href="/loginArtist">
            <p className="text-[white] ml-[10px] ">
              Уран бүтээлч бол энд дарна уу?
            </p>
          </Link>
          <Link href="/SignUp">
            <p className="text-[white] ml-[10px] ">
              Шинэ хэрэглэгч бол энд дарна уу ?
            </p>
          </Link>
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
