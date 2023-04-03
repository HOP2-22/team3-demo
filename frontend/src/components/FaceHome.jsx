import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Avatar } from "@mui/material";

const Partner = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <p>Хамтарсан уран бүтээлчид:</p>
      <Avatar src="https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg" />
    </Stack>
  );
};

export default function Face() {
  return (
    <Container maxWidth="xl" style={{ padding: "75px" }}>
      <Box sx={styles.position}>
        <Stack flex={2.5}>
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
            }}
          >
            ИХ ХОТЫН НҮҮДЭЛЧИД
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,.7)!important" }}>
            Хаана Хэзээ ч Хэнтэй ч
          </Typography>
          <Partner />
          <Button
            sx={{ fontFamily: "Manrope", color: "#000007", gap: 5 }}
            variant="contained"
            color="inherit"
          >
            Илүү Ихийг
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

const styles = {
  position: {
    display: "flex",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    direction: {
      lg: "row",
      md: "column",
    },
  },
  image: {
    width: "70vh",
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
};
