import { Box, Button, Stack, Typography } from "@mui/material";
import { Avatar } from "@mui/material";

const gif =
  "https://res.cloudinary.com/urlan/image/upload/v1678349701/geru-store/urban_nomad/ezgif.com-gif-maker_4_d6jzrh.gif";

const avatar =
  "https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg";

export default function Face() {
  return (
    <Box sx={{ backgroundColor: "#edf2f4", padding: "24px" }}>
      <Box sx={styles.position}>
        <Stack flex={2.5} sx={styles.res}>
          <img src={gif} style={styles.image} alt="asdf" />
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
          <Box sx={styles.paddingtop} variant="text">
            <Box sx={styles.padding}>
              <p>Хамтарсан уран бүтээлчид:</p>
              <Box
                sx={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
              >
                <Avatar src={avatar} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
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
              Илүү Ихийг.
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
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
  },
  res: {
    padding: {
      xs: "0px",
      sm: "0px",
      md: "40px",
      lg: "40px",
      xl: "40px",
    },
    marginTop: {
      xs: "60px",
      sm: "60px",
      md: "0px",
      lg: "0px",
      xl: "0px",
    },
    marginBottom: {
      xs: "60px",
      sm: "60px",
      md: "0px",
      lg: "0px",
      xl: "0px",
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
