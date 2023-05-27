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
  const { push, query } = useRouter();
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
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProps();
  }, [query]);

  return (
    <div>
      <div className="">
        <input type="checkbox" onChange={approved} />
        <p>approved</p>
      </div>
      <div className="">
        <input type="checkbox" onChange={pending} />
        <p>pending</p>
      </div>
    </div>
  );
}
