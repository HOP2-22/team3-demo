import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { SlBasket, SlArrowDown } from "react-icons/sl";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import Container from "@mui/material/Container";
import Search from "./Search";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Avatar, Box } from "@mui/material";

export default function Header() {
  const [searchClick, setSearchClick] = useState(false);
  const [burger, setBurger] = useState(false);
  const { currentUser, setCurrentUser, isClient } = useContext(Context);
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

    router.push("/");
  };

  return (
    <div className={` ${isClient ? "z-10" : "z-4"} w-full fixed top-0 z-10`}>
      <div className="flex flex-col bg-white">
        <Container
          maxWidth="xl"
          className="flex justify-between h-[75px]  items-center"
        >
          <div className="flex items-center gap-5 md:gap-5 w-[100%]">
            <Link href="/">
              <div className="text-[30px] font-bold">new space</div>
            </Link>
            <input
              className="outline-none h-[40px] w-[60%] md:w-[100%] xl:hidden font-bold"
              placeholder="Мэрч, Артист, Коллекц хайх ..."
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="">
              <div className="flex gap-6 text-[18px]">
                <a href="Merch ">
                  <div className=" border-b-[1px] flex items-center justify-center">
                    MERCH
                  </div>
                </a>

                <a href="Artist">
                  <div className=" border-b-[1px] flex items-center justify-center">
                    ARTIST
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-5">
              <div className="bg-gray-500 w-[1px] h-[35px] "></div>

              <div className="flex gap-3 text-[20px] items-center font-bold">
                <AiOutlineSearch
                  onClick={() => {
                    setSearchClick(!searchClick);
                  }}
                />
                <SlBasket
                  onClick={() => {
                    router.push("/Basket");
                  }}
                />
                {currentUser ? (
                  <div
                    className="flex items-center gap-[2px] "
                    onClick={() => {
                      setSeeLogout(!seeLogout);
                    }}
                  >
                    <Avatar src={currentUser?.image} />
                    <RiArrowDownSFill className="text-[#1b1927]" />
                  </div>
                ) : (
                  <Link href="/Login">
                    <AiOutlineUser />
                  </Link>
                )}
              </div>
            </div>
            {seeLogout ? (
              <div
                className="w-[80px] text-[20px] h-[40px] flex items-center justify-center rounded-[7px] bg-gray-500 mt-[80px] ml-[170px] fixed"
                onClick={() => {
                  logOut();
                  setSeeLogout(false);
                }}
              >
                Гарах
              </div>
            ) : (
              <></>
            )}
          </div>
        </Container>
        {searchClick ? <Search boolean={searchClick} /> : <></>}
      </div>
    </div>
  );
}
