import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { IconButton, Stack, Button, Typography } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import useStorage from "@/hooks/useStorage";
import axios from "axios";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";

export default function createMerch() {
  const { artist } = useContext(UserContext);
  console.log(artist);
  const { handleUpload } = useStorage();
  const [name, setName] = useState();
  const [color, setColor] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [count, setCount] = useState();
  const [des, setDes] = useState();
  const [warning, setWarning] = useState();
  const [size, setSize] = useState();
  const [caretip, setCaretip] = useState();
  const [istype, setType] = useState();
  const [uploadimg, setUploadImg] = useState(false);

  const imageHandler = async () => {
    try {
      if (!image) return;
      const res = await handleUpload(image);
      console.log(res);
      setImage(res);
      toast.success("successfully uploaded");
      setUploadImg(true);
    } catch (error) {
      console.log(error);
    }
  };

  const create = async () => {
    if (!artist) return toast("ta ehleed newternuu");
    if (size == null) return toast.error(`size field is empty`);
    if (name == null) return toast.error(`name field is empty`);
    if (color == null) return toast.error(`color field is empty`);
    if (price == null) return toast.error(`price field is empty`);
    if (count == null) return toast.error(`count field is empty`);
    if (des == null) return toast.error(`descriptions field is empty`);
    if (image == null) return toast.error(`image field is empty`);
    if (warning == null) return toast.error(`warning field is empty`);
    if (caretip == null) return toast.error(`caretip field is empty`);
    if (istype == null) return toast.error(`type field is empty`);
    try {
      const done = await axios.post("http://localhost:7070/product", {
        size: size,
        name: name,
        color: color,
        price: price,
        count: count,
        descriptions: des,
        images: image,
        warning: warning,
        owner: artist.id,
        caretip: caretip,
        type_of: istype,
      });
      toast.success("is done");
    } catch (error) {}
  };

  // const UploadImage = () => {
  //   return (
  //     <Stack direction="row" alignItems="center" spacing={2}>
  //       <Button
  //         variant="contained"
  //         component="label"
  //         onClick={() => imageHandler()}
  //       >
  //         Upload
  //       </Button>
  //     </Stack>
  //   );
  // };
  const handleTypes = (event) => {
    setType(event.target.value);
  };

  const handleColor = (event) => {
    setColor(event.target.value);
  };
  const handleSize = (event) => {
    setSize(event.target.value);
  };
  return (
    <div className="w-full  pt-[250px] pb-[250px] ">
      <Container maxWidth="xl">
        <div className="border-2 border-dashed rounded-[8px] px-[20px] py-[20px] flex flex-col gap-7">
          <TextField
            id="outlined-basic"
            label="give a nmae"
            variant="outlined"
            color="info"
            sx={{ width: "100%" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Color"
              onChange={handleColor}
            >
              <MenuItem value={"Хар"}>Хар</MenuItem>
              <MenuItem value={"Улаан"}>Улаан</MenuItem>
              <MenuItem value={"Шар"}>Шар</MenuItem>
              <MenuItem value={"Цэнхэр"}>Цэнхэр</MenuItem>
              <MenuItem value={"Ногоон"}>Ногоон</MenuItem>
              <MenuItem value={"Цагаан"}>Цагаан</MenuItem>
              <MenuItem value={"Ягаан"}>Ягаан</MenuItem>
              <MenuItem value={"Саарал"}>Саарал</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="Color"
              onChange={handleSize}
            >
              <MenuItem value={"XS"}>XS</MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
              <MenuItem value={"XL"}>XL</MenuItem>
              <MenuItem value={"2XL"}>2XL</MenuItem>
              <MenuItem value={"3XL"}>3XL</MenuItem>
              <MenuItem value={"4XL"}>4XL</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="count"
            variant="outlined"
            type="number"
            color="info"
            sx={{ width: "100%" }}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={istype}
              label="Color"
              onChange={handleTypes}
            >
              <MenuItem value={"Хувцас"}>Хувцас</MenuItem>
              <MenuItem value={"Гар урлал"}>Гар урлал</MenuItem>
              <MenuItem value={"Бусад"}>Бусад</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic"
            label="descriptions"
            variant="outlined"
            color="info"
            sx={{ width: "100%" }}
            onChange={(e) => {
              setDes(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="price"
            variant="outlined"
            color="info"
            type="number"
            sx={{ width: "100%" }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="caretip"
            variant="outlined"
            color="info"
            sx={{ width: "100%" }}
            onChange={(e) => {
              setCaretip(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="warning"
            variant="outlined"
            color="info"
            sx={{ width: "100%" }}
            onChange={(e) => {
              setWarning(e.target.value);
            }}
          />
          <div className="flex flex-col gap-[10px]">
            <p className="text-gray-500">Select image</p> {}
            <div className="w-[100%] flex flex-col items-center justify-center gap-[10px]">
              {uploadimg ? (
                <>
                  <img src={image} />
                </>
              ) : (
                <>
                  <div className="w-full py-[200px] border-2 border-blue-500 drop-shadow-2xl rounded-[7px] flex flex-col items-center justify-center">
                    <div className=" drop-shadow-2xl rounded-full flex items-center justify-center">
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          hidden
                          accept="image/*"
                          type="file"
                          onChange={(el) => {
                            setImage(el.target.files[0]);
                          }}
                        />

                        <PhotoCamera />
                        <Typography>Зургаа сонгоно уу?</Typography>
                      </IconButton>
                    </div>
                  </div>
                </>
              )}

              <Button
                variant="contained"
                component="label"
                onClick={() => imageHandler()}
              >
                Upload
              </Button>
            </div>
          </div>
          <div style={{ display: "flex" }}></div>
          <button
            className="text-white rounded-[10px] w-[200px] text-[20px] px-[10px] py-[20px] bg-blue-500"
            onClick={() => {
              create();
            }}
          >
            Create new merch
          </button>
        </div>
      </Container>
    </div>
  );
}
