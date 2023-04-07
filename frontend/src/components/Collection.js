import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Avatar } from "@mui/material";
import Carts from "../components/CollectionCarts";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Face(props) {
  const { Image } = props;
  const [data, setData] = useState();
  const [count, setCount] = useState();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const instance = Axios.create({
    baseURL: "https://dummyapi.io/data/v1/post/",
    headers: {
      "app-id": "636e0d6642c1f665f684f489",
    },
  });

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const res = await instance.get("/");
        setData([res.data.data][0].slice(0, 3));
        setCount([res.data.data][0].length);
        console.log(count);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProps();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "450px",
        display: "flex",
        marginBottom: "20px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(https://res.cloudinary.com/urlan/image/upload/v1677914253/geru-store/beernight/Screenshot_2023-03-04_at_15.13_1_1_1_1_gqsnhc.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ padding: "40px", width: "25%" }}>
        <Box>
          <CardMedia
            image={Image}
            sx={{
              width: "120px",
              height: {
                xs: "120px",
                sm: "120px",
                md: "120px",
                lg: "120px",
                xl: "120px",
              },
              border: "hiden",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "28px",
              lineHeight: "1em",
              color: "rgb(255, 255, 255)",
            }}
          >
            Title
          </Box>
          <Box
            sx={{
              color: "rgb(255, 255, 255)",
              fontWeight: "200",
            }}
          >
            Fragile is our very first game that reveals the story of a
            10-year-old girl who was abducted and brought to a ...
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "48px",
              flexDirection: "row",
              color: "black",
              justifyContent: "flex-start",
            }}
            variant="text"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                cursor: "pointer",
              }}
            >
              <Box>
                <Avatar src="https://res.cloudinary.com/urlan/image/upload/v1675159396/geru-store/khongorzul/328598489_1163549884324212_1668282332485989101_n_1_1_wduowu.jpg" />
              </Box>
              <Box sx={{ color: "rgb(255, 255, 255)" }}>@Studio</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "75%",
          padding: "40px",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {data?.map((card, index) => (
          <Carts key={index} Image={card.image} />
        ))}
      </Box>
    </Box>
  );
}
