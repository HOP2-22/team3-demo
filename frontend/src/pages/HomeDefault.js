import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Collection from "../components/collection/Collection";
import CollectionV2 from "../components/collection/CollectionV2";
import FaceHome from "../components/FaceHome";
import { useEffect, useState } from "react";
import Axios from "axios";
import HomeMerch from "../components/merch/HomeMerch";

export default function Face() {
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
        setData([res.data.data][0].slice(0, 6));
        setCount([res.data.data][0].length);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProps();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#090520", width: "100%", marginTop: "70px" }}>
      <Container maxWidth="xl">
        <FaceHome />
        <HomeMerch />
      </Container>
    </Box>
  );
}
