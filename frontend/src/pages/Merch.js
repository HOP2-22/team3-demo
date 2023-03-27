import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Merch() {
  return (
    <Box sx={{ marginTop: "70px" }}>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <Box sx={{ display: "flex", alignSelf: "self-start" }}>
              <Box sx={{ fontSize: "96px", fontWeight: "bold", }}>MERCH</Box>
              <Box sx={{ color: "rgb(205, 30, 59)", fontWeight: "bold", fontSize: "36px" }}>
                751
              </Box>
            </Box>
            <Box sx={{ alignSelf: "self-start", fontWeight:"300" }}>
              Илүү мэдрэмжийг. Илүү хялбараар
            </Box>
            <Box sx={{ paddingTop: "16px", paddingBottom: "16px", width:"100%", boxSizing:"border-box" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  bgcolor: "black",
                  boxSizing:"border-box"
                }}
              ></Box>
            </Box>
          </Box>
          <Box sx={{display:"flex"}}>
            <Box sx={{flexWrap:"wrap", display:"flex", flexDirection:"row", width:"70%", border:"1px solid red"}}>
                <Box></Box>
            </Box>
            <Box sx={{paddingLeft:"40px", paddingRight:"40px", width:"30%", border:"1px solid blue"}}>
                <Box sx={{padding:"8px"}}>Төрлөөр шүүх</Box>
                <Box></Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
