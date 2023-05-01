import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Avatar } from "@mui/material";

export default function Face(props) {
  const { Image } = props;

  return (
      <Box
        sx={{
          width: "100%",
          height: "450px",
          border: "hidden",
          borderRadius: "20px",
          display: "flex",
          marginBottom: "20px",
          // backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // filter: "blur(8px)",
          // backgroundColor: "rgba(0, 0, 0, 0.2)",
          // backdropFilter: "blur(8px)",
          // webkit-backdrop-filter: blur(20px)
          // WebkitBackdropFilter: "blur(20px",
          // backdropFilter: blur(20)
          // WebkitFilter: "blur(20px",
        }}
      >
        <CardMedia
        image={Image}
        sx={{
          width: "93%",
          height: "450px",
          position: "absolute",
          zIndex: "1",
          filter: "blur(20px)",
          border: "hidden",
          borderRadius: "20px",
          WebkitFilter: "blur(10px)",
        }}
      ></CardMedia>
        <Box sx={{ padding: "40px", width: "25%", zIndex: "2" }}>
          <Box>
            <CardMedia
              image={Image}
              sx={{
                width: "100px",
                height: {
                  xs: "100px",
                  sm: "100px",
                  md: "100px",
                  lg: "100px",
                  xl: "100px",
                },
                border: "hiden",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "28px",
                lineHeight: "1em",
                color: "rgb(255, 255, 255)",
              }}
            >
              Title
            </Box>
            <Box
              sx={{
                color: "rgb(255, 255, 255)",
                fontWeight: "200",
              }}
            >
              Fragile is our very first game that reveals the story of a
              10-year-old girl who was abducted and brought to a ...
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // paddingTop: "24px",
                paddingBottom: "48px",
                flexDirection: "row",
                color: "black",
                justifyContent: "flex-start",
              }}
              variant="text"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  cursor: "pointer",
                }}
              >
                <Box>
                  <Avatar src="https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg" />
                </Box>
                <Box sx={{ color: "rgb(255, 255, 255)" }}>@Studio</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "75%", padding: "40px", zIndex: "2" }}></Box>
      </Box>
  );
}