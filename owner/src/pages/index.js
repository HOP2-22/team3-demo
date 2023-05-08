import { MdDangerous } from "react-icons/md";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const bgimg = "https://www.animax.app/assets/lambda/images/login-bg.jpg";

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const EmailInput = async (event) => {
    setEmail(event.target.value);
  };
  const PasswordInput = async (event) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:7070/admin/login", {
        email: email,
        password: password,
      });
      alert("Login successful");
      alert("Login successful");
      setTimeout(() => {
        router.push("/Dashboard");
      }, 100);
    } catch (error) {
      alert("Нууц үг эсвэл Цахим хаяг буруу байна");
    }
  };

  return (
    <div>
      <div className="flex lg:hidden w-full h-[100vh] bg-red-500 items-center justify-center flex-col px-[50px]">
        <div className="flex items-start flex-col">
          <div className="flex justify-center items-center">
            <MdDangerous className="text-[200px]" />
            <div className="text-[70px]">Анхааруулга! </div>
          </div>
          <div className="text-[35px]">
            Энэ хуудас руу зөвхөн компьютероос л хандан боломжтой
          </div>
        </div>
      </div>
      <div className="hidden bg-blue-500 w-full h-[100vh] left-0 top-0  justify-end lg:flex ">
        <img src={bgimg} className="w-full h-[100vh] fixed z-1 object-cover" />
        <div className="bg-white w-[450px] h-[100vh] fixed z-10 flex flex-col items-center pt-[350px]">
          <div className="flex flex-col gap-4">
            <div className="text-[18px] text-[#007ae5]">СИСТЕМД НЭВТРЭХ</div>
            <div className="flex flex-col gap-4">
              <input
                className="px-[10px] rounded-[5px] outline:none outline-0 shadow-2xl text-black w-[355px] h-[45px] border-[1px]"
                onChange={EmailInput}
                placeholder="Нэвтрэх нэр"
              />
              <input
                className="px-[10px] rounded-[5px] outline:none outline-0 shadow-2xl text-black w-[355px] h-[45px] border-[1px]"
                onChange={PasswordInput}
                placeholder="Нууц үг"
              />
            </div>
            <button
              className="text-white bg-[#007ae5] w-[230px] h-[30px] rounded-full"
              onClick={() => {
                login();
              }}>
              Нэвтрэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
