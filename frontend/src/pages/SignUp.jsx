import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

const title =
  "https://res.cloudinary.com/urlan/image/upload/v1677743932/static/Facebook_Cover_-04_1_idrpel.png";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nickname, setNickname] = useState();

  const register = async () => {
    try {
      const { data } = await axios.post("http://localhost:6666/users/signup", {
        email: email,
        password: password,
      });
      // Cookies.set("email", data.email);
      // Cookies.set("token", data.token);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box sx={styles.write}>
        <Typography>Мэйл хаяг утасны дугаар</Typography>
        <input
          style={styles.input}
          placeholder="Мэйл хаяг утасны дугаар"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Box>
      <Box sx={styles.write}>
        <Typography>Нууц үг оруулах</Typography>
        <input
          style={styles.input}
          placeholder=" Нууц үг оруулах"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Box>
      <Button
        sx={{ color: "#cd1e3b" }}
        variant="outlined"
        onClick={() => register()}
      >
        Нэвтрэх
      </Button>
    </Box>
  );
};

function SignUp() {
  return (
    <Container sx={styles.position}>
      <Box sx={styles.title}>
        <img src={title} />
      </Box>
      <Box>
        <Login />
        <Box sx={styles.buttonPosition}>
          <Box sx={styles.login}>Artist бол энд дарна уу?</Box>
          <Box sx={styles.login}>Бүртгүүлэх </Box>
        </Box>
      </Box>
    </Container>
  );
}

const styles = {
  title: {
    width: { xl: 300, lg: 300, xs: 250 },
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  write: {
    display: "flex",
    flexDirection: "column",
    width: { xl: 400, lg: 400, xs: 250 },
  },
  input: {
    height: 50,
    fontSize: 16,
    border: "2px solid  #cdcdcd",
    borderRadius: "10px",
    margin: "10px 0px 10px 10px",
    padding: "10px",
  },
  position: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: {
      xl: "50vh",
      xs: "80vh",
    },
  },
  buttonPosition: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  login: {
    minWidth: { xl: 300, lg: 300, xs: 250 },
    backgroundColor: "#ececec",
    height: 40,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default SignUp;
