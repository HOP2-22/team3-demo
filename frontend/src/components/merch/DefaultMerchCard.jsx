import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import Favorite from "@mui/icons-material/Favorite";

const MerchComponent = () => {
  const [isShown, setIsShown] = useState(false);

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
};

export default MerchComponent;
