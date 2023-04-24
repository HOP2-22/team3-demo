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
        gap: "15px",
        justifyContent: "center",
      }}
      className="abc"
    >
      <CollectionArtist />
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
        className="hello"
      >
        {topMerch.map((item, index) => {
          return <CollectionMerch />;
        })}
      </Box>
    </Box>
  );
}

export default ArtistCollection;
