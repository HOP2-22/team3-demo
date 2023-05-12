import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ArtistCart from "../components/artistweb/ArtistCart";
import { useEffect, useState } from "react";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import CardMedia from "@mui/material/CardMedia";
import { Stack, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Image from "next/image";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/router";

export default function Artist() {
  const [data, setData] = useState();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [count, setCount] = useState();
  const router = useRouter();
  const instance = axios.create({
    baseURL: "http://localhost:7070/artist/",
  });

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const res = await instance?.get("/");
        console.log(res.data.data);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProps();
  }, []);

  const handleClick = (id) => {
    router.push({
      pathname: "ArtistDetail",
      query: {
        artist: id,
      },
    });
  };

  return (
    <Box sx={{ marginTop: "70px" }}>
      <Container maxWidth="xl">
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}>
            <Box sx={{ display: "flex", alignSelf: "self-start" }}>
              <Box
                sx={{
                  fontSize: {
                    xs: "70px",
                    sm: "85px",
                    md: "85px",
                    lg: "90px",
                    xl: "96px",
                  },
                  fontWeight: "bold",
                }}>
                ARTIST
              </Box>
              <Box
                sx={{
                  color: "rgb(205, 30, 59)",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "25px",
                    sm: "30px",
                    md: "30px",
                    lg: "30px",
                    xl: "36px",
                  },
                }}>
                {count}
              </Box>
            </Box>
            <Box sx={{ alignSelf: "self-start", fontWeight: "300" }}>
              Мэдрэмж бүхэн өөр
            </Box>
            <Box
              sx={{
                paddingTop: "16px",
                paddingBottom: "16px",
                width: "100%",
                boxSizing: "border-box",
              }}>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  bgcolor: "black",
                  boxSizing: "border-box",
                }}></Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                // flex: 4,
                // marginTop: "-20px",
                width: {
                  xs: "100%",
                  sx: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "auto",
                },
                gap: "20px",
                justifyContent: {
                  xs: "center",
                  sx: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
                paddingLeft: {
                  xs: "0px",
                  xl: "70px",
                },
                paddingRight: {
                  xs: "0px",
                  xl: "70px",
                },
              }}>
              {data?.map((info, index) => (
                <div
                  className="w-[360px] h-[360px] border-2"
                  onClick={() => handleClick(info?._id)}>
                  <div className="w-[100%] h-[100%]  flex items-center flex-col ">
                    <img
                      src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                      className="w-[100%] h-[40%]"
                    />
                    <img
                      src="https://mui.com/static/images/cards/live-from-space.jpg"
                      className="w-[100px] h-[100px] rounded-full border-[6px] mt-[-50px]"
                    />
                    <div className="w-[100%] flex flex-col items-center gap-[4px]">
                      <p className="text-[28px] font-bold">{info.username}</p>
                      <p className="text-[14px] text-[#636363]">
                        {info.type_of}
                      </p>
                      <div className="w-[100%] px-[10%]">
                        <p>{info.cv}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Box>
            <Box
              sx={{
                paddingLeft: "0px",
                paddingRight: {
                  xs: "0px",
                  xl: "80px",
                },
                width: {
                  xs: "none",
                  sx: "none",
                  md: "25%",
                  lg: "25%",
                  xl: "30%",
                },
                display: {
                  xs: "none",
                  sx: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  top: "80px",
                  position: "sticky",
                }}>
                <Box
                  sx={{
                    padding: "10px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}>
                  Төрлөөр шүүх
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Checkbox {...label} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>Бүгд</Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Checkbox {...label} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Дижитал артист
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Checkbox {...label} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Гэрэл зурагчин
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Checkbox {...label} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Уран зураач
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
