import { UserContext } from "@/context/UserContext";
import { useContext, useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { toast } from "react-hot-toast";

export default function buy() {
  const { user, productIfo } = useContext(UserContext);
  console.log(productIfo);
  const [phonenum, setPhonenum] = useState();
  const [adress, setAdress] = useState();
  return (
    <div className=" mt-[100px] pb-[300px] w-full">
      <Container maxWidth="xl">
        <p className="text-[40px] font-bold">Захиалга өгөх</p>
        <div className="flex flex-col gap-[20px]">
          <TextField
            id="outlined-basic"
            label="Холбоо барих дугаар"
            type="number"
            variant="outlined"
            color="info"
            sx={{ width: "100%" }}
            onChange={(e) => {
              setPhonenum(e.target.value);
            }}
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Хүргүүлэх хаяг"
            variant="outlined"
            sx={{ width: "100%" }}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          ></TextField>
          <p className="text-[30px] font-bold">Сонгсон бараа</p>
          <div className="border-2 border-dashed px-[20px] py-[20px] border-blue-500 rounded-[10px]">
            <div className="flex flex-col gap-2">
              <img src={productIfo?.image} />
              <div className="flex  gap-2">
                <p>Сонгсон өнгө</p>
                <p>{productIfo?.color}</p>
              </div>
              <div className="flex  gap-2">
                <p>Сонгсон размер</p>
                <p>{productIfo?.size}</p>
              </div>
              <div className="flex  gap-2">
                <p>Захиалах тоо хэмжээ </p>
                <p>{productIfo?.count}</p>
              </div>
            </div>
          </div>
          <button className="text-white rounded-[10px] w-[200px] text-[20px] px-[10px] py-[20px] bg-blue-500">
            Баталгаажуулах
          </button>
        </div>
      </Container>
    </div>
  );
}
