import { Box } from "@mui/material";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";
import BeenhereTwoToneIcon from "@mui/icons-material/BeenhereTwoTone";
import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";
import BookmarkBorderTwoToneIcon from "@mui/icons-material/BookmarkBorderTwoTone";
import Image from "next/image";
import image from "../images/cover-photo.gif";
import User from "../components/user";

export default function Dash() {
  const [data, setData] = useState();

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
        setData([res.data.data][0].slice(0, 20));
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProps();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#edf2f4",
        width: "100%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "15%",
          height: "100%",
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingBottom: "50px",
          paddingTop: "10%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "10px",
            height: "50px",
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <BeenhereTwoToneIcon sx={{ color: "black" }}></BeenhereTwoToneIcon>
          <Box sx={{ color: "black" }}>Approved</Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "10px",
            height: "50px",
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <PendingActionsTwoToneIcon
            sx={{ color: "black" }}
          ></PendingActionsTwoToneIcon>
          <Box sx={{ color: "black" }}>Approved</Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "10px",
            height: "50px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <BookmarkBorderTwoToneIcon
            sx={{ color: "black" }}
          ></BookmarkBorderTwoToneIcon>
          <Box sx={{ color: "black" }}>Approved</Box>
        </Box>
      </Box>
      <Box sx={{ width: "85%", height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "15%",
            padding: "50px",
            paddingLeft: "0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "black", fontSize: "30px" }}>Pending board</p>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                backgroundColor: "white",
                border: "1.5px solid #ADA7A7",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NotificationsActiveTwoToneIcon
                sx={{ color: "black", fontSize: "30px" }}
              ></NotificationsActiveTwoToneIcon>
            </Box>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                backgroundColor: "white",
                border: "1.5px solid #ADA7A7",
                borderRadius: "8px",
              }}
            >
              <Image
                style={{ border: "hidden", borderRadius: "8px" }}
                width={60}
                height={60}
                src={image}
                alt="img"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "85%",
            paddingRight: "50px",
            paddingBottom: "50px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              border: "1.5px solid #ADA7A7",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#edf2f4",
                width: "100%",
                display: "flex",
                border: "hidden",
                borderRadius: "10px",
                gap: "150px",
                paddingLeft: "160px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <p style={{ color: "black", width:"100px" }}>Artist Id</p>
              <p style={{ color: "black", width:"100px" }}>Date</p>
              <p style={{ color: "black", width:"100px" }}>Artist name</p>
              <p style={{ color: "black", width:"100px" }}>Product name</p>
              <p style={{ color: "black", width:"100px" }}>Count</p>
            </Box>
            {data?.map((card, index) => (
              <User key={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
