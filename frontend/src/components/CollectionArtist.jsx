import { Box, Typography } from "@mui/material";
import React from "react";
import ArtistPfp from "./ArtistPfp";

function CollectionArtist() {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "30%",
        },
      }}
    >
      <img
        src="/artistBg.jpeg"
        width={"132px"}
        height={"132px"}
        style={{ borderRadius: "20px", marginBottom: "20px" }}
      />
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "28px",
          marginBottom: "10px",
        }}
      >
        Medrehui
      </Typography>
      <Typography sx={{ color: "white", marginBottom: "20px" }}>
        Mongol geriin tooniig emegtei hunii belhuuseer orooson durslel baij
        bolno gej uu?
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: "white",
          marginBottom: "10px",
        }}
      >
        <ArtistPfp height={"32px"} width={"32px"} />
        @khongorzul
      </Box>
    </Box>
  );
}

export default CollectionArtist;
