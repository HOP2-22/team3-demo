import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { SlBasket, SlArrowDown } from "react-icons/sl";
import Container from "@mui/material/Container";
import Search from "../components/Search";

export default function Header() {
  const { info } = useContext(Context);
  const [searchClick, setSearchClick] = useState(false);
  const [burger, setBurger] = useState(false);

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

  return (
    <div className="w-full fixed top-0 z-10">
      <div className="flex flex-col bg-white">
        <Container
          maxWidth="xl"
          className="flex justify-between h-[75px] items-center">
          <div className="flex items-center gap-5 md:gap-5 w-[100%]">
            <div className="text-[30px] font-bold">Geru</div>
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
                }}>
                Enjoy <SlArrowDown className="text-[15px]" />
              </span>
              <div
                className={`${
                  burger ? " flex" : "hidden"
                } absolute bg-white w-[150px] h-[200px] absolute xl:mt-[-45px] xl:ml-[100px] -mt-[35px] -ml-[160px] xl:-mt-[35px] flex-col px-[20px] justify-evenly shadow-xl rounded-[9px]`}>
                <div className="bg-gray-300 rounded-[5px] w-[110%] h-[35px] flex items-center">
                  COLLECTION
                </div>
                <div className="font-bold">DESIGN BYME</div>
                <div className="font-bold">MERCH</div>
                <div className="font-bold">DROP</div>
                <div className="font-bold">ARTWORK</div>
                <div className="font-bold">ARTIST</div>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-5">
              <div className="bg-gray-500 w-[1px] h-[35px] "></div>
              <div className="flex gap-3 text-[20px] font-bold">
                <AiOutlineSearch
                  onClick={() => {
                    console.log(searchClick);
                    setSearchClick(!searchClick);
                  }}
                />
                <SlBasket />
                <AiOutlineUser />
              </div>
            </div>
          </div>
        </Container>
        {searchClick ? <Search boolean={searchClick} /> : <></>}
      </div>
    </div>
  );
}
