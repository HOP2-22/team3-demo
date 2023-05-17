import React from "react";
import { Stack } from "@mui/material";

const HomeGif = () => {
  return (
    <Stack
      flex={2.5}
      sx={{
        padding: {
          xs: "0px",
          sm: "0px",
          md: "40px",
          lg: "40px",
          xl: "40px",
        },
        marginTop: {
          xs: "60px",
          sm: "60px",
          md: "0px",
          lg: "0px",
          xl: "0px",
        },
        marginBottom: {
          xs: "60px",
          sm: "60px",
          md: "0px",
          lg: "0px",
          xl: "0px",
        },
      }}
    >
      <img
        src={
          "https://i.pinimg.com/originals/3f/2c/15/3f2c15069fd4055ed4f8551f3207010c.gif"
        }
        style={{
          padding: "16px",
          backgroundColor: "White",
        }}
        alt="asdf"
      />
    </Stack>
  );
};

export default HomeGif;
