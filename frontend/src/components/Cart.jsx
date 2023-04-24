import { Container, Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { CardDt } from "../json/card.json";

const img =
  "https://res.cloudinary.com/urlan/image/upload/a_0,g_north_west,h_664,o_100,u_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdXJsYW4vaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsaF82ODIsd183NDYvZ19ub3J0aF93ZXN0LGhfNjU2LGxfZmlsZW1hbmFnZXI6c2RhaHA5OHl2bWtodWhrdXp4eGQsd181NDYseF8xMTEseV8yNi9jX2Nyb3AsZ19ub3J0aF93ZXN0LGhfNjY0LHdfNzQ2LHhfMCx5XzAvdjEvbW9ja3VwL2JhY2tncm91bmRfMl9hZ3ZpemM,x_169,y_188/c_crop,g_north_west,h_1080,w_1080,x_0,y_0/f_jpg/v1/mockup/mouse-pad-40x45/pad_studio_shot_ewlllo.jpg";

const Product = () => {
  return (
    <Container>
      <Box>
        <img src={img} style={{ height: "100px" }} />
        <Typography>fgcvserdfverd</Typography>
        <NativeSelectDemo />
        <Typography>39.6k</Typography>
      </Box>
    </Container>
  );
};

const NativeSelectDemo = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Count
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          {CardDt.map((data, ind) => {
            return <option value={40}>{data}</option>;
          })}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

function Cart() {
  return (
    <Container>
      <Box sx={styles.position}>
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
    </Container>
  );
}

const styles = {
  position: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default Cart;
