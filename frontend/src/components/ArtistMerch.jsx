import { Box } from "@mui/material";
import React from "react";
import MerchComponent from "./MerchComponent";
function ArtistMerch() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "10px",
      }}
    >
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
      <MerchComponent />
    </Box>
  );
}

export default ArtistMerch;
