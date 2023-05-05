import Link from "next/link";
import { useState } from "react";

export default function Choose() {
  return (
    <div className="w-full h-[1000px] mt-[70px] flex items-center justify-center">
      <div className="flex flex-col gap-[10px]">
        <Link href="/Login">
          <button className="w-[350px] h-[45px] bg-[#1b1927] text-white rounded-[10px]">
            Нэвтрэх
          </button>
        </Link>
        <Link href="/SignUp">
          <button className="w-[350px] h-[45px] border-2 b-black border-black text-black   rounded-[10px]">
            Бүртгүүлэх
          </button>
        </Link>
      </div>
    </div>
  );
}
