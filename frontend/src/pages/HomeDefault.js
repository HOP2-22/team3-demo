import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import Collection from "../components/Collection";
import FaceHome from "../components/FaceHome";

export default function Face() {
  return (
    <Box sx={{ backgroundColor: "#edf2f4" }}>
      <Container maxWidth="xl">
        <FaceHome/>
        <Box sx={{ padding: "40px" }}></Box>
        <Collection/>
      </Container>
    </Box>
  );
}