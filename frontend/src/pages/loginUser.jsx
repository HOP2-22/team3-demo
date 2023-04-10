export default function LoginUser() {
  return (
    <div className="w-full h-full  mt-[150px] flex flex-col items-center justify-center gap-10">
      <div className="text-[32px] text-[#1b1927]">Нэвтрэх</div>
      <div className="flex flex-col gap-6">
        <div className="">
          <p className="px-[20px] text-[16px]">Цахим хаяг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px]">Нууц үг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px]">Нууц үгээ давтна уу?</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
          />
        </div>
        <button className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white">
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
