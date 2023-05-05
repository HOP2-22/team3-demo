import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import Container from "@mui/material/Container";

import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function ArtistHeader() {
  const [searchClick, setSearchClick] = useState(false);
  const [burger, setBurger] = useState(false);
  const { currentUser, setCurrentUser, username } = useContext(Context);
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
    <div className="w-full fixed top-0 z-100 bg-red-800">
      <div className="flex flex-col bg-white">
        <Container
          maxWidth="xl"
          className="flex justify-between h-[75px]  items-center">
          <div>dfijdi</div>
        </Container>
      </div>
    </div>
  );
}
