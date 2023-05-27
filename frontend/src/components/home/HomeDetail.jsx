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
      {/* <div>
        <p>Бидэнтэй хамтран ажиллах уран бүтээлчийг бид хайж байна.</p>
      </div> */}

      <Box>
        <p className="text-white text-[25px] pt-[20px]">
          Бидэнтэй хамтран ажиллах уран бүтээлчийг2 бид хайж байна.
        </p>
        <Box
          sx={{
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        ></Box>
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
