import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import Container from "@mui/material/Container";

import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function ArtistHeader() {
  const [searchClick, setSearchClick] = useState(false);
  const [burger, setBurger] = useState(false);
  const { setCurrentUser, isArtist, setIsArtist, setIsClient } =
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

    router.push("/typeselect");
  };

  return (
    <div
      className={` ${
        isArtist ? "z-10" : "z-4"
      } w-full fixed top-0 z-6 bg-red-500 `}>
      <Container
        maxWidth="xl"
        className="flex justify-between h-[75px]  items-center">
        <div className="text-white">hi</div>
        <div
          className=""
          onClick={() => {
            setIsArtist(false);
            setIsClient(true);
            logOut();
          }}>
          logout
        </div>
      </Container>
    </div>
  );
}
