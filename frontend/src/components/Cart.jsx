import { Container, Box, Typography, Button } from "@mui/material";
import { InputLabel, FormControl, NativeSelect } from "@mui/material";
import { CardDt } from "../json/card.js";

const img =
  "https://res.cloudinary.com/urlan/image/upload/a_0,g_north_west,h_664,o_100,u_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdXJsYW4vaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsaF82ODIsd183NDYvZ19ub3J0aF93ZXN0LGhfNjU2LGxfZmlsZW1hbmFnZXI6c2RhaHA5OHl2bWtodWhrdXp4eGQsd181NDYseF8xMTEseV8yNi9jX2Nyb3AsZ19ub3J0aF93ZXN0LGhfNjY0LHdfNzQ2LHhfMCx5XzAvdjEvbW9ja3VwL2JhY2tncm91bmRfMl9hZ3ZpemM,x_169,y_188/c_crop,g_north_west,h_1080,w_1080,x_0,y_0/f_jpg/v1/mockup/mouse-pad-40x45/pad_studio_shot_ewlllo.jpg";

const data = [
  {
    Color: "White",
    Size: "M",
  },
];

const Product = () => {
  return (
    <Container sx={styles.comp}>
      <Box sx={styles.img}>
        <img src={img} style={{ height: "10vh" }} />
      </Box>
      <Box>
        <Typography sx={(styles.font, { fontWeight: "bold" })}>
          INNER ESSENCE OF MANKIND / T-SHIRT
        </Typography>
        {data.map((dt, ind) => {
          return (
            <Box key={ind}>
              <Typography sx={styles.font}> Color: {dt.Color}</Typography>
              <Typography sx={styles.font}> Size: {dt.Size}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box>
        <NativeSelectDemo />
        <Typography>39.6k</Typography>
      </Box>
    </Container>
  );
};

const NativeSelectDemo = () => {
  return (
    <Box>
      <FormControl>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          {CardDt.map((data, ind) => {
            return (
              <option key={ind} value={40}>
                {data.number}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

const Cart = () => {
  return (
    <Container maxWidth="md">
      <Box sx={styles.header}>
        <Box>
          <Typography> Monkey Studio</Typography>
          <Typography>Үйлдвэр-с хүргэнэ</Typography>
        </Box>
        <Box>
          <Typography> Маргааш - Мягмар</Typography>
          <Typography>(04/22 - 04/25)</Typography>
        </Box>
      </Box>
      <Product />
      <Button> Устгах</Button>
    </Container>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: 4,
  },
  comp: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    height: {
      xl: "10vh",
      lg: "10vh",
      md: "10vh",
    },
  },
  font: {
    fontFamily: "PT Sans Narrow",
    fontSize: "17px",
  },
  Typography: {
    fontSize: "30px",
  },
};

export default Cart;
