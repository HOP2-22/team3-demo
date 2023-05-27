import React from "react";
import { Box, Typography } from "@mui/material";

const ArtWorkTitle = () => {
  return (
    <Box sx={{ color: "white" }}>
      <Typography>ARTWORK</Typography>
      <Typography display={"flex"} justifyContent={"end"}>
        Илүү мэдрэмж
      </Typography>
    </Box>
  );
};

export default ArtWorkTitle;
