import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Avatar } from "@mui/material";

export default function Face(props) {
  const { Image } = props;

  return (
    <Box
      sx={{
        width: "30%",
        height: "90%",
        width: {
          xs: "30%",
          sm: "30%",
          md: "30%",
          lg: "30%",
          xl: "30%",
        },
        height: {
          xs: "70%",
          sm: "70%",
          md: "75%",
          lg: "90%",
          xl: "90%",
        },
        backgroundColor: "white",
      }}
    >
      <Box sx={{ width: "100%", height: "85%" }}>
        <CardMedia
          image={Image}
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "15%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <Box sx={{ fontWeight: "bold" }}>price</Box>
        <Box>@Artist</Box>
      </Box>
    </Box>
  );
}
