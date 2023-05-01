import { Container, Box, Typography, Button, Stack, Grid } from "@mui/material";
import ProductList from "./Cart";
const BasketCard = ({ price }) => {
  return (
    <Box sx={styles.BasketCardContainer}>
      <Stack sx={styles.priceWord}>ТАНЫ ТӨЛБӨР</Stack>
      <Box sx={styles.idk}>
        <Typography>Нийт </Typography>
        <Typography>{price}</Typography>
      </Box>
      <Button variant="outlined" color="error">
        Худалдан авах
      </Button>
    </Box>
  );
};

export function Basket() {
  return (
    <Container sx={styles.cont}>
      <Stack alignItems="center">
        <Typography sx={styles.title}>
          Таны Сагсанд 3 Бүтээгдэхүүн Байна
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xl={9} md={7} lg={6}>
          <ProductList />
        </Grid>
        <Grid item md={5} xl={3} xs={12} lg={6}>
          <BasketCard price={"41000"} />
        </Grid>
      </Grid>
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
    fontSize: "25px",
    alignItems: "center",
    fontWeight: "bold",
  },
  BasketCardContainer: {
    backgroundColor: "white",
    padding: "16px",
    height: "15vh",
  },
  cont: {
    paddingTop: "20vh",
  },

  title: {
    fontFamily: "PT Sans Narrow",
    fontSize: {
      xl: "30px",
      xs: "20px",
    },
    fontWeight: "bold",
    gap: 5,
  },
};

export default Basket;
