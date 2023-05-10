import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function Face(props) {
  const { Image } = props;

  return (
    <Box
      sx={{
        // width: "30%",
        // height: "90%",
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
        height: {
          xs: "90%",
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "100%",
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
        {/* <Image
        width={100}
        height={100}
        src={Imag}
        style={{ paddingBottom: "10px", width: "100%", height: "100%" }}
      /> */}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "15%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: {
            xs: "0px",
            sm: "0px",
            md: "10px",
            lg: "12px",
            xl: "12px",
          },
          gap: "20px",
        }}
      >
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "10px",
              sm: "10px",
              md: "20px",
              lg: "20px",
              xl: "20px",
            },
          }}
        >
          price
        </Box>
        <Box
          sx={{
            fontSize: {
              xs: "10px",
              sm: "10px",
              md: "20px",
              lg: "20px",
              xl: "20px",
            },
          }}
        >
          @Artist
        </Box>
      </Box>
    </Box>
  );
}
