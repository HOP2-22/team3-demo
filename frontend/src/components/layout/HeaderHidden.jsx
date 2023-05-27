import Link from "next/link";

import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { UserContext } from "@/context/UserContext";
import { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const HeaderHidden = () => {
  const {
    isClient,
    setIsClient,
    user,
    artist,
    setUser,
    setArtist,
    setIsArtist,
  } = useContext(UserContext);
  const [seeLogout, setSeeLogout] = useState(false);
  const push = useRouter();
  const router = useRouter();
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
        {user ? (
          <>
            <img src={user?.image} className="rounded-full w-[60px] h-[60px]" />
            <button
              className="px-[20px] py-[10px] bg-gray-300 rounded-[5px]"
              onClick={() => {
                setUser(null);
                Cookies.remove("token");
                setIsClient(true);

                router.push("/login");
                setSeeLogout(false);
              }}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <AiOutlineUser />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderHidden;
