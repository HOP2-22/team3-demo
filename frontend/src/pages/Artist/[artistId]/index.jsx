import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";

const ArtistDetail = ({ data }) => {
  console.log(data);
  const router = useRouter();

  return (
    <div className="w-full  bg-gray-500 px-[70px]">
      <img className="w-[100%] h-[400px] object:center object:center" src="" />
      <Container maxWidth="xl">
        <div className="w-[100%] border-b-[1px] pb-[30px]">
          <img
            className="w-[200px] h-[200px] rounded-full border-[10px] mt-[-100px] relative z-2"
            src=""
          />
          <p className="text-[50px] font-bold">{data?.name}</p>
          <p>{data.type_of}</p>
        </div>
        <div>
          <div className="w-[100%] border-b-[1px]">
            <p className="text-[90px] font-bold">Bio</p>
            <p>{data.cv}</p>
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
              }}
            >
              {data?.products?.map((product, index) => {
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
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        image={product?.products?.images[0]}
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
                        {product.type_of}
                      </Box>
                      <Box sx={{ fontWeight: "bold" }}>Title </Box>
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
};

export default ArtistDetail;

export async function getServerSideProps(context) {
  const id = context.query.artistId;
  console.log(id);

  try {
    const res = await axios.get(`http://localhost:7070/artist/${id}`);

    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
}
