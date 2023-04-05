import { Typography, Box, Stack, } from "@mui/material";

const mapp = [1, 2, 3];

const artistIcon =
  "https://res.cloudinary.com/urlan/image/upload/v1677916165/geru-store/beernight/Group_13_2_pcuojj.jpg";

const itemImg =
  "https://res.cloudinary.com/urlan/image/upload/a_0,e_distort:0:0:232:3:232:327:0:329,g_north_west,h_329,o_100,u_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdXJsYW4vaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsaF80MTMsd18yNTAvZ19ub3J0aF93ZXN0LGhfMzkyLGxfZmlsZW1hbmFnZXI6cXE1c3lsNWF3ajZ0dHZtZ2I5dmosd18yNTAseF8wLHlfMjEvY19jcm9wLGdfbm9ydGhfd2VzdCxoXzMyOSx3XzIzMyx4XzE3LHlfMC92MS9tb2NrdXAvYmFja2dyb3VuZF8yX2Fndml6Yw,x_424,y_427/g_north_west,h_1080,u_mockup:sweatshirt:Rectangle_316_1_obdvrk,w_1080,x_0/c_crop,g_north_west,h_1080,w_1080,x_0,y_0/f_jpg/v1/mockup/Hoodie/back_wiea4a.jpg";

const Item = () => {
  return (
    <Box bgcolor="red">
      <img src={itemImg} style={styles.itemimg} />
      <Stack direction="row" justifyContent="space-between">
        <Typography>price</Typography>
        <Typography>Frigile</Typography>
      </Stack>
    </Box>
  );
};

const ArtistDetail = () => {
  return (
    <Box minWidth={300} pr={5}>
      <img
        src={artistIcon}
        alt="artist icon"
        width={{ xl: 40, lg: 30, md: 20, xs: 10 }}
        height={{
          xl: 40,
          lg: 30,
          md: 20,
          xs: 10,
        }}
      />
      <Typography variant="h2">Fragile</Typography>
      <Typography variant="body1">
        Fragile is our very first game that reveals the story of a 10-year-old
        girl who was abducted and brought to a
      </Typography>
    </Box>
  );
};

const bgImg =
  "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ys5jqwvg6pgtpacb5kqb.webp";

export const Collection = () => {
  return (
    <Stack direction="row" padding={10} position="relative" sx={styles.img}>
      <Box sx={styles.backimg}></Box>
      <ArtistDetail />
      <Stack direction="row" gap={2} sx={styles.img}>
        <Item />
        <Item />
        <Item />
      </Stack>
    </Stack>
  );
};

const styles = {
  backimg: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bgImg})`,
    position: "absolute",
    backdropFilter: "blur(10px)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: -1,
  },
  img: {
    display: {
      xl: "flex",
      lg: "block",
      md: "block",
      xs: "block",
    },
    padding: 10,
    position: "relative",
    flexDirection: "column",
  },
  itemimg: {
    width: { md: "25vh" },
    height: { md: "25vh" },
  },
};