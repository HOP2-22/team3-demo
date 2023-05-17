import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../context/UserContext";
import { ArtistContext } from "@/context/Artistcontext";

export default function ArtistHeader() {
  const { isArtist, setIsArtist, user, logOut } = useContext(ArtistContext);

  const { setIsClient } = useContext(UserContext);
  const [seeLogout, setSeeLogout] = useState(false);

  useEffect(() => {
    const resizeFunc = () => {
      if (window.innerWidth < 1536) {
        setSeeLogout(false);
      }
    };
    resizeFunc();
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  return (
    <div
      className={` ${
        isArtist ? "z-10" : "z-4"
      } w-full h-[80px] fixed flex justify-between px-[50px] items-center top-0 z-6 bg-[#0A061C] `}
    >
      <div className="text-white text-[30px] font-bold">new space</div>
      <div className="flex  gap-[10px]">
        <img src={user?.image} className="w-[45px] h-[45px] rounded-full" />
        <button className="h-[45px] w-[100px] text-[18px] text-white rounded-[8px] bg-[#6446EE] ">
          Upload
        </button>
      </div>
      <div
        className=""
        onClick={() => {
          setIsArtist(false);
          setIsClient(true);
          logOut();
        }}
      >
        logout
      </div>
    </div>
  );
}
