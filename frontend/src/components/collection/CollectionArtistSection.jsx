import React from "react";
import { Box } from "@mui/material";

import CollectionArtistAvatar from "./CollectionArtistAvatar";

const CollectionArtistSection = () => {
  return (
    <Box>
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
        <Box
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          Medrehui
        </Box>
        <Box
          sx={{
            color: "white",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          Mongol geriin tooniig emegtei hunii belhuuseer orooson durslel baij
          bolno gej uu?
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "white",
            marginBottom: "10px",
          }}
        >
          <CollectionArtistAvatar height={"32px"} width={"32px"} />
          @khongorzul
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionArtistSection;
