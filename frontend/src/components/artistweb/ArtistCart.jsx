import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

export default function ArtistCart(props) {
  const { image } = props;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: {
          xs: "40px",
          sm: "20px",
          md: "20px",
          lg: "20px",
          xl: "20px",
        },
        width: {
          xs: "100%",
          sm: "45%",
          md: "30%",
          lg: "30%",
          xl: "30%",
        },
      }}>
      <Box>
        <Box>
          <CardMedia
            image={image}
            sx={{
              width: "100%",
              height: {
                xs: "100px",
                sm: "100px",
                md: "100px",
                lg: "100px",
                xl: "100px",
              },
            }}
          />
          <Box
            sx={{
              display: "flex ",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-50px",
            }}>
            <Box sx={{ border: "5px solid white", borderRadius: "80px" }}>
              <CardMedia
                image={image}
                sx={{ width: "80px", height: "80px", borderRadius: "80px" }}
              />
            </Box>
            <Box
              sx={{
                dispal: "flex",
                flexDirection: "column ",
                marginTop: "20px",
              }}>
              <Typography>ArtisName</Typography>
              <Typography>ArtistType</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", marginTop: "20px" }}>
          <CardMedia image={image} sx={{ width: "33%", height: "150px" }} />
          <CardMedia image={image} sx={{ width: "33%", height: "150px" }} />
          <CardMedia image={image} sx={{ width: "33%", height: "150px" }} />
        </Box>
      </Box>
    </Box>
  );
}
