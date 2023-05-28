import React, { useContext, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";
import { UserContext } from "@/context/UserContext";

const ArtistDetail = ({ data }) => {
  const router = useRouter();

  const { push } = useRouter();

  const { productByArtist, setProdByArtist } = useContext(UserContext);

  const instance = axios.create({
    baseURL: `http://localhost:7070/product/`,
  });
  useEffect(() => {
    const fetchProps = async () => {
      try {
        const res = await instance?.get("/");
        console.log(res.data.data);
        setProdByArtist(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProps();
  }, []);

  return (
    <div className="w-full  bg-gray-500 py-[80px]">
      <img
        className="w-full h-[500px] object:center object:center"
        src={data?.backgroundImage}
      />
      <Container maxWidth="xl">
        <div className="w-[100%] border-b-[1px] pb-[30px]">
          <img
            className="w-[200px] h-[200px] rounded-full border-[10px] mt-[-100px] relative z-2"
            src={data?.image}
          />
          <p className="text-[50px] font-bold">{data?.name}</p>
          <p>{data?.type_of}</p>
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
                console.log(product);
                return (
                  <div
                    className="w-[80%]"
                    onClick={() => {
                      router.push(`/Merch/${product?._id}`);
                    }}
                  >
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
                          image={product?.images}
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
                        <Box sx={{ fontWeight: "bold" }}>{product.name} </Box>
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
                          Price : {product.price}₮
                        </Box>
                      </Box>
                    </Box>
                  </div>
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
