import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Avatar } from "@mui/material";
import Carts from "../components/CollectionCarts";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Face(props) {
  const { Image } = props;
  const [data, setData] = useState();
  const [count, setCount] = useState();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
        setData([res.data.data][0].slice(0, 5));
        setCount([res.data.data][0].length);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProps();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        marginBottom: "20px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(https://res.cloudinary.com/urlan/image/upload/v1677914253/geru-store/beernight/Screenshot_2023-03-04_at_15.13_1_1_1_1_gqsnhc.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          paddingBottom: {
            xs: "20px",
            sm: "20px",
            md: "5px",
            lg: "40px",
            xl: "40px",
          },
          paddingTop: {
            xs: "20px",
            sm: "20px",
            md: "5px",
            lg: "40px",
            xl: "40px",
          },
          paddingLeft: {
            xs: "20px",
            sm: "20px",
            md: "10px",
            lg: "30px",
            xl: "30px",
          },
          paddingRight: {
            xs: "20px",
            sm: "20px",
            md: "10px",
            lg: "30px",
            xl: "30px",
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "25%",
            xl: "25%",
          },
        }}
      >
        <Box>
          <CardMedia
            image={Image}
            sx={{
              width: {
                xs: "90px",
                sm: "90px",
                md: "100px",
                lg: "120px",
                xl: "120px",
              },
              height: {
                xs: "90px",
                sm: "90px",
                md: "100px",
                lg: "120px",
                xl: "120px",
              },
              border: "hiden",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            paddingTop: {
              xs: "0px",
              sm: "0px",
              md: "20px",
              lg: "24px",
              xl: "24px",
            },
            paddingBottom: {
              xs: "0px",
              sm: "0px",
              md: "20px",
              lg: "24px",
              xl: "24px",
            },
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "28px",
              fontSize: {
                xs: "18px",
                sm: "18px",
                md: "20px",
                lg: "28px",
                xl: "28px",
              },
              lineHeight: "1em",
              color: "rgb(255, 255, 255)",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            Title
          </Box>
          <Box
            sx={{
              paddingBottom: "10px",
              color: "rgb(255, 255, 255)",
              fontWeight: "200",
              fontSize: {
                xs: "13px",
                sm: "13px",
                md: "15px",
              },
            }}
          >
            Fragile is our very first game that reveals the story of a
            10-year-old girl who was abducted and brought to a ...
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: {
                xs: "0px",
                sm: "0px",
                md: "30px",
                lg: "48px",
                xl: "48px",
              },
              flexDirection: "row",
              color: "black",
              justifyContent: "flex-start",
            }}
            variant="text"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                cursor: "pointer",
              }}
            >
              <Box>
                <Avatar src="https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg" />
              </Box>
              <Box
                sx={{
                  color: "rgb(255, 255, 255)",
                  fontSize: {
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                  },
                }}
              >
                @Studio
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "75%",
            xl: "75%",
          },
          height: {
            xs: "250px",
            sm: "280px",
            md: "350px",
            lg: "450px",
            xl: "450px",
          },
          paddingBottom: {
            xs: "5px",
            sm: "5px",
            md: "5px",
            lg: "40px",
            xl: "40px",
          },
          paddingTop: {
            xs: "5px",
            sm: "5px",
            md: "5px",
            lg: "40px",
            xl: "40px",
          },
          paddingLeft: {
            xs: "5px",
            sm: "5px",
            md: "10px",
            lg: "30px",
            xl: "30px",
          },
          paddingRight: {
            xs: "5px",
            sm: "5px",
            md: "10px",
            lg: "30px",
            xl: "30px",
          },
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Swiper
          spaceBetween={10}
          style={{ width: "100%", height: "100%" }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 3,
            }
          }}
        >
          {data?.map((card, index) => (
            <SwiperSlide>
              <Carts key={index} Image={card.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
