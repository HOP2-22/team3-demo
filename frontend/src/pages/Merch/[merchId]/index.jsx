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
  console.log(product);

  const router = useRouter;
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
    <div className="w-full pb-[50px] pt-[150px] ">
      <Container maxWidth="xl">
        <div className=" flex gap-[2%]">
          <div className="w-[49%] h-[700px]">
            <img src={product?.images[0]} />
          </div>
          <div className=" w-[49%] flex flex-col gap-[10px]">
            <div>
              <p className="text-[35px] font-bold">{product.name}</p>
              <p className="font-bold text-[20px]">{product.price}₮</p>
            </div>
            <div className="">
              <p className="font-bold">Color</p>
              <p>{product.color}</p>
            </div>
            <div>
              <p className="font-bold">size</p>
              <p>{product.size}</p>
            </div>
            <div>
              <p className="font-bold">count</p>
              <p>Тоо ширхэг сонгох {product.count}</p>
            </div>
            <button className="bg-[#cd1e3b] text-white w-[100%] h-[40px] rounded-[7px]">
              Сагсанд хийх
            </button>
            <div>
              <p className="font-bold">Бүтээлийн тайлбар</p>
              <p>{product.descriptions[0]}</p>
            </div>
            <div>
              <p className="font-bold">Арчилгааны зөвлөмж</p>
              <p>{product.caretip}</p>
            </div>
            <div>
              <p className="font-bold">Анхааруулга</p>
              <p>{product.warning}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `http://localhost:7070/product/${context.query.merchId}`
    );
    console.log(res);
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
