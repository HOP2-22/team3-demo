import { Box, Container } from "@mui/material";
import SwiperCard from "../components/SwiperCard";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import TextField from "@mui/material/TextField";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Buy() {
  const [data, setData] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const findProduct = async () => {
      if (!router.query.product) {
        return;
      }
      console.log(router.query.product);
      const res = await axios.get(
        `http://localhost:7070/product/getProductById/${router.query.product}`
      );
      console.log(res.data.data);
      setData(res.data.data);
    };
    findProduct();
  }, [router.query]);

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
          }}>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "60%",
                md: "60%",
                lg: "60%",
                xl: "60%",
              },
            }}>
            <div className="w-[690px] h-[690px] ">
              <img src={data?.images} />
            </div>
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
            }}>
            <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
              {data?.productName}
            </Box>
            <Box sx={{ fontSize: "25px", fontWeight: "bold" }}>
              Prize: {data?.price}
            </Box>
            <Box>
              <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>Color</p>
              <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <button
                  style={{
                    backgroundColor: data?.color,
                    width: "40px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "5px",
                    marginRight: "5px",
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
                }}>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}>
                  XS
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}>
                  S
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}>
                  M
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}>
                  L
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}>
                  XL
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}>
                  2XL
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}>
                  3XL
                </button>
                <button
                  style={{
                    backgroundColor: "#cdcdcd",
                    width: "60px",
                    height: "40px",
                    border: "hidden",
                    borderRadius: "8px",
                  }}>
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
              }}>
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
                }}>
                Сагсанд хийх
              </button>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "gray",
              }}></Box>
            <Box>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingBottom: "8px",
                  paddingTop: "8px",
                }}>
                Бүтээлийн тайлбар
              </p>
              <Box sx={{ fontWeight: "10" }}>{data?.details}</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}>
              <p style={{ fontWeight: "bold" }}>Артворк:</p>
              <p>{data?.ownerName}</p>
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <p style={{ fontWeight: "bold" }}>Материал</p>
              <p>Цэвэр 100% хөвөн даавуу</p>
            </Box>
            <Box>
              <p style={{ fontWeight: "bold" }}>Арчилгааны зөвлөмж</p>
              <p>{data?.warning}</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
