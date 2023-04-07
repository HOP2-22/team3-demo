import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

export default function ArtistCart(props) {
  const { image } = props;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box
      sx={{
        backgroundColor: "red",
        width: {
          xs: "45%",
          sm: "45%",
          md: "30%",
          lg: "30%",
          xl: "30%",
        },
      }}>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: {
            xs: "180px",
            sm: "280px",
            md: "337px",
            lg: "337px",
            xl: "337px",
          },
        }}>
        <Box sx={{ display: "flex" }}>
          <CardMedia
            image={image}
            sx={{
              width: "33%",
              height: {
                xs: "90px",
                sm: "140px",
                md: "165px",
                lg: "165px",
                xl: "165px",
              },
            }}
          />
          <CardMedia
            image={image}
            sx={{
              width: "34%",
              height: {
                xs: "90px",
                sm: "140px",
                md: "165px",
                lg: "165px",
                xl: "165px",
              },
            }}
          />
          <CardMedia
            image={image}
            sx={{
              width: "33%",
              height: {
                xs: "90px",
                sm: "140px",
                md: "165px",
                lg: "165px",
                xl: "165px",
              },
            }}
          />
        </Box>
        <Box>
          <CardMedia
            image={image}
            sx={{
              width: "22%",
              height: {
                xs: "60px",
                sm: "85px",
                md: "99px",
                lg: "99px",
                xl: "99px",
              },
            }}
          />
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
}
