import Link from "next/link";

import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const HeaderHidden = () => {
  return (
    <div className="fixed flex z-10  w-full h-[60px] bottom-0 bg-white justify-between px-[0px] md:px-[30px] lg:px-[50px] xl:hidden">
      <div className="text-[20px] w-[25%] md:text-[25px] flex items-center justify-center">
        <Link href="/">
          <AiFillHome />
        </Link>
      </div>

      <div className="text-[20px] w-[25%] md:text-[25px] flex items-center justify-center">
        <Link href="/Basket">
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
};

export default HeaderHidden;
