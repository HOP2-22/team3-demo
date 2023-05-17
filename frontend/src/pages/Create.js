import TextField from "@mui/material/TextField";

export default function CreateProduct() {

  const uploadimg =
    "https://i.ibb.co/h1v2j5g/Screen-Shot-2023-05-17-at-19-30-05.png";

  return (
    <div className="w-full bg-[#0E0528] py-[150px]">
      <div className="w-[100%] flex ">
        <div className="w-[15%] "></div>
        <div className="w-[70%]  flex flex-col  gap-[20px] ">
          <p className="text-[white] text-[45px] font-bold px-[10%]">
            Create a new merch
          </p>
          <div className="w-[100%] flex flex-col gap-[20px] items-center">
            <TextField
              label="Standard warning"
              variant="standard"
              color="grey"
            />
            <div className="w-[80%] rounded-[12px] h-[670px] border-dashed border-2 border-sky-500 bg-[#15122A] relative">
              <img
                src={uploadimg}
                className="absolute w-[99%] h-[99%]  object-cover object-center top-0 left-0 ml-[4px]"
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            ;
          </div>
        </div>
        <div className="w-[15%] "></div>
      </div>
    </div>
  );
}
