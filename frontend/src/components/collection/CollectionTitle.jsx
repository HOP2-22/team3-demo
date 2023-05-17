import React from "react";
import { Box } from "@mui/material";

const CollectionTitle = ({ collectionCount }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignSelf: "self-start" }}>
        <Box
          sx={{
            fontSize: {
              xs: "40px",
              sm: "85px",
              md: "85px",
              lg: "90px",
              xl: "96px",
            },
            fontWeight: "bold",
          }}
        >
          COLLECTION
        </Box>
        <Box
          sx={{
            color: "rgb(205, 30, 59)",
            fontWeight: "bold",
            fontSize: {
              xs: "25px",
              sm: "30px",
              md: "30px",
              lg: "30px",
              xl: "36px",
            },
          }}
        >
          {collectionCount}
        </Box>
      </Box>
      <Box sx={{ alignSelf: "self-start", fontWeight: "300" }}>
        Experience art at its finest with our curated collection
      </Box>
    </>
  );
};

export default CollectionTitle;
