import { Box, Button, Container } from "@mui/material";
import axios from "axios";
import { useState } from "react";

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
            setEmail(el.target.value);
          }}
        />
      </Box>
      <img src="cover-photo.gif" />
      <Button onClick={() => create()}>click</Button>
    </div>
  );
}
