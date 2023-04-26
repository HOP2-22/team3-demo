import { Box, Container } from "@mui/material";
import SwiperCard from "../components/SwiperCard";
import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import TextField from "@mui/material/TextField";

export default function Buy() {
  const [data, setData] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const instance = Axios.create({
    baseURL: "https://dummyapi.io/data/v1/post/",
    headers: {
      "app-id": "636e0d6642c1f665f684f489",
    },
  });

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const res = await instance.get("/");
        setData([res.data.data][0].slice(0, 1));
        setCount([res.data.data][0].length);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProps();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#edf2f4", width: "100%" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            width: "100%",
            border: "1px solid red",
            paddingTop: "100px",
            paddingLeft: "150px",
            paddingRight: "150px",
          }}
        >
          <Box sx={{ width: "60%", border: "1px solid red" }}>
            {data?.map((card, index) => (
              <SwiperCard key={index} Image={card.image} />
            ))}
          </Box>
          <Box
            sx={{
              width: "40%",
              border: "1px solid blue",
              paddingLeft: "25px",
              paddingRight: "25px",
              paddingBottom: "20px",
            }}
          >
            <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>Name</Box>
            <Box sx={{ fontSize: "25px", fontWeight: "bold" }}>Prize: 80$</Box>
            <Box>
              <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>Color</p>
              <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <button
                  style={{
                    backgroundColor: "black",
                    width: "40px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "5px",
                    marginRight: "5px",
                  }}
                />
                <button
                  style={{
                    backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "5px",
                  }}
                />
              </Box>
              <p style={{ padding: "5px" }}>Size</p>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  XS
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  S
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  M
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  L
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  XL
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  2XL
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  3XL
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  4XL
                </button>
              </Box>
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                sx={{ width: "100%", ":hover": {color:"#d50000",}, }}
                id="standard-basic"
                label="Тоо ширхэг сонгох"
                variant="standard"
              />
              <button
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#d50000",
                  border: "hidden",
                  borderRadius: "10px",
                }}
              ></button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
