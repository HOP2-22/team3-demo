import { Container, Box, Typography, Button, Stack } from "@mui/material";
import Cart from "./Cart";

export function Basket() {
  return (
    <Container
      sx={{ paddingTop: "20vh", backgroundColor: "#ececec" }}
      className="grid grid-cols-12"
    >
      <Stack alignItems="center" className="col-span-12">
        <Typography sx={(styles.priceWord, { fontSize: "25px" })}>
          Таны Сагсанд 3 Бүтээгдэхүүн Байна
        </Typography>
      </Stack>
      <Box className="col-span-9">
        <Cart />
      </Box>
      <Box className="col-span-3">
        <Stack
          sx={(styles.priceWord, { fontSize: "20px", alignItems: "center" })}
        >
          ТАНЫ ТӨЛБӨР
        </Stack>
        <Box sx={styles.idk}>
          <Typography>Нийт </Typography>
          <Typography sx={styles.priceWord}>31.4k$</Typography>
        </Box>
        <Button variant="outlined" color="error">
          Худалдан авах
        </Button>
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
    fontWeight: "bold",
  },
};

export default Basket;
