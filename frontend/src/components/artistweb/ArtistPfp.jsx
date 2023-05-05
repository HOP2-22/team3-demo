import { Box } from "@mui/material";
import React from "react";

function ArtistPfp({ height, width }) {
  return (
    <div>
      <Box
        sx={{
          height: { height },
          width: { width },
          backgroundSize: "cover",
          backgroundImage:
            "url(https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg)",
          borderRadius: "100%",
        }}
      />
    </div>
  );
}

export default ArtistPfp;
