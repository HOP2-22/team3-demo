import { Context } from "../context/context";
import { useContext } from "react";

export default function SignUp() {
  const {
    setEmailSignUpArtist,
    setPasswordSignUpArtist,
    setCheckPassSignUpArtist,
    signUpArtist,
    setArtistType,
    setUserName,
  } = useContext(Context);

  const EmailInput = async (event) => {
    setEmailSignUpArtist(event.target.value);
  };
  const PassInput = async (event) => {
    setPasswordSignUpArtist(event.target.value);
  };
  const PassInputCheck = async (event) => {
    setCheckPassSignUpArtist(event.target.value);
  };
  const TypeInput = async (event) => {
    setArtistType(event.target.value);
  };
  const NameInput = async (event) => {
    setUserName(event.target.value);
  };
  const handleSignUp = () => {
    loginArtist();
  };
  return (
    <div className="w-full h-full  mt-[150px] flex flex-col items-center justify-center gap-10">
      <div className="text-[32px] text-[#1b1927]">Бүртгүүлэх</div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">Цахим хаяг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={EmailInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">Нууц үг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={PassInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">Нууц үгээ давтна уу?</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={PassInputCheck}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">
            Өөрийн уран бүтээлчийн нэрээ бичнэ үү?
          </p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="Ганаа"
            onChange={NameInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">Өөрийн урсгалаа бичнэ үү?</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="Photographers"
            onChange={TypeInput}
          />
        </div>
        <button
          className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white"
          onClick={handleSignUp}>
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
}
