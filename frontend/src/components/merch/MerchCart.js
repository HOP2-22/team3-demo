import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function MerchCart(data) {
  // const { data } = props;
  console.log(data?.data);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box>
      {data?.data?.map((index, info) => {
        <Box
          key={index}
          sx={{
            width: {
              xs: "45%",
              sm: "45%",
              md: "30%",
              lg: "30%",
              xl: "30%",
            },
          }}>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              image={info?.images}
              sx={{
                width: "100%",
                height: {
                  xs: "180px",
                  sm: "280px",
                  md: "337px",
                  lg: "337px",
                  xl: "337px",
                },
              }}
            />
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              sx={{ position: "absolute", top: "8px" }}></Checkbox>
          </Box>
          <Box>
            <Box sx={{ color: "rgb(158, 158, 158)", fontWeight: "bold" }}>
              Type
            </Box>
            <Box sx={{ fontWeight: "bold" }}>Title</Box>
            <Box
              sx={{
                paddingTop: "8px",
                paddingBottom: "8px",
                width: "100%",
                boxSizing: "border-box",
              }}>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  bgcolor: "black",
                  boxSizing: "border-box",
                }}></Box>
            </Box>
            <Box sx={{ fontWeight: "bold" }}>Price : </Box>
          </Box>
        </Box>;
      })}
    </Box>
  );
}
