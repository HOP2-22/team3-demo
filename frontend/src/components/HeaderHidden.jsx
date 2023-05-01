import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import Container from "@mui/material/Container";
import { FaHashtag } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

export default function HeaderHidden() {
  return (
    <div className="fixed flex  w-full h-[60px] bottom-0 bg-white justify-between px-[0px] md:px-[30px] lg:px-[50px] xl:hidden">
      <div className="text-[20px] w-[25%] md:text-[25px] flex items-center justify-center">
        <Link href="/HomeDefault">
          <AiFillHome />
        </Link>
      </div>

      <div className="text-[20px] w-[25%] md:text-[25px] flex items-center justify-center">
        <Link href="/Merch">
          <SlBasket />
        </Link>
      </div>
      <div className="text-[20px] w-[25%] md:text-[25px] flex items-center justify-center">
        <Link href="/Login">
          <AiOutlineUser />
        </Link>
      </div>
    </div>
  );
}

