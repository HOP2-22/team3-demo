import React from "react";
import { Box, Typography } from "@mui/material";
import CollectionMerch from "./CollectionMerch";
import CollectionArtist from "./CollectionArtist";
import { useState } from "react";
function ArtistCollection() {
  const [topMerch, setTopMerch] = useState(["first", "second", "third"]);
  return (
    <Box
      sx={{
        borderRadius: "15px",
        background: "#1b1927",
        display: "flex",
        padding: "40px",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
      }}
    >
      <CollectionArtist />
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        {topMerch.map((item, index) => {
          return <CollectionMerch />;
        })}
      </Box>
    </Box>
  );
}

export default ArtistCollection;
