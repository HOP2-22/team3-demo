import React from "react";
import Box from "@mui/material/Box";
function ArtworkArts({ image, author, title }) {
  return (
    <Box>
      <img src={image} alt={title} />
      <Box sx={{ paddingLeft: "10px", fontWeight: "bold" }}>{title}</Box>
      <Box sx={{ paddingLeft: "10px", color: "gray" }}>{author}</Box>
    </Box>
  );
}

export default ArtworkArts;
