import { Box, Container } from "@mui/material";

import HomeDetail from "@/components/home/HomeDetail";
import HomeGif from "@/components/home/HomeGif";
import HomeMerchSection from "@/components/home/HomeMerchSection";

export default function Home({ products }) {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#090520", width: "100%", marginTop: "70px" }}
      >
        <Container maxWidth="xl">
          <Box sx={styles.position}>
            <HomeGif />
            <HomeDetail />
          </Box>
          <HomeMerchSection products={products} />
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
