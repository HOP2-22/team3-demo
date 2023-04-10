import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Favorite from "@mui/icons-material/Favorite";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, IconButton } from "@mui/material";

function MerchComponent() {
  const [isShown, setIsShown] = useState(false);

  return (
    <Card sx={{ maxWidth: "453px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="453px"
          image="https://res.cloudinary.com/urlan/image/upload/c_scale/q_60/f_jpg/v1/filemanager/i462uld0c6cmxc3r8noi"
          alt="Merch Photo"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        <IconButton
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
          }}
        >
          <Favorite />
        </IconButton>
        <CardContent sx={{ height: "100px" }}>
          <Typography variant="h9" component="div" color="text.secondary">
            T-Shirt
          </Typography>
          <Typography variant="h7" sx={{ fontWeight: "bold" }}>
            INNER ESSENCE OF MANKIND
          </Typography>
          <Typography
            sx={{ width: "100%", height: "1px", background: "black" }}
          >
            80K₮
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MerchComponent;
