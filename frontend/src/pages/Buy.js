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
            display: {
              xs: "column",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            width: "100%",
            paddingBottom: {
              xs: "0px",
              sm: "10px",
              md: "10px",
              lg: "100px",
              xl: "100px",
            },
            paddingRight: {
              xs: "0px",
              sm: "10px",
              md: "10px",
              lg: "150px",
              xl: "150px",
            },
            paddingLeft: {
              xs: "0px",
              sm: "10px",
              md: "10px",
              lg: "150px",
              xl: "150px",
            },
            paddingTop: {
              xs: "100px",
              sm: "100px",
              md: "100px",
              lg: "100px",
              xl: "100px",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "60%",
                md: "60%",
                lg: "60%",
                xl: "60%",
              },
            }}
          >
            {data?.map((card, index) => (
              <SwiperCard key={index} Image={card.image} />
            ))}
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "40%",
                md: "40%",
                lg: "40%",
                xl: "40%",
              },
              paddingLeft: {
                xs: "0px",
                sm: "25px",
                md: "25px",
                lg: "25px",
                xl: "25px",
              },
              paddingRight: {
                xs: "0px",
                sm: "25px",
                md: "25px",
                lg: "25px",
                xl: "25px",
              },
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
                sx={{ width: "100%", ":hover": { color: "#d50000" } }}
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
                  color: "white",
                }}
              >
                Сагсанд хийх
              </button>
            </Box>
            <Box
              sx={{ width: "100%", height: "1px", backgroundColor: "gray" }}
            ></Box>
            <Box>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingBottom: "8px",
                  paddingTop: "8px",
                }}
              >
                Бүтээлийн тайлбар
              </p>
              <Box sx={{ fontWeight: "10" }}>
                The Unisex Staple T-Shirt feels soft and light with just the
                right amount of stretch. It's comfortable and flattering for
                all. We can't compliment this shirt enough–it's one of our crowd
                favorites, and it's sure to be your next favorite too! Solid
                colors are 100% Airlume combed and ring-spun cotton Ash color is
                99% combed and ring-spun cotton, 1% polyester
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Артворк:</p>
              <p>ARTIST</p>
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <p style={{ fontWeight: "bold" }}>Материал</p>
              <p>Цэвэр 100% хөвөн даавуу</p>
            </Box>
            <Box>
              <p style={{ fontWeight: "bold" }}>Арчилгааны зөвлөмж</p>
              <p>Хүйтэн усанд тусд нь угаана</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
