import { Container, Box, Typography, Button, Stack, Grid } from "@mui/material";

export default function BasketCard({ price }) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width:"20%",
        padding:"15px",
        height:"180px",
      }}
    >
      <Stack
        sx={{
          fontFamily: "PT Sans Narrow",
          fontSize: "30px",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        ТАНЫ ТӨЛБӨР
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop:"10px", paddingBottom:"10px" }}>
        <Typography>Нийт </Typography>
        <Typography>{price}</Typography>
      </Box>
      <button style={{backgroundColor:"red", border:"hidden", borderRadius:"5px", padding:"8px", }}>Худалдан авах</button>
    </Box>
  );
}
