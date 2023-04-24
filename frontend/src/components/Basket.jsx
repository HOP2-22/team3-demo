import { Container, Box, Typography, Button } from "@mui/material";
import Cart from "./Cart";

export function Basket() {
  return (
    <Container sx={{ paddingTop: "20vh" }} className="grid grid-cols-12">
      <Box className="col-span-12">
        <Typography>ТАНЫ САГСАНД 3 БҮТЭЭГДЭХҮҮН БАЙНА</Typography>
      </Box>
      <Box className="col-span-9">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </Box>
      <Box className="col-span-3">
        <Typography>ТАНЫ ТӨЛБӨР</Typography>
        <Box sx={styles.idk}>
          <Typography>Нийт </Typography>
          <Typography>31.4k$</Typography>
        </Box>
        <Button>Худалдан авах</Button>
      </Box>
    </Container>
  );
}
const styles = {
  idk: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default Basket;
