import React from "react";
import Artworks from "../components/artistweb/ArtistArtworks";
import Bio from "../components/artistweb/ArtistBio";
import Collection from "../components/artistweb/ArtistCollection";
import Merch from "../components/artistweb/ArtistMerch";
import VerifiedIcon from "@mui/icons-material/Verified";
import Image from "next/image";
import ArtistCollection from "../components/artistweb/ArtistCollection";
import { useRouter } from "next/router";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

function ArtistDetail() {
  const router = useRouter();

  const [data, setData] = useState();
  const [merchData, setMerchData] = useState();

  useEffect(() => {
    const findProduct = async () => {
      if (!router.query.artist) {
        return;
      }
      const res = await axios.get(
        `http://localhost:7070/artist/findArtist/${router.query.artist}`
      );
      setData(res?.data?.data);
    };
    findProduct();
  }, [router.query]);

  // "http://localhost:7070/product/getProductByOwner/ownerId?status=approved",
  const OwnerName = data?.username;
  const status = "approved";

  useEffect(() => {
    const Merchs = async () => {
      try {
        const { datamerch } = await axios.post(
          "http://localhost:7070/product/getProductByOwner/",
          {
            ownerName: OwnerName,
            status: status,
          }
        );
        console.log(OwnerName, status);

        setMerchData(datamerch);
      } catch (error) {}
    };
    Merchs();
  }, []);

  return (
    <div className="w-full  bg-gray-500 mt-[70px]">
      <img
        className="w-[100%] h-[400px]"
        src="https://res.cloudinary.com/urlan/image/upload/v1675754478/geru-store/anarotion/Group_68_3_1_hprccd.jpg"
      />
      <Container maxWidth="xl">
        <div className="w-[100%] border-b-[1px] pb-[30px]">
          <img
            className="w-[200px] h-[200px] rounded-full border-[10px] mt-[-100px] relative z-2"
            src="https://res.cloudinary.com/urlan/image/upload/v1675754163/geru-store/anarotion/296706802_584934106372209_4121703699884707119_n_eeibpf.jpg"
          />
          <p className="text-[50px] font-bold">{data?.username}</p>
          <p>{data?.type_of}</p>
        </div>
        <div>
          <div className="w-[100%] border-b-[1px]">
            <p className="text-[90px] font-bold">Bio</p>
            <p>{data?.cv}</p>
          </div>
        </div>
        <div>
          <p className="text-[90px] font-bold">Merch</p>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}>
              {merchData?.map((merchData, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      marginBottom: "50px",
                      border: "1px solid ",
                      width: {
                        xs: "45%",
                        sm: "45%",
                        md: "30%",
                        lg: "30%",
                        xl: "30%",
                      },
                    }}>
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        image="https://i.pinimg.com/564x/ac/85/7f/ac857f3e95191797f908869707752ca1.jpg"
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
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        sx={{
                          position: "absolute",
                          top: "8px",
                        }}></Checkbox>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          color: "rgb(158, 158, 158)",
                          fontWeight: "bold",
                        }}>
                        {merchData.type_of}
                      </Box>
                      <Box sx={{ fontWeight: "bold" }}>Title </Box>
                      <Box
                        sx={{
                          paddingTop: "8px",
                          paddingBottom: "8px",
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
                      <Box sx={{ fontWeight: "bold" }}>Price : </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default ArtistDetail;
