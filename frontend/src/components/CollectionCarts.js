import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Avatar } from "@mui/material";

export default function Face(props) {
  const { Image } = props;

  return (
    <Box
      sx={{
        // width: "30%",
        // height: "90%",
        width: {
          xs: "30%",
          sm: "30%",
          md: "30%",
          lg: "30%",
          xl: "30%",
        },
        height: {
          xs: "90%",
          sm: "90%",
          md: "90%",
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
