import { Box, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";
import BeenhereTwoToneIcon from "@mui/icons-material/BeenhereTwoTone";
import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";
import BookmarkBorderTwoToneIcon from "@mui/icons-material/BookmarkBorderTwoTone";
import Image from "next/image";
import image from "../images/cover-photo.gif";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useRouter } from "next/router";

export default function Dash() {
  const isapprove = async ({ dataa }) => {
    console.log(dataa);
    const neww = "approved";
    const { status } = axios.patch(
      `http://localhost:7070/product/status/${dataa._id}`,
      {
        newStatus: neww,
      }
    );
  };

  const { push, query } = useRouter();

  const [data, setData] = useState();

  console.log(query);
  const approved = (event) => {
    if (event.target.checked) {
      push({
        query: {
          status: "approved",
        },
      });
    } else {
      delete query.status;
      push({ query: query });
    }
  };
  const pending = (event) => {
    if (event.target.checked) {
      push({
        query: {
          status: "pending",
        },
      });
    } else {
      delete query.type_of;
      push({ query: query });
    }
  };

  const instance = axios.create({
    baseURL: `http://localhost:7070/product/`,
  });
  useEffect(() => {
    const fetchProps = async () => {
      try {
        const res = await instance?.get(
          `/?${query.status ? `status=${query.status}` : ``}`
        );
        console.log(res.data.data);
        setData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProps();
  }, [query]);

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#edf2f4",
          width: "100%",
          height: "100vh",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        <Container maxWidth="xl" sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: "15%",
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "15%",
                padding: {
                  xs: "10px",
                  sm: "50px",
                  md: "50px",
                  lg: "50px",
                  xl: "50px",
                },
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingBottom: "50px",
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
                  cursor: "pointer",
                  border: "5px solid #edf2f4",
                }}
              >
                <BeenhereTwoToneIcon sx={{ color: "black" }} />
                <Box sx={{ color: "black" }}>
                  Approved
                  <div className="">
                    <input type="checkbox" onChange={approved} />
                  </div>
                </Box>
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
                  cursor: "pointer",
                  border: "5px solid #edf2f4",
                }}
              >
                <PendingActionsTwoToneIcon sx={{ color: "black" }} />
                <Box sx={{ color: "black" }}>
                  Pending{" "}
                  <div className="">
                    <input type="checkbox" onChange={pending} />
                  </div>
                </Box>
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
                  cursor: "pointer",
                  border: "5px solid #edf2f4",
                }}
                onClick={() => filterHandler("orders")}
              >
                <BookmarkBorderTwoToneIcon
                  sx={{ color: "black" }}
                ></BookmarkBorderTwoToneIcon>
                <Box sx={{ color: "black" }}> Orders</Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "85%",
                lg: "85%",
                xl: "85%",
              },
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "15%",
                padding: {
                  xs: "0px",
                  sm: "0px",
                  md: "50px",
                  lg: "50px",
                  xl: "50px",
                },
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
                    cursor: "pointer",
                  }}
                >
                  <NotificationsActiveTwoToneIcon
                    sx={{
                      color: "black",
                      fontSize: "30px",
                    }}
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
                    style={{
                      border: "hidden",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
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
                paddingRight: {
                  xs: "0px",
                  sm: "0px",
                  md: "50px",
                  lg: "50px",
                  xl: "50px",
                },
                paddingBottom: {
                  xs: "0px",
                  sm: "0px",
                  md: "50px",
                  lg: "50px",
                  xl: "50px",
                },
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
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#edf2f4",
                    width: "100%",
                    display: "flex",
                    border: "hidden",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: "40px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingRight: "40px",
                    border: "hidden",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <p style={{ color: "black", width: "100px" }}>Artist Id</p>
                  <p style={{ color: "black", width: "100px" }}>Date</p>
                  <p style={{ color: "black", width: "100px" }}>Artist name</p>
                  <p style={{ color: "black", width: "120px" }}>Product name</p>
                  <p style={{ color: "black", width: "100px" }}>Price</p>
                  <p style={{ color: "black", width: "100px" }}>Status</p>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    overflowY: "scroll",
                    gap: "10px",
                  }}
                >
                  {data?.map((dataa, index) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor: "#edf2f4",
                        display: "flex",
                        border: "hidden",
                        borderRadius: "10px",
                        // gap: "150px",
                        padding: "10px",
                        marginLeft: "30px",
                        marginRight: "30px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <p style={{ color: "black", width: "100px" }}>
                        {dataa?.owner?.username}
                      </p>
                      <p style={{ color: "black", width: "100px" }}>
                        {dataa?.Date?.slice(0, 10)}
                      </p>
                      <p style={{ color: "black", width: "100px" }}>
                        {dataa?.ownerName}
                      </p>
                      <p style={{ color: "black", width: "100px" }}>
                        {dataa?.productName}
                      </p>
                      <p style={{ color: "black", width: "100px" }}>
                        {dataa?.price}
                      </p>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          onClick={() => isapprove({ dataa })}
                          checked={dataa.status == "approved" ? true : false}
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
