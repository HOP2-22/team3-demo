import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Favorite from "@mui/icons-material/Favorite";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";

function MerchComponent() {
  const [isShown, setIsShown] = useState(false);

  // const styles = (theme) => ({
  //   Box: {
  //     padding: theme.spacing(1),
  //     [theme.breakpoints.down("md")]: {
  //       backgroundColor: theme.palette.secondary.main,
  //     },
  //     [theme.breakpoints.up("md")]: {
  //       backgroundColor: theme.palette.primary.main,
  //     },
  //     [theme.breakpoints.up("lg")]: {
  //       backgroundColor: green[500],
  //     },
  //   },
  // });

  return (
    <Card sx={{ maxWidth: "453px" }}>
      <Box
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <CardMedia
          component="img"
          width="453px"
          image="https://res.cloudinary.com/urlan/image/upload/c_scale/q_60/f_jpg/v1/filemanager/i462uld0c6cmxc3r8noi"
          alt="Merch Photo"
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "30px",
            }}
          >
            <Typography variant="h9" component="div" color="text.secondary">
              T-Shirt
            </Typography>
            {isShown && (
              <IconButton
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <Favorite />
              </IconButton>
            )}
          </Box>
          <Typography variant="h7" sx={{ fontWeight: "bold" }}>
            INNER ESSENCE OF MANKIND
          </Typography>
          <Typography
            sx={{
              width: "100%",
              height: "1px",
              background: "black",
            }}
          >
            80K₮
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MerchComponent;
