import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function CreateProduct() {
  const uploadimg =
    "https://i.ibb.co/h1v2j5g/Screen-Shot-2023-05-17-at-19-30-05.png";

  const [type, setType] = useState("");
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="w-full bg-[#0E0528] py-[150px]">
      <div className="w-[100%] flex ">
        <div className="w-[15%] "></div>
        <div className="w-[70%]  flex  flex-col  gap-[20px] ">
          <div className="w-[100%] flex flex-col gap-[20px] items-center">
            <div className="w-[80%]">
              <p className="text-[45px] text-white w-full ">Create new merch</p>
            </div>
            <div className="w-[100%] flex flex-col gap-[20px] items-center">
              <div className="w-[80%] flex flex-col gap-2">
                <p className="text-[25px] text-sky-500">Product name</p>
                <input className="w-[100%] h-[40px] rounded-[8px] outline-none px-[10px] border-[1px] border-sky-500 bg-transparent text-[#8B8B8B]" />
              </div>
              <div className="w-[80%] rounded-[12px] h-[670px] border-dashed border-2 border-sky-500 bg-[#15122A] relative">
                <img
                  src={uploadimg}
                  className="absolute w-[99%] h-[99%]  object-cover object-center top-0 left-0 ml-[4px]"
                />
              </div>
              <div className="w-[80%] flex flex-col gap-2">
                <p className="text-[25px] text-sky-500">price</p>
                <input className="w-[100%] h-[40px] rounded-[8px] outline-none px-[10px] border-[1px] border-sky-500 bg-transparent text-[#8B8B8B]" />
              </div>
              <div className="w-[80%] flex flex-col gap-2">
                <p className="text-[25px] text-sky-500">materials</p>
                <input className="w-[100%] h-[40px] rounded-[8px] outline-none px-[10px] border-[1px] border-sky-500 bg-transparent text-[#8B8B8B]" />
              </div>
              <div className="w-[80%] flex flex-col gap-2">
                <p className="text-[25px] text-sky-500"> color</p>
                <input className="w-[100%] h-[40px] rounded-[8px] outline-none px-[10px] border-[1px] border-sky-500 bg-transparent text-[#8B8B8B]" />
              </div>
              <div className="w-[80%] flex flex-col gap-2">
                <p className="text-[25px] text-sky-500"> size</p>
                <input className="w-[100%] h-[40px] rounded-[8px] outline-none px-[10px] border-[1px] border-sky-500 bg-transparent text-[#8B8B8B]" />
              </div>
              <div className="w-[80%] flex flex-col gap-2">
                <p className="text-[25px] text-sky-500"> archilgani zuwlumj</p>
                <input className="w-[100%] h-[40px] rounded-[8px] outline-none px-[10px] border-[1px] border-sky-500 bg-transparent text-[#8B8B8B]" />
              </div>
              <div className="w-[80%] flex flex-col gap-2">
                <p className="text-[25px] text-sky-500"> count</p>
                <input className="w-[100%] h-[40px] rounded-[8px] outline-none px-[10px] border-[1px] border-sky-500 bg-transparent text-[#8B8B8B]" />
              </div>
              <Box sx={{ minWidth: 1400 }}>
                <FormControl fullWidth>
                  <Select
                    sx={{
                      "&.Mui-focused fieldset": {
                        border: "red",
                      },
                    }}
                    inputProps={{
                      sx: {
                        backgroundColor: "#0BA5E9",
                        color: "blue",
                        border: "blue",
                        outline: "#0BA5E9",
                        label: "blue",
                      },
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={"Хувцас"}>Хувцас</MenuItem>
                    <MenuItem value={"Гар урлал"}>Гар урлал</MenuItem>
                    <MenuItem value={"Бусад"}>Бусад</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
        <div className="w-[15%] "></div>
      </div>
    </div>
  );
}
