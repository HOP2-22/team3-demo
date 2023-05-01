import { AiFillShop } from "react-icons/ai";
import { TbBellRinging } from "react-icons/tb";
import {
  MdLibraryAddCheck,
  MdPendingActions,
  MdShoppingBasket,
} from "react-icons/md";
import { useState } from "react";
import { data } from "autoprefixer";

export default function Dash() {
  const [isPendding, setIsPendding] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isOrders, setIsOrders] = useState(false);

  const adminImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mVkO67o1eY046Lia1zDdvPM-RMgTtP9D4g&usqp=CAU";

  return (
    <div className="w-full h-[100vh] bg-slate-200">
      <div className="w-full h-[70px] flex items-center justify-between px-[100px] bg-white ">
        <div className="flex items-center text-[30px] gap-2 text-black">
          <p>
            <AiFillShop />
          </p>
          <p className="text-[24px]">Admin dashboard</p>
        </div>
        <div className="flex gap-[20px]">
          <div className="w-[45px] h-[45px] rounded-[5px] bg-white text-black flex items-center justify-center text-[35px]">
            <TbBellRinging />
          </div>
          <div className="">
            <img
              src={adminImg}
              className="w-[45px] h-[45px] rounded-[5px] shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[100vh] flex mt-[50px] ">
        <div className=" h-[100vh]  px-[100px] flex flex-col gap-4 pt-[75px]">
          <div
            className={`${
              isApproved ? "border-b-[1px] border-black" : ""
            } flex gap-2 items-center text-[34px] text-black`}
            onClick={() => {
              setIsApproved(true);
              setIsOrders(false);
              setIsPendding(false);
            }}>
            <p>
              <MdLibraryAddCheck />
            </p>
            <p>Approved</p>
          </div>
          <div
            className={`${
              isPendding ? "border-b-[1px] border-black" : ""
            } flex gap-2 items-center text-[34px] text-black`}
            onClick={() => {
              setIsPendding(true);
              setIsApproved(false);
              setIsOrders(false);
            }}>
            <p>
              <MdPendingActions />
            </p>
            <p>Pending</p>
          </div>
          <div
            className={`${
              isOrders ? "border-b-[1px] border-black " : ""
            }  flex gap-2 items-center text-[34px] text-black`}
            onClick={() => {
              setIsOrders(true);
              setIsApproved(false);
              setIsPendding(false);
            }}>
            <p>
              <MdShoppingBasket />
            </p>
            <p>Orders</p>
            <p>dfjihgdfiug</p>
            <p></p>
          </div>
        </div>
        <div className="ml-[90px] w-[80%] h-[100vh] bg-slate-200 flex flex-col gap-4">
          <p className="text-[44px] text-black">Approved </p>
          <div className="w-[100%] h-[80vh] bg-white rounded-[25px]"></div>
        </div>
      </div>
    </div>
  );
}
