import { Box } from "@mui/material";
import Image from "next/image";
import image from "../images/cover-photo.gif";

export default function CreateProduct() {
  return (
    <Box
      sx={{
        backgroundColor: "#090520",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          paddingLeft: "60px",
          paddingRight: "60px",
          width: "100%",
          paddingTop: "75px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "60px",
            paddingTop: "50px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
            borderBottom: "1px dashed #382B76",
          }}
        >
          <p style={{ color: "white", fontSize: "25px", cursor: "pointer" }}>
            Aproved
          </p>
          <p style={{ color: "white", fontSize: "25px", cursor: "pointer" }}>
            Pending
          </p>
          <p style={{ color: "white", fontSize: "25px", cursor: "pointer" }}>
            Order
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "50px",
            paddingLeft: "0",
            paddingRight: "0",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              width: "400px",
              border: "2px solid #382B76",
              borderRadius: "8px",
              backgroundColor: "#0e0638",
              padding: "25px",
            }}
          >
            <Image
              style={{
                border: "hidden",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              width={400}
              height={400}
              src={image}
              alt="img"
            />
            <p
              style={{
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "100",
                textAlign: "center",
              }}
            >
              INNER ESSENCE OF MANKIND
            </p>
          </Box>
          {/* Mappppppp */}
          <Box
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              width: "400px",
              border: "2px solid #382B76",
              borderRadius: "8px",
              backgroundColor: "#0e0638",
              padding: "25px",
            }}
          >
            <Image
              style={{
                border: "hidden",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              width={400}
              height={400}
              src={image}
              alt="img"
            />
            <p
              style={{
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "100",
                textAlign: "center",
              }}
            >
              INNER ESSENCE OF MANKIND
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
