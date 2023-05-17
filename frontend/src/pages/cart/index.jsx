import { useContext } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import { ArtistContext } from "@/context/Artistcontext";
import BuyCart from "@/components/market/BuyCart";

const Cart = () => {
  const { user } = useContext(ArtistContext);

  return (
    <Box sx={{ bgcolor: "#090520" }}>
      <Container sx={styles.cont} maxWidth="xl">
        <Stack alignItems="center">
          <Typography
            sx={{
              fontFamily: "PT Sans Narrow",
              fontSize: {
                xl: "30px",
                xs: "20px",
              },
              fontWeight: "bold",
              paddingBottom: "40px",
              paddingTop: "40px",
              color: "white",
            }}
          >
            Таны Сагсанд 3 Бүтээгдэхүүн Байна
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              gap: "20px",
              flexDirection: "column",
            }}
          >
            {user?.cart.map((cart, index) => {
              return <Cart data={cart} />;
            })}
          </Box>
          <BuyCart price={41000} />
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  idk: {
    display: "flex",
    justifyContent: "space-between",
  },
  priceWord: {
    fontFamily: "PT Sans Narrow",
    fontSize: "30px",
    alignItems: "center",
    fontWeight: "bold",
  },
  BasketCardContainer: {
    backgroundColor: "white",
    padding: "16px",
    height: "15vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cont: {
    paddingTop: "20vh",
  },
};

export default Cart;
