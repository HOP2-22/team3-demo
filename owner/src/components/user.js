import { Box } from "@mui/material";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function User() {
  return (
    <Box
      sx={{
        backgroundColor: "#edf2f4",
        display: "flex",
        border: "hidden",
        borderRadius: "10px",
        // gap: "150px",
        padding: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <Checkbox {...label} defaultChecked color="default" />
      <p style={{ color: "black", width: "100px" }}>Id</p>
      <p style={{ color: "black", width: "100px" }}>Date</p>
      <p style={{ color: "black", width: "100px" }}>Name</p>
      <p style={{ color: "black", width: "100px" }}>Name</p>
      <p style={{ color: "black", width: "100px" }}>Count</p>
    </Box>
  );
}
