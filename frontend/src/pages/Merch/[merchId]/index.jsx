import { Box, Container, Typography } from "@mui/material";
import SwiperCard from "../../../components/SwiperCard";
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
import { useRouter } from "next/router";

const ProductDetail = ({ product, sizes }) => {
  const router = useRouter
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const addToCart = async () => {
    try {
      await axios.post(`http://localhost:7070/cart/${user?._id}`, {
        name: product.name,
        color: selectedColor,
        size: selectedSize,
      });


    } catch (error) {
      console.log(error);
    }
  };

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
            <div className="w-[500px] h-[690px] ">
              <img src={product?.images?.[0]} />
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
            }}
          >
            <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
              {product?.name}
            </Box>
            <Box sx={{ fontSize: "25px", fontWeight: "bold" }}>
              Prize: {product?.price}
            </Box>
            {/* <Box>
              <Typography>Color</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                {colors.map((color, i) => (
                  <button
                    key={i}
                    style={{
                      backgroundColor:
                        selectedColor === color ? "azure" : "#cdcdcd",
                      width: "60px",
                      height: "40px",
                      border: "hidden",
                      borderRadius: "8px",
                    }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </Box>
              <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <button
                  style={{
                    backgroundColor: product?.color,
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
                }}
              >
                {sizes.map((size, i) => (
                  <button
                    key={i}
                    style={{
                      backgroundColor:
                        selectedSize === size ? "red" : "#cdcdcd",
                      width: "60px",
                      height: "40px",
                      border: "hidden",
                      borderRadius: "8px",
                    }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </Box>
            </Box> */}
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
                onClick={addToCart}
              >
                Сагсанд хийх
              </button>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "gray",
              }}
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
              <Box sx={{ fontWeight: "10" }}>{product?.details}</Box>
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
              <p>{product?.ownerName}</p>
            </Box>
            <Box sx={{ paddingBottom: "10px" }}>
              <p style={{ fontWeight: "bold" }}>Материал</p>
              <p>Цэвэр 100% хөвөн даавуу</p>
            </Box>
            <Box>
              <p style={{ fontWeight: "bold" }}>Арчилгааны зөвлөмж</p>
              <p>{product?.warning}</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail;

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `http://localhost:7070/product/${context.query.merchId}`
    );
    console.log(res)
    return {
      props: {
        product: res.data.data,
        sizes: res.data.sizes,
      },
    };
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
}
