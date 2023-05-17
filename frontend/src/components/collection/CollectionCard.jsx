import React from "react";
import { Box } from "@mui/material";

import CollectionArtistSection from "./CollectionArtistSection";
import CollectionMerchCard from "./CollectionMerchCard";

const CollectionCard = () => {
  return (
    <Box
      sx={{
        borderRadius: "15px",
        background: "#1b1927",
        display: "flex",
        padding: "40px",

        gap: "15px",
        justifyContent: "center",

        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
      }}
      className="abc"
    >
      <CollectionArtistSection />
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        {new Array(3).fill(false).map((_, index) => {
          return <CollectionMerchCard key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default CollectionCard;
