import { Box, Container, Typography } from "@mui/material";
import SwiperCard from "../../../components/SwiperCard";
import React, { useState, useEffect, useRef, useContext } from "react";
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
import { toast } from "react-hot-toast";
import { UserContext } from "@/context/UserContext";

const ProductDetail = ({ product, sizes }) => {
  console.log(product);
  const { user, setProductIfo } = useContext(UserContext);

  const { router, push } = useRouter();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectCount, setSelectedCount] = useState(0);

  const addToCart = async () => {
    if (!user) {
      toast.error("ta exled newternuu");
      return;
    }
    try {
      setProductIfo({
        image: product.images,
        color: selectedColor,
        size: selectedSize,
        count: selectCount,
      });
      push(`/Merch/${product._id}/buy`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full pb-[50px] pt-[150px] ">
      <Container maxWidth="xl">
        <div className=" flex gap-[2%]">
          <div className="w-[49%] h-[700px]">
            <img src={product?.images} />
          </div>
          <div className=" w-[49%] flex flex-col gap-[10px]">
            <div>
              <p className="text-[35px] font-bold">{product?.name}</p>
              <p className="font-bold text-[20px]">{product?.price}₮</p>
            </div>
            <div>
              <p className="font-bold">size</p>
              <div className="flex gap-6">
                {sizes?.map((size, index) => {
                  return (
                    <div className="w-[7%] flex  flex-col items-start">
                      <div>
                        <button
                          className="px-2 py-[6px] bg-gray-400 rounded-[7px] w-[50px] flex justify-center"
                          onClick={() => {
                            setSelectedSize((prev) => {
                              if (prev == size.size) {
                                return null;
                              }
                              return size.size;
                            });
                          }}
                        >
                          {size.size}
                        </button>
                      </div>
                      {selectedSize == size.size && (
                        <>
                          <div className="flex gap-6">
                            {size.colors.map((color, index) => {
                              return (
                                <button
                                  className="px-2 py-[6px] bg-gray-400 rounded-[7px] w-[50px] flex justify-center"
                                  onClick={() => {
                                    setSelectedColor((prev) => {
                                      if (prev == color.color) {
                                        return null;
                                      }
                                      return color?.color;
                                    });
                                  }}
                                >
                                  {color?.color}
                                </button>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="font-bold">Боломжит үлдэгдэл {product?.count}</p>
            </div>
            <div className="">
              <p className="font-bold">Хэдийг захиалах</p>
              <input
                className="border-[1px] rounded-[7px] w-[300px] h-[50px] text-[25px] px-[10px]"
                type="number"
                onChange={(e) => {
                  setSelectedCount(e.target.value);
                }}
              />
            </div>

            <button
              className="bg-[#cd1e3b] text-white w-[100%] h-[40px] rounded-[7px]"
              onClick={() => {
                addToCart();
              }}
            >
              Худалдаж авах
            </button>
            <div>
              <p className="font-bold">Бүтээлийн тайлбар</p>
              <p>{product?.descriptions[0]}</p>
            </div>
            <div>
              <p className="font-bold">Арчилгааны зөвлөмж</p>
              <p>{product?.caretip}</p>
            </div>
            <div>
              <p className="font-bold">Анхааруулга</p>
              <p>{product?.warning}</p>
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
