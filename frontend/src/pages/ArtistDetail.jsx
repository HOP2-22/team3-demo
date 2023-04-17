import React from "react";
import Artworks from "../components/ArtistArtworks";
import Bio from "../components/ArtistBio";
import Collection from "../components/ArtistCollection";
import Merch from "../components/ArtistMerch";
import { Box, Container, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import Image from "next/image";
import { useState } from "react";
import ArtistCollection from "../components/ArtistCollection";
function ArtistDetail() {
  const [arr, setArr] = useState([true, false, false, false]);

  const booleanHandler = (index) => {
    let newArr = new Array(arr.length).fill(false);
    newArr[index] = true;
    setArr(newArr);
  };

  return (
    <Box>
      <Box
        height={"400px"}
        width={"100vw"}
        position={"relative"}
        sx={{
          padding: "85px 0px",
        }}
      >
        <Image
          src="/artistBg.jpeg"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Stack
          sx={{
            display: "flex",
            position: "absolute",
            bottom: "0",
            transform: "translateY(50%)",
            width: "100%",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                height: "152px",
                width: "152px",
                padding: "20px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url(https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg)",
                borderRadius: "50%",
                border: "10px solid white",
                borderRadius: "100%",
                boxShadow: "0 0px 15px 5px rgba(0, 0, 0, 0.2)",
              }}
            />
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontHeight: " 600",
                  fontSize: "36px",
                  color: "aqua",
                }}
              >
                Хонгорзул
                <VerifiedIcon sx={{ color: "#3498db" }} />
              </Box>
              <Box
                sx={{
                  color: "gray",
                }}
              >
                Улаанбаатар, Монголaaa
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "680px",
              },
              right: 0,
              background: "white",
              padding: "16px 20px",
              boxShadow: {
                xs: "none",
                md: "0 0px 15px 5px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident eligendi, temporibus reiciendis quos, necessitatibus
              nihil harum at ut modi corrupti blanditiis culpa minus illo maxime
              inven tore molestias unde, dignissimos hic?
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <img
                src="https://wallpapers.com/images/hd/confused-patrick-random-pfp-x63wp9vs43cem64s.jpg"
                height="34px"
                width="34px"
                style={{ borderRadius: "50%" }}
              />
              Aminaa Mashbat
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ padding: "200px 0px 0px 0px" }}>
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              height: "55px",
              borderBottom: "1px solid black",
              marginBottom: "30px",
              fontWeight: "bold",
              fontSize: "28px",
              color: "gray",
            }}
          >
            {arr?.map((item, index) => {
              return (
                <Box
                  onClick={() => booleanHandler(index)}
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "30px",
                    },
                  }}
                >
                  {index === 0
                    ? "COLLECTION"
                    : index === 1
                    ? "ARTWORKS"
                    : index === 2
                    ? "MERCH"
                    : "BIO"}
                </Box>
              );
            })}
          </Box>
          {arr[0] && <Collection />}
          {arr[1] && <Artworks />}
          {arr[2] && <Merch />}
          {arr[3] && <Bio />}
        </Container>
      </Box>
    </Box>
  );
}

export default ArtistDetail;
