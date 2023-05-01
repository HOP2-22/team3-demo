import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { SlBasket, SlArrowDown } from "react-icons/sl";
import { HiOutlineLogout } from "react-icons/hi";
import Container from "@mui/material/Container";
import Search from "../components/Search";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Header() {
  const [searchClick, setSearchClick] = useState(false);
  const [burger, setBurger] = useState(false);
  const { currentUser, setCurrentUser } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    const resizeFunc = () => {
      if (window.innerWidth < 1536) {
        setSearchClick(false);
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
    <div className="w-full fixed top-0 z-10">
      <div className="flex flex-col bg-white">
        <Container
          maxWidth="xl"
          className="flex justify-between h-[75px] items-center"
        >
          <div className="flex items-center gap-5 md:gap-5 w-[100%]">
            <Link href="/">
              <div className="text-[30px] font-bold">Geru</div>
            </Link>
            <input
              className="outline-none h-[40px] w-[60%] md:w-[100%] xl:hidden font-bold"
              placeholder="Мэрч, Артист, Коллекц хайх ..."
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="">
              <span
                className="text-[20px] flex items-center gap-2 font-bold"
                onClick={() => {
                  setBurger(!burger);
                }}
              >
                Enjoy <SlArrowDown className="text-[15px]" />
              </span>
              <div
                className={`${
                  burger ? " flex" : "hidden"
                } absolute bg-white w-[150px] h-[200px]   xl:mt-[-45px] xl:ml-[-170px] -mt-[35px] -ml-[160px]  flex-col px-[20px] justify-evenly shadow-xl rounded-[9px]`}
              >
                <div className="bg-gray-300 rounded-[5px] w-[110%] h-[35px] flex items-center">
                  COLLECTION
                </div>
                <a href="Merch ">
                  <div className="font-bold">MERCH</div>
                </a>
                <a href="ArtWork">
                  <div className="font-bold">ARTWORK</div>
                </a>
                <a href="Artist">
                  <div className="font-bold">ARTIST</div>
                </a>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-5">
              <div className="bg-gray-500 w-[1px] h-[35px] "></div>

              <div className="flex gap-3 text-[20px] font-bold">
                <AiOutlineSearch
                  onClick={() => {
                    setSearchClick(!searchClick);
                  }}
                />
                <SlBasket />
                {currentUser ? (
                  <Box onClick={() => logOut()}>
                    <HiOutlineLogout />
                  </Box>
                ) : (
                  <Link href="/typeselect">
                    <AiOutlineUser />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Container>
        {searchClick ? <Search boolean={searchClick} /> : <></>}
      </div>
    </div>
  );
}
