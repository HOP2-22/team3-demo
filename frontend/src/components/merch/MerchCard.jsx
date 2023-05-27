import React from "react";
import { Box, CardMedia, Checkbox } from "@mui/material";

const MerchCard = ({ data }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box
      onClick={() => push(`/merch/${data?._id}`)}
      sx={{
        marginBottom: "50px",
        width: {
          xs: "45%",
          sm: "45%",
          md: "30%",
          lg: "30%",
          xl: "23%",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          image={data?.images}
          component="img"
          sx={{
            width: "100%",
            height: {
              xs: "180px",
              sm: "280px",
              md: "337px",
              lg: "337px",
              xl: "337px",
            },
            cursor: "pointer",
          }}
        />
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          sx={{
            position: "absolute",
            top: "8px",
          }}
        ></Checkbox>
      </Box>
      <Box>
        <Box
          sx={{
            color: "rgb(158, 158, 158)",
            fontWeight: "bold",
          }}
        >
          {data?.type_of}
        </Box>
        <Box sx={{ fontWeight: "bold" }}>Title {data?.productName}</Box>
        <Box
          sx={{
            paddingTop: "8px",
            paddingBottom: "8px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "black",
              boxSizing: "border-box",
            }}
          ></Box>
        </Box>
        <Box sx={{ fontWeight: "bold" }}>Price : {data?.price}</Box>
      </Box>
    </Box>
  );
};

export default MerchCard;
