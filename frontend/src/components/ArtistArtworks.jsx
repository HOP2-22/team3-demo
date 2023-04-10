import { Box } from "@mui/material";
import React, { useState } from "react";

function ArtistArtworks() {
  const [pictures, setPictures] = useState([
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
    "https://res.cloudinary.com/urlan/image/upload/h_292,w_768/f_jpg/v1/filemanager/lpleb9lednqfwwc5ot1z",
  ]);
  return (
    <Box>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", gap: "30px", padding: "30px" }}
      >
        {pictures.map((item, index) => {
          return (
            <Box sx={{ fontWeight: "bold" }}>
              <img src={item} alt="a" width={"442px"} />
              INNER ESSENCE OF MANKIND
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default ArtistArtworks;
