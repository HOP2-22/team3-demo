import React from "react";
import { Box, Container } from "@mui/material";

import CollectionCard from "@/components/collection/CollectionCard";
import CollectionTitle from "@/components/collection/CollectionTitle";

const Collection = () => {
  return (
    <Box style={{ marginTop: "75px" }}>
      <Container>
        <CollectionTitle collectionCount={10} />
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            paddingTop: "40px",
            borderTop: "1px black solid",
          }}
        >
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </Box>
      </Container>
    </Box>
  );
};

export default Collection;
