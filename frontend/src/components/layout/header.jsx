import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import { Avatar } from "@mui/material";

import Search from "./Search";
import { UserContext } from "@/context/UserContext";
import { ArtistContext } from "@/context/Artistcontext";

import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { RiArrowDownSFill } from "react-icons/ri";

const Header = () => {
  const [searchClick, setSearchClick] = useState(false);
  const { isClient } = useContext(UserContext);
  const { isArtist, logOut, user } = useContext(ArtistContext);
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

  return (
    <div
      className={` ${isClient || isArtist ? (isClient ? "z-10" : "z-4") : "z-10"
        } w-full fixed top-0`}
    >
      <div className="flex flex-col" style={{ backgroundColor: "#090520" }}>
        <Container
          maxWidth="xl"
          className="flex justify-between h-[80px]  items-center"
        >
          <div className="flex items-center gap-5 md:gap-5 w-[100%]">
            <Link href="/">
              <div className="text-[30px] font-bold" style={{ color: "white" }}>
                New Space
              </div>
            </Link>

          </div>
          <div className="flex items-center gap-5">
            <div className="">
              <div className="flex gap-6 text-[18px]">
                <Link href="/Merch ">
                  <div
                    className=" border-b-[1px] flex items-center justify-center"
                    style={{ color: "white" }}
                  >
                    MERCH
                  </div>
                </Link>

                <Link href="/Artist">
                  <div
                    className=" border-b-[1px] flex items-center justify-center"
                    style={{ color: "white" }}
                  >
                    ARTIST
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-5">
              <div className="bg-gray-500 w-[1px] h-[35px] "></div>

              <div className="flex gap-3 text-[20px] items-center font-bold">
                <AiOutlineSearch
                  onClick={() => {
                    setSearchClick(!searchClick);
                  }}
                  color="white"
                />
                <SlBasket
                  onClick={() => {
                    router.push("/cart");
                  }}
                  color="white"
                />
                {user ? (
                  <div
                    className="flex items-center gap-[2px] "
                    onClick={() => {
                      setSeeLogout((prev) => !prev);
                    }}
                  >
                    <Avatar src={user?.image} />
                    <RiArrowDownSFill className="text-[#1b1927]" />
                  </div>
                ) : (
                  <Link href="/login">
                    <AiOutlineUser color="white" />
                  </Link>
                )}
              </div>
            </div>
            {seeLogout && (
              <div
                className="w-[80px] text-[20px] h-[40px] flex items-center justify-center rounded-[7px] bg-gray-500 mt-[80px] ml-[170px] fixed"
                onClick={() => {
                  logOut();
                  setSeeLogout(false);
                }}
                style={{ color: "white" }}
              >
                Гарах
              </div>
            )}
          </div>
        </Container>
        {searchClick ? <Search searchClick={searchClick} /> : <></>}
      </div>
    </div>
  );
};

export default Header;
