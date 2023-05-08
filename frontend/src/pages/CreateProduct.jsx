import axios from "axios";
import { useState } from "react";
import { IconButton, Stack, Box, Button, List } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const size = ["s", "m", "l", "xl", "2xl", "3xl"];

export default function Create() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const create = async () => {
    try {
      const res = axios.post("http://localhost:7070/product/create", {
        email: email,
        password: password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-slate-300" style={{ padding: "40vh" }}>
      <Box display="flex" justifyContent="space-around">
        <input
          onChange={(el) => {
            setEmail(el.target.value);
          }}
        />
        <input
          onChange={(el) => {
            setPassword(el.target.value);
          }}
        />
      </Box>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label">
          Upload
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />

          <PhotoCamera />
        </IconButton>
      </Stack>
    </div>
  );
}
