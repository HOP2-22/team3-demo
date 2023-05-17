import { Box, Button, Stack, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRouter } from "next/router";

const gif =
  "https://res.cloudinary.com/urlan/image/upload/v1678349701/geru-store/urban_nomad/ezgif.com-gif-maker_4_d6jzrh.gif";

const avatar =
  "https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg";

export default function Face() {
  const [text] = useTypewriter({
    words: ["Home", "Back"],
    loop: {},
  });

  const router = useRouter();

  return (
    <Box sx={{ backgroundColor: "#090520", padding: "24px" }}>
      <Box sx={styles.position}>
        <Stack
          flex={2.5}
          sx={{
            padding: {
              xs: "0px",
              sm: "0px",
              md: "40px",
              lg: "40px",
              xl: "40px",
            },
            // display: {
            //   xs: "flex",
            //   sm: "flex",
            //   md: "flex",
            //   lg: "flex",
            //   xl: "flex",
            // },
            // flexDirection: {
            //   xs: "column",
            //   sm: "column",
            //   md: "column",
            //   lg: "column",
            //   xl: "column",
            // },
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
          }}
        >
          <img
            src={
              "https://i.pinimg.com/originals/3f/2c/15/3f2c15069fd4055ed4f8551f3207010c.gif"
            }
            style={styles.image}
            alt="asdf"
          />
        </Stack>
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
              <p>Хамтарсан уран бүтээлчид:</p>
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
    color: "white",
  },
};
