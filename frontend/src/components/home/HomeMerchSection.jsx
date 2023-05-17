import Box from "@mui/material/Box";

import MerchCard from "../merch/MerchCard";

const HomeMerchSection = ({ products }) => {
  return (
    <Box>
      <Box sx={{ width: "100%" }}>
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
            <Box
              sx={{
                fontSize: {
                  xs: "70px",
                  sm: "85px",
                  md: "85px",
                  lg: "90px",
                  xl: "96px",
                },
                color: "white",
                fontWeight: "bold",
              }}
            >
              MERCH
            </Box>
            <Box
              sx={{
                color: "rgb(205, 30, 59)",
                fontWeight: "bold",
                fontSize: {
                  xs: "25px",
                  sm: "30px",
                  md: "30px",
                  lg: "30px",
                  xl: "36px",
                },
              }}
            >
              {products?.length || 0}
            </Box>
          </Box>
          <Box
            sx={{ alignSelf: "self-start", fontWeight: "300", color: "white" }}
          >
            Илүү мэдрэмжийг. Илүү хялбараар
          </Box>
          <Box
            sx={{
              paddingTop: "16px",
              paddingBottom: "16px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "1px",
                bgcolor: "white",
                boxSizing: "border-box",
              }}
            ></Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                {products?.map((product, index) => {
                  return <MerchCard data={product} key={index} />;
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeMerchSection;
