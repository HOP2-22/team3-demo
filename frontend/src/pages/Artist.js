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

export default function Artist() {
  const [data, setData] = useState();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [count, setCount] = useState();

  const instance = axios.create({
    baseURL: "http://localhost:7070/product/approved",
  });

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const res = await instance?.get("/");
        setData(res?.data.json);
        console.log(res.data.json);
        setCount(res?.data.json.length);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProps();
  }, []);

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
            }}
          >
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
                }}
              >
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
                }}
              >
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
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  bgcolor: "black",
                  boxSizing: "border-box",
                }}
              ></Box>
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
                justifyContent:{
                  xs: "center",
                  sx: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
                paddingLeft:{
                  xs: "0px",
                  xl: "70px",
                },
                paddingRight:{
                  xs: "0px",
                  xl: "70px",
                },
              }}
            >
              {data?.map((info, index) => (
                <Card key={index} sx={{ width: "345px" }}>
                  <CardActionArea sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={
                        "https://res.cloudinary.com/urlan/image/upload/v1677914253/geru-store/beernight/Screenshot_2023-03-04_at_15.13_1_1_1_1_gqsnhc.jpg"
                      }
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {info.productName}
                      </Typography>
                      <Typography
                        sx={{ overflow: "hidden", overflowY: "scroll", height:"100px", paddingRight:"4px" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {info.details}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
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
                alignItems:"center"
              }}
            >
              <Box
                sx={{
                  top: "80px",
                  position: "sticky",
                }}
              >
                <Box
                  sx={{
                    padding: "10px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
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
