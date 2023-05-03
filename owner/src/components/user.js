import { Box } from "@mui/material";
import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function User() {
  return (
    <Box
      sx={{
        backgroundColor: "#edf2f4",
        width: "100%",
        display: "flex",
        border: "hidden",
        borderRadius: "10px",
        gap: "150px",
        padding: "10px",
      }}
    ></Box>
  );
}
