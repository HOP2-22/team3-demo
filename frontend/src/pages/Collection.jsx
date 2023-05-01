import React from "react";
import { Box, Container } from "@mui/material";
import ArtistCollection from "@/components/ArtistCollection";
function Collection() {
  return (
    <Box style={{ marginTop: "75px" }}>
      <Container>
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
            7
          </Box>
        </Box>
        <Box sx={{ alignSelf: "self-start", fontWeight: "300" }}>
          Experience art at its finest with our curated collection
        </Box>
        <Box
          sx={{
            width: "100%",
            background: "black",
            height: "1px",
            marginBottom: "40px",
          }}
        />
        <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <ArtistCollection />
          <ArtistCollection />
          <ArtistCollection />
          <ArtistCollection />
          <ArtistCollection />
        </Box>
      </Container>
    </Box>
  );
}

export default Collection;
