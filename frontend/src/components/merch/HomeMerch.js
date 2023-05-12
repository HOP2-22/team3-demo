import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";

export default function Merch() {
  const router = useRouter();
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

  const handleClick = (id) => {
    router.push({
      pathname: "Buy",
      query: {
        product: id,
      },
    });
  };

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
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
              MERCH
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
              width: "100%",
              gap: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap:"10px"
                }}
              >
                {data?.map((info, index) => {
                  return (
                    <Box
                      onClick={() => handleClick(info?._id)}
                      key={index}
                      sx={{
                        marginBottom: "50px",
                        width: {
                          xs: "45%",
                          sm: "45%",
                          md: "30%",
                          lg: "30%",
                          xl: "23%",
                        },
                      }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          image={info?.images}
                          sx={{
                            width: "100%",
                            height: {
                              xs: "180px",
                              sm: "280px",
                              md: "337px",
                              lg: "337px",
                              xl: "337px",
                            },
                            cursor: "pointer",
                          }}
                        />
                        <Checkbox
                          {...label}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          sx={{
                            position: "absolute",
                            top: "8px",
                          }}
                        ></Checkbox>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            color: "rgb(158, 158, 158)",
                            fontWeight: "bold",
                          }}
                        >
                          {info.type_of}
                        </Box>
                        <Box sx={{ fontWeight: "bold" }}>
                          Title {info.productName}
                        </Box>
                        <Box
                          sx={{
                            paddingTop: "8px",
                            paddingBottom: "8px",
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
                        <Box sx={{ fontWeight: "bold" }}>
                          Price : {info.price}
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}