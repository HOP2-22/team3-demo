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

export default function createMerch() {
  const { artist } = useContext(UserContext);
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

  const imageHandler = async () => {
    try {
      if (!image) return;
      const res = await handleUpload(image);
      console.log(res);
      setImage(res);
    } catch (error) {
      console.log(error);
    }
  };

  const create = async () => {
    console.log(
      size,
      name,
      color,
      price,
      count,
      des,
      image,
      warning,
      artist.id
    );
    try {
      const done = await axios.post("http://localhost:7070/product", {
        size: size,
        name: name,
        color: color,
        price: price,
        count: count,
        descriptions: des,
        image: image,
        warning: warning,
        owner: artist.id,
      });
      alert("is done");
    } catch (error) {}
  };

  const UploadImage = () => {
    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          variant="contained"
          component="label"
          onClick={() => imageHandler()}
        >
          Upload
        </Button>
      </Stack>
    );
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
            color="info"
            sx={{ width: "100%" }}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />

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
            <p className="text-gray-500">Select image</p>
            <div className="w-[100%] flex flex-col items-center justify-center gap-[10px]">
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
              <Button
                variant="contained"
                component="label"
                onClick={() => imageHandler()}
              >
                Upload
              </Button>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <img src={image} alt="image" style={{ width: "10vh" }} />
          </div>
          <p
            onClick={() => {
              create();
            }}
          >
            sdfsdfsdfsdfsdfsdfsfs
          </p>
        </div>
      </Container>
    </div>
  );
}
