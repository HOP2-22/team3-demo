import React from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomeDetail = () => {
  const [text] = useTypewriter({
    words: ["Home", "Back"],
    loop: {},
  });

  return (
    <Stack sx={styles.texts}>
      <Box
        sx={{
          fontSize: {
            xs: "50px",
            sm: "55px",
            md: "55px",
            lg: "72px",
            xl: "72px",
            color: "white",
          },
          fontFamily: "PT Sans Narrow",
          lineHeight: "0.9em",
          overflow: "hidden",
          fontWeight: "bold",
        }}
      >
        Welcome&nbsp;{text}
        <span style={{ color: "gray" }}>
          <Cursor />
        </span>
      </Box>
      <Typography sx={{ color: "white" }}>
        Хаана ч , хэзээ ч , хэнтэй ч ...
      </Typography>
      <Box sx={styles.paddingtop} variant="text">
        <Box sx={styles.padding}>
          <Typography>Хамтарсан уран бүтээлчид:</Typography>
          <Box
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Avatar src="https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <Button
          sx={{
            width: "100%",
            padding: "12px",
            color: "white",
            borderRadius: "10px",
          }}
          color="inherit"
          variant="outlined"
          onClick={() => {
            router.push("/ArtWork");
          }}
        >
          Xолбогдох
        </Button>
      </Box>
    </Stack>
  );
};

const styles = {
  texts: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
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
    color: "white",
  },

  res: {
    padding: {
      xs: "0px",
      sm: "0px",
      md: "40px",
      lg: "40px",
      xl: "40px",
    },
  },
};

export default HomeDetail;
