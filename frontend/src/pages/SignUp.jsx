import Link from "next/link";
import { Context } from "../context/context";
import { useContext } from "react";

export default function SignUpUser() {
  const {
    signUpUser,
    emailSignUp,
    setEmailSignUp,
    passwordUserSignUp,
    setPasswordUserSignUp,
    checkpassUserSignUp,
    setCheckPassUserSignUp,
  } = useContext(Context);

  const EmailInput = async (event) => {
    setEmailSignUp(event.target.value);
  };
  const PassInput = async (event) => {
    setPasswordUserSignUp(event.target.value);
  };
  const PassInputCheck = async (event) => {
    setCheckPassUserSignUp(event.target.value);
  };

  const handleSignUp = () => {
    signUpUser();
  };
  return (
    <div className="w-full h-full  mt-[150px] flex flex-col items-center justify-center gap-10">
      <div className="text-[32px] text-[#1b1927]">Бүртгүүлэх</div>
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
        <Link href="/signUpArtist">
          <p className="text-[16px] ml-[20px]">
            Уран бүтээлч бол энд дарна уу?
          </p>
        </Link>
        <button
          className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white"
          onClick={handleSignUp}>
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
}
