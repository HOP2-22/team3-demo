import React from "react";
import { Box } from "@mui/material";

const CollectionMerchCard = () => {
  return (
    <Box>
      <img
        src="https://res.cloudinary.com/urlan/image/upload/c_scale/q_60/f_jpg/v1/filemanager/cjmh1ndpifgf2oilap8j"
        height={"294px"}
        width={"294px"}
        className="collectionMerchStyle"
      />
      <Box
        sx={{
          display: "flex",
          background: "white",
          height: "54px",
          alignItems: "center",
          padding: "16px 12px",
          justifyContent: "space-between",
          maxWidth: "294px",
        }}
        className="collectionMerchPrice"
      >
        <Box>80K₮</Box>
        <Box>@khongorzul</Box>
      </Box>
    </Box>
  );
};
export default CollectionMerchCard;
