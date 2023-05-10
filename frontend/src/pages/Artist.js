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
  const [count, setCount] = useState();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const instance = axios.create({
    baseURL: "http://localhost:7070/artist",
  });

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const res = await instance.get("/");
        setData(res?.data?.data);
        console.log(res?.data?.data);
        setCount(res?.data?.data.length);
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
          <Stack direction={"row"}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                flex: 1,
                // marginTop: "-20px",
                // width: {
                //   xs: "100%",
                //   sx: "100%",
                //   md: "100%",
                //   lg: "100%",
                //   xl: "75%",
                // },
                // gap: "10px",
              }}>
              {data?.map((card, index) => (
                <Box sx={{ width: "345px" }} bgcolor={"red"}>
                  <Box>
                    <Box
                      component="img"
                      height={140}
                      width={345}
                      sx={{
                        background: `url(https://mui.com/static/images/cards/contemplative-reptile.jpg)`,
                      }}
                    />
                    <Box>
                      <Typography gutterBottom variant="h5" component="Box">
                        {card.username}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {card.type_of}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.cv}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
            <Box
              sx={{
                paddingLeft: "40px",
                paddingRight: "40px",
                width: "256px",
                height: "1730px",
                display: {
                  xs: "none",
                  lg: "flex",
                },
                flexDirection: "column",
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
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
