import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import Container from "@mui/material/Container";

import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function ArtistHeader() {
  const [searchClick, setSearchClick] = useState(false);
  const [burger, setBurger] = useState(false);
  const { setCurrentUser, isArtist, setIsArtist, setIsClient, currentUser } =
    useContext(Context);
  const [seeLogout, setSeeLogout] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const resizeFunc = () => {
      if (window.innerWidth < 1536) {
        setSearchClick(false);
        setSeeLogout(false);
      }
    };
    resizeFunc();
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  const logOut = () => {
    setCurrentUser(null);
    Cookies.remove("token");
    Cookies.remove("user");

    router.push("/Login");
  };

  return (
    <div
      className={` ${
        isArtist ? "z-10" : "z-4"
      } w-full h-[80px] fixed flex justify-between px-[50px] items-center top-0 z-6 bg-[#0A061C] `}>
      <div className="text-white text-[30px] font-bold">new space</div>
      <div className="flex  gap-[10px]">
        <img
          src={currentUser?.image}
          className="w-[45px] h-[45px] rounded-full"
        />
        <button
          className="h-[45px] w-[100px] text-[18px] text-white rounded-[8px] bg-[#6446EE] "
          onClick={() => {
            router.push("/Create");
          }}>
          Upload
        </button>
      </div>
    </div>
  );
}
