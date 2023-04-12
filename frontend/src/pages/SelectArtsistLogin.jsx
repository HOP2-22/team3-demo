import { AiOutlineUser } from "react-icons/ai";
import { HiCheckCircle } from "react-icons/hi";
import { GiPencilBrush } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectArtist() {
  const [isSelected, setIsSelcet] = useState(false);
  const [isSelectedArtist, setIsSelcetArtist] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center mt-[200px] flex-col gap-10">
      <div className="flex gap-10">
        <div
          onClick={() => {
            setIsSelcet(!isSelected);
            setIsSelcetArtist(false);
          }}
          className={` ${
            isSelected ? "border-4 border-[#1b1927]" : ""
          } w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] border-2  rounded-[30px] px-[20px] py-[20px] flex items-center justify-center flex-col shadow-2xl `}>
          <div
            className={`${
              isSelected ? "text-[#1b1927]" : ""
            } text-[20px] sm:text-[25px] md:text-[30px] text-gray-300 flex w-[100%] justify-end  `}>
            <HiCheckCircle />
          </div>
          <div className="w-[100%] h-[100%] flex items-center justify-center flex-col ">
            <p
              className={` ${
                isSelectedArtist ? "text-[#1b1927]" : ""
              } text-[20px] sm:text-[25px] md:text-[30px]`}>
              <AiOutlineUser />
            </p>
            <p className="text-[15px] sm:text-[20px] md:text-[35px] ">
              Хэрэглэгч
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setIsSelcetArtist(!isSelectedArtist);
            setIsSelcet(false);
          }}
          className={` ${
            isSelectedArtist ? "border-4 border-[#1b1927]" : ""
          } w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] border-2 rounded-[30px] px-[20px] py-[20px] flex items-center justify-center flex-col shadow-2xl`}>
          <div
            className={`${
              isSelectedArtist ? "text-[#1b1927]" : ""
            } text-[20px] sm:text-[25px] md:text-[30px] text-gray-300 flex w-[100%] justify-end  `}>
            <HiCheckCircle />
          </div>
          <div className="w-[100%] h-[100%] flex items-center justify-center flex-col gap-4">
            <p>
              <GiPencilBrush className="text-[20px] sm:text-[25px] md:text-[30px] " />
            </p>
            <p className="text-[15px] sm:text-[20px] md:text-[35px] ">
              Уран бүтээлч{" "}
            </p>
          </div>
        </div>
      </div>
      <button className="w-[200px] sm:w-[350px] md:w-[500px] h-[50px] bg-[#1b1927] text-white rounded-full">
        Үргэлжлүүлэх
      </button>
    </div>
  );
}
