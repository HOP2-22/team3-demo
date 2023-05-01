import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Collection from "../components/Collection";
import CollectionV2 from "../components/CollectionV2";
import FaceHome from "../components/FaceHome";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Face() {
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
        setData([res.data.data][0].slice(0, 6));
        setCount([res.data.data][0].length);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProps();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#edf2f4", width: "100%", marginTop: "70px" }}>
      <Container maxWidth="xl">
        <FaceHome />
        <Box></Box>
        <Box
          sx={{
            marginTop: "32px",
            padding: {
              xs: "5px",
              sm: "5px",
              md: "10px",
              lg: "24px",
              xl: "24px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "26px",
                    lg: "36px",
                    xl: "36px",
                  },
                }}
              >
                КУРАТОРЫН КОЛЛЕКЦ
              </Box>
              <Box
                sx={{
                  display:"flex", 
                  fontWeight: "bold",
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "26px",
                    lg: "36px",
                    xl: "36px",
                  },
                }}
              >
                ИЛҮҮ ИХИЙГ +
              </Box>
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
              gap: "10px",
              width: "100%",
              paddingBottom: {
                xs: "5px",
                sm: "5px",
                md: "30px",
                lg: "24px",
                xl: "24px",
              },
              paddingTop: {
                xs: "5px",
                sm: "5px",
                md: "30px",
                lg: "24px",
                xl: "24px",
              },
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          >
            {data?.map((card, index) => (
              <Collection key={index} Image={card.image} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
