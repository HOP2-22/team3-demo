import { Container, Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const Product = () => {
  <Container>
    <Box>
      <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
      <Typography>fgcvserdfverd</Typography>
      <NativeSelectDemo />
      <Typography>39.6k</Typography>
    </Box>
  </Container>;
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
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
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
