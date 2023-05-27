import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import { Avatar } from "@mui/material";
import Cookies from "js-cookie";

import Search from "./Search";
import { UserContext } from "@/context/UserContext";

import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { RiArrowDownSFill } from "react-icons/ri";

const Header = () => {
  const [searchClick, setSearchClick] = useState(false);
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

  // const logOut = () => {
  //   setUser(null);
  //   Cookies.remove("token");
  //   setIsClient(true)

  //   push("/login");
  // };
  // const logOutArtist = () => {
  //   setArtist(null);
  //   Cookies.remove("token");
  //   setIsClient(true)

  //   push("/login");
  // };

  return (
    <>
      {isClient ? (
        <>
          <div
            className={` ${
              isClient || isArtist ? (isClient ? "z-10" : "z-4") : "z-10"
            } w-full fixed top-0`}
          >
            <div
              className="flex flex-col"
              style={{ backgroundColor: "#090520" }}
            >
              <Container
                maxWidth="xl"
                className="flex justify-between h-[80px]  items-center"
              >
                <div className="flex items-center gap-5 md:gap-5 w-[100%]">
                  <Link href="/">
                    <div
                      className="text-[30px] font-bold"
                      style={{ color: "white" }}
                    >
                      New Space
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-5">
                  <div className="">
                    <div className="flex gap-6 text-[18px]">
                      {/* <Link href="/Merch"> */}
                      <div
                        className=" border-b-[1px] flex items-center justify-center"
                        style={{ color: "white" }}
                        onClick={() => {
                          console.log("is working");
                          router.push("Merch");
                        }}
                      >
                        MERCH
                      </div>
                      {/* </Link> */}

                      {/* <Link href="/artist"> */}
                      <div
                        onClick={() => {
                          router.push("/Artist");
                        }}
                        className=" border-b-[1px] flex items-center justify-center"
                        style={{ color: "white" }}
                      >
                        ARTIST
                      </div>
                      {/* </Link> */}
                    </div>
                  </div>
                  <div className="hidden xl:flex items-center gap-5">
                    <div className="bg-gray-500 w-[1px] h-[35px] "></div>

                    <div className="flex gap-3 text-[20px] items-center font-bold">
                      {/* <AiOutlineSearch
                        onClick={() => {
                          setSearchClick(!searchClick);
                        }}
                        color="white"
                      /> */}

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
                          <div className="flex justify-center items-center gap-2 border-[1px] px-[20px] border-gray-300 text-[20px] py-[5px] rounded-[7px]">
                            <p className="text-white">Login</p>
                            <AiOutlineUser color="white" />
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                  {seeLogout && (
                    <div
                      className="w-[80px] text-[20px] h-[40px] flex items-center justify-center rounded-[7px] bg-gray-500 mt-[80px] ml-[170px] fixed"
                      onClick={() => {
                        setUser(null);
                        Cookies.remove("token");
                        setIsClient(true);

                        router.push("/login");
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
        </>
      ) : (
        <>
          <div className="w-full h-[80px] fixed flex justify-between px-[50px] items-center top-0 z-6 bg-[#0A061C] ">
            <div className="text-white text-[30px] font-bold">new space</div>
            <div className="flex gap-[20px] items-center justify-center">
              <div className="flex  gap-[10px]">
                <img
                  src={artist?.image}
                  className="w-[45px] h-[45px] rounded-full"
                />
                <button
                  className="h-[45px] w-[100px] text-[18px] text-white rounded-[8px] bg-[#6446EE] "
                  onClick={() => {
                    router.push("/createMerch");
                  }}
                >
                  Upload
                </button>
              </div>
              <div
                className="text-white"
                onClick={() => {
                  setArtist(null);
                  Cookies.remove("token");
                  setIsClient(true);
                  router.push("/login");
                  setIsArtist(false);
                }}
              >
                logout
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
