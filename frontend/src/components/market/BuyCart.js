import { Container, Box, Typography, Button, Stack, Grid } from "@mui/material";

export default function BasketCard({ price }) {
  return (
    <Box
      sx={{
        backgroundColor: "#090520",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "20%",
        padding: "15px",
        height: "180px",
        border: "hidden",
        borderRadius: "20px",
      }}
    >
      <Stack
        sx={{
          fontFamily: "PT Sans Narrow",
          fontSize: "30px",
          alignItems: "center",
          fontWeight: "bold",
          color: "white",
        }}
      >
        ТАНЫ ТӨЛБӨР
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "lighter", color: "white" }}>
          Нийт{" "}
        </Typography>
        <Typography sx={{ color: "white" }}>{price}</Typography>
      </Box>
      <button
        style={{
          backgroundColor: "#9b1027",
          border: "hidden",
          borderRadius: "5px",
          padding: "8px",
          color: "white",
        }}
      >
        Худалдан авах
      </button>
    </Box>
  );
}
