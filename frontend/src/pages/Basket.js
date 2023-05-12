import { Container, Box, Typography, Button, Stack, Grid } from "@mui/material";
import Cart from "../components/market/CartBilegt";
import BuyCart from "../components/market/BuyCart"

// const BasketCard = ({ price }) => {
//   return (
//     <Box sx={styles.BasketCardContainer}>
//       <Stack sx={styles.priceWord}>ТАНЫ ТӨЛБӨР</Stack>
//       <Box sx={styles.idk}>
//         <Typography>Нийт </Typography>
//         <Typography>{price}</Typography>
//       </Box>
//       <Button color="error">Худалдан авах</Button>
//     </Box>
//   );
// };

export function Basket() {
  return (
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
          }}
        >
          Таны Сагсанд 3 Бүтээгдэхүүн Байна
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", justifyContent:"space-evenly" }}>
        <Cart />
        <BuyCart price={41000} />
      </Box>
    </Container>
  );
}

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

export default Basket;
