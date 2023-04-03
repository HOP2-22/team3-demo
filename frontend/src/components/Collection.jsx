import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Avatar } from "@mui/material";

const Partner = () => {
  return (
    // <Stack sx={styles.paddingtop}>
    //   <Box sx={styles.padding}>
    //     <p>Хамтарсан уран бүтээлчид:</p>
    //     <Box sx={{ paddingLeft: "16px", paddingRight: "16px" }}>
    //       <Avatar src="https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg" />
    //     </Box>
    //   </Box>
    // </Stack>
    <Box sx={styles.paddingtop} variant="text">
      <Box sx={styles.padding}>
        <p>Хамтарсан уран бүтээлчид:</p>
        <Box sx={{ paddingLeft: "16px", paddingRight: "16px" }}>
          <Avatar src="https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg" />
        </Box>
      </Box>
    </Box>
  );
};

export default function Face() {
  return (
    <Container
      maxWidth="xl"
      style={{ padding: "24px", backgroundColor: "hsla(0,0%,100%,.7)" }}
    >
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
          <Partner />
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
                backgroundColor: "#1b1927",
              }}
              variant="contained"
            >
              Илүү Ихийг
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
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
