import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  FormControl,
  NativeSelect,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const img =
  "https://res.cloudinary.com/urlan/image/upload/a_0,g_north_west,h_664,o_100,u_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdXJsYW4vaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsaF82ODIsd183NDYvZ19ub3J0aF93ZXN0LGhfNjU2LGxfZmlsZW1hbmFnZXI6c2RhaHA5OHl2bWtodWhrdXp4eGQsd181NDYseF8xMTEseV8yNi9jX2Nyb3AsZ19ub3J0aF93ZXN0LGhfNjY0LHdfNzQ2LHhfMCx5XzAvdjEvbW9ja3VwL2JhY2tncm91bmRfMl9hZ3ZpemM,x_169,y_188/c_crop,g_north_west,h_1080,w_1080,x_0,y_0/f_jpg/v1/mockup/mouse-pad-40x45/pad_studio_shot_ewlllo.jpg";

const Cart = () => {
  const [size, setSize] = useState();
  const [count, setCount] = useState();
  const [productId, setProductId] = useState();
  const [color, setColor] = useState();
  const [card, setCard] = useState([]);

  useEffect(() => {
    const details = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:7070/cart/746573744361726475736572"
        );

        setCard(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    details();
  }, []);

  return (
    <Container>
      {card.map((data, index) => {
        return (
          <Container key={index} sx={styles.comp}>
            <Box sx={styles.img}>
              <img src={img} style={{ height: "10vh" }} />
            </Box>
            <Box sx={styles.titlee}>
              <Typography sx={styles.title}>
                INNER ESSENCE OF MANKIND / T-SHIRTcle
              </Typography>
              <Box>
                <Typography sx={styles.font}> Color: {data.color}</Typography>
                <Typography sx={styles.font}> Size: {data.size}</Typography>
              </Box>
            </Box>
            <Box>
              <NativeSelectDemo />
              <Typography>39.6k</Typography>
            </Box>
          </Container>
        );
      })}
    </Container>
  );
};

const NativeSelectDemo = (data) => {
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
          {/* {data.map((data, ind) => {
            return (
              <option key={ind} value={40}>
                {data.number}
              </option>
            );
          })} */}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

const ProductList = () => {
  return (
    <Box bgcolor="white" padding={2} gap={5}>
      <Box sx={styles.header}>
        <Box>
          <Typography sx={styles.word}> Monkey Studio</Typography>
          <Typography sx={styles.word}>Үйлдвэр-с хүргэнэ</Typography>
        </Box>
        <Box>
          <Typography sx={styles.word}> Маргааш - Мягмар</Typography>
          <Typography sx={styles.word}>(04/22 - 04/25)</Typography>
        </Box>
      </Box>
      <Product />
      <Button variant="outlained">
        Устгах
        <DeleteIcon fontSize="small" />
      </Button>
    </Box>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  comp: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: 150,
    width: 150,
  },
  font: {
    fontFamily: "PT Sans Narrow",
    fontSize: { xl: "17px", xs: "15px" },
  },

  title: {
    fontFamily: "PT Sans Narrow",
    fontWeight: "bold",
    fontSize: { xl: "30px", xs: "15px" },
  },

  word: {
    fontSize: { xl: "17px", xs: "14px" },
  },
  titlee: {
    height: { xl: "auto", xs: "10vh" },
  },
};

export default Cart;
