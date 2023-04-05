import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import Collection from "../components/Collection";

export default function Face() {
  return (
    <Box sx={{ backgroundColor: "#edf2f4" }}>
      <Box sx={styles.position}>
        <Stack flex={2.5} sx={{ padding: "40px" }}>
          <img
            src={
              "https://res.cloudinary.com/urlan/image/upload/v1678349701/geru-store/urban_nomad/ezgif.com-gif-maker_4_d6jzrh.gif"
            }
            style={styles.image}
            alt="asdf"
          />
        </Stack>
        <Stack sx={styles.texts}>
          <Typography
            sx={{
              fontSize: "72px",
              fontFamily: "PT Sans Narrow",
              lineHeight: "0.9em",
              overflow: "hidden",
              fontWeight: "bold",
            }}
          >
            ИХ ХОТЫН НҮҮДЭЛЧИД
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,.7)" }}>
            Хаана ч , хэзээ ч , хэнтэй ч ...
          </Typography>
          <Box sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
            {/* <Button
              sx={{
                fontFamily: "Manrope",
                width: "100%",
                padding: "12px",
                backgroundColor: "#1b1927",
              }}
              variant="contained"
            >
              Илүү Ихийг
            </Button> */}
            <Button
              sx={{
                fontFamily: "Manrope",
                width: "100%",
                padding: "12px",
                backgroundColor: "White",
                color: "black",
              }}
              variant="contained"
            >
              Илүү Ихийг
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

const styles = {
  position: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    direction: {
      lg: "row",
      md: "column",
    },
  },
  image: {
    padding: "16px",
    backgroundColor: "White",
  },
  texts: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
  },
  little: {
    height: "60px",
    fontSize: "16px",
    fontFamily: "Manrope",
  },
  paddingtop: {
    display: "flex",
    alignItems: "center",
    paddingTop: "24px",
    paddingBottom: "24px",
    flexDirection: "row",
    color: "black",
    justifyContent: "flex-start",
  },
  padding: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    cursor: "pointer",
  },
};
