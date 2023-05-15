import axios from "axios";
import { useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { IconButton, Stack, Box, Button, List } from "@mui/material";
import { useAuthContext } from "@/context/context";

// const size = ["s", "m", "l", "xl", "2xl", "3xl"];

export default function Create() {

  const [color, setColor] = useState([]);
  const [details, setDetails] = useState("");
  const [caretip, setCaretip] = useState("");
  const [warning, setWarning] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState();
  const [productName, setProductName] = useState("")
  const [type_of, setType_of] = useState("")
  const [price, setPrice] = useState()


  const { currentUser } = useAuthContext();
  const createProduct = async () => {
    try {
      const res = axios.post("http://localhost:7070/product/create", {
        ownerId: currentUser?.userId,
        type_of: type_of,
        productName: productName,
        ownerName: currentUser?.name,
        color: color,
        price: price,
        size: {
          [size]: count
        },
        details: details,
        caretip: caretip,
        warning: warning
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-slate-300" style={{ padding: "40vh",}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>Product Name:</div>
        <input
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <div>Type:</div>
        <input
          onChange={(e) => {
            setType_of(e.target.value);
          }}
        />
        <div>Color:</div>
         <input
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <div>Size:</div>
         <input
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <div>Count:</div>
         <input
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <div>Price:</div>
         <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <div>Details:</div>
         <input
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <div>Warning:</div>
         <input
          onChange={(e) => {
            setWarning(e.target.value);
          }}
        />
        <div>Caretip:</div>
         <input
          onChange={(e) => {
            setCaretip(e.target.value);
          }}
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          component="label"
          onClick={() => {
            createProduct();
          }}
        >
          Upload
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />

          <PhotoCamera />
        </IconButton>
      </Stack>
    </div>
  );
}
