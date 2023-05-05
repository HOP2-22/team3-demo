import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ArtistCart from "../../components/artistweb/ArtistCart";
import { useEffect, useState } from "react";
import Axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

export default function Artist() {
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
        setData([res.data.data][0].slice(0, 12));
        setCount([res.data.data][0].length);
        console.log(count);
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
                72
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
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                flexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                marginTop: "-20px",
                width: {
                  xs: "100%",
                  sx: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "75%",
                },
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {data?.map((card, index) => (
                <ArtistCart key={index} image={card.image}></ArtistCart>
              ))}
            </Box>
            <Box
              sx={{
                paddingLeft: "40px",
                paddingRight: "40px",
                width: "25%",
                height: "1730px",
                display: {
                  xs: "none",
                  sx: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
                flexDirection: "column",
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