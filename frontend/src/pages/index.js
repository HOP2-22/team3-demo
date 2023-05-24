import { Container } from "@mui/material";

import HomeDetail from "@/components/home/HomeDetail";
import HomeGif from "@/components/home/HomeGif";
import HomeMerchSection from "@/components/home/HomeMerchSection";
import axios from "axios";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import { Checkbox, CardMedia } from "@mui/material";

import { FavoriteBorder, Favorite } from "@mui/icons-material";

export default function Home({ products }) {

  const { push } = useRouter()

  return (
    <>
      <Box
        sx={{ backgroundColor: "#090520", width: "100%", paddingBottom: "100px", paddingTop: "100px" }}
      >
        <Container maxWidth="xl">
          <Box sx={styles.position}>
            <HomeGif />
            <HomeDetail />
          </Box>
          <Box sx={{ marginTop: "70px", backgroundColor: "#090520" }}>
            <Container maxWidth="xl">
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
                        color: "white",
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
                      {products?.length}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      alignSelf: "self-start",
                      fontWeight: "300",
                      color: "white",
                    }}
                  >
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
                        bgcolor: "white",
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
                      width: {
                        xs: "100%",
                        sx: "100%",
                        md: "100%",
                        lg: "100%",
                        xl: "75%",
                      },
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
                          color: "white",
                        }}
                      >
                        {products?.map((product, index) => {
                          return (
                            <Box
                              onClick={() => push(`/merch/${product?._id}`)}
                              key={index}
                              sx={{
                                marginBottom: "50px",
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
                                  image={product?.images?.[0]}
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

                              </Box>
                              <Box>
                                <Box
                                  sx={{
                                    color: "rgb(158, 158, 158)",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {product?.type_of}
                                </Box>

                                <Box sx={{ fontWeight: "bold", color: "white" }}>
                                  Title {product?.name}
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
                                  Price : {product?.price}
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
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const styles = {
  position: {
    backgroundColor: "#090520",
    padding: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
  },
};

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      `http://localhost:7070/product?status=approved`
    );

    return {
      props: {
        products: res.data.data,
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
