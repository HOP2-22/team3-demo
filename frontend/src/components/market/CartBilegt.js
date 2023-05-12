import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { FormControl, NativeSelect } from "@mui/material";
import { CardDt } from "../../json/card.js";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import image from "./CartImage.jpeg"

const data = [
  {
    Color: "White",
    Size: "M",
  },
];

export default function Cart() {
  return (
    <Box
      sx={{
        width: "70%",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingTop: "25px",
          paddingBottom: "15px",
          paddingLeft: "15px",
          paddingRight: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <p style={{ fontWeight: "500" }}>Monkey Studio</p>
          <p style={{ fontWeight: "lighter" }}>Үйлдвэр-с хүргэнэ</p>
        </Box>
        <Box>
          <p style={{ fontWeight: "500" }}>Маргааш - Мягмар</p>
          <p style={{ fontWeight: "lighter" }}>(05/13 - 05/16)</p>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingTop: "10px",
          paddingBottom: "25px",
          paddingLeft: "15px",
          paddingRight: "15px",
          display:"flex",
        }}
      >
        <Image
          width={100}
          height={100}
          src={image}
          alt="img"
        />
        {data.map((dt, ind) => {
          return (
            <Box key={ind}>
              <Typography
                sx={{
                  fontFamily: "PT Sans Narrow",
                  fontSize: { xl: "17px", xs: "15px" },
                }}
              >
                {" "}
                Color: {dt.Color}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "PT Sans Narrow",
                  fontSize: { xl: "17px", xs: "15px" },
                }}
              >
                {" "}
                Size: {dt.Size}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
