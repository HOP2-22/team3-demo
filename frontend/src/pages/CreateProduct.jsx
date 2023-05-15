import axios from "axios";
import { useState } from "react";
import { IconButton, Stack, Box, Button, List } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useAuthContext } from "@/context/context";

// const size = ["s", "m", "l", "xl", "2xl", "3xl"];

export default function Create() {
  const { currentUser } = useAuthContext();

  const createProduct = async () => {
    try {
      const res = axios.post("http://localhost:7070/product/create", {
        
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          component="label"
          onClick={() => {
            createProduct();
          }}
        >
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
