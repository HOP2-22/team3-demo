import { useState } from "react";

export default function SignUp() {
  const [emailSignUp, setEmailSignUpArtist] = useState();
  const [passwordUserSignUp, setPasswordSignUpArtist] = useState();
  const [username, setUserName] = useState();
  const [artistType, setArtistType] = useState();
  const [checkpassUserSignUp, setCheckPassSignUpArtist] = useState();

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

  const signUpArtist = async () => {
    if (passwordUserSignUp == checkpassUserSignUp) {
      try {
        const res = await axios.post("http://localhost:7070/artist/create", {
          email: emailSignUp,
          password: passwordUserSignUp,
          username: username,
          type_of: artistType,
        });

        alert("amjilttai burgegdle");
      } catch (error) {
        alert("Нууц үг эсвэл Цахим хаяг буруу байна");
      }
    } else {
      alert("nuuts ug taarahgui baina");
    }
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
          onClick={signUpArtist}
        >
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
}
