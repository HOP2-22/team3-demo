import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MerchCart from "../components/MerchCart";
import { useEffect, useState } from "react";
import Axios from "axios";
import Checkbox from "@mui/material/Checkbox";

export default function Merch() {
  const [data, setData] = useState();
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
        setData([res.data.data][0].slice(0, 6));
        console.log(slicedData);
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
              <Box sx={{ fontSize: "96px", fontWeight: "bold" }}>MERCH</Box>
              <Box
                sx={{
                  color: "rgb(205, 30, 59)",
                  fontWeight: "bold",
                  fontSize: "36px",
                }}
              >
                751
              </Box>
            </Box>
            <Box sx={{ alignSelf: "self-start", fontWeight: "300" }}>
              Илүү мэдрэмжийг. Илүү хялбараар
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
                flexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                width: "75%",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data?.map((card, index) => (
                <MerchCart key={index} image={card.image}></MerchCart>
              ))}
            </Box>
            <Box
              sx={{
                paddingLeft: "40px",
                paddingRight: "40px",
                width: "25%",
                height: "894.167px",
                display: "flex",
                flexDirection:"column",
              }}
            >
              <Box
                sx={{
                  top: "20px",
                  position: "sticky",
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
                  пудволк
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
