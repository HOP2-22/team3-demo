import React from "react";
import { Container } from "@mui/icons-material";
import Cart from "./Cart";

export function Basket() {
  const test = [1, 2, 3];

  return (
    <Container>
      <Box>
        {test.map((dt, ind) => {
          return <Cart key={ind} />;
        })}
      </Box>
    </Container>
  );
}

export default Basket;
