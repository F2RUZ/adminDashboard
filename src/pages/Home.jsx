import { Logout } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

//import icon

import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import CollectionsIcon from "@mui/icons-material/Collections";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SettingsIcon from "@mui/icons-material/Settings";
import Navbar from "../components/Navbar/Navbar";
const Home = () => {
  const navigate = useNavigate();
  const logeOut = () => {
    localStorage.removeItem("tokenxon");
    navigate("/");
  };
  return (
    <>
      <Navbar />

      <Typography
        display={"flex"}
        alignItems={"start"}
        gap={"80px"}
        component={"div"}
      >
        <Typography
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ minHeight: "89vh" }}
          bgcolor={"green"}
          component={"div"}
          padding={"30px "}
        >
          <Typography
            component={"div"}
            display={"flex"}
            flexDirection={"column"}
            gap={"30px"}
          >
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <AccountCircleIcon />
            </Typography>
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <VerticalSplitIcon />
            </Typography>{" "}
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <AutoAwesomeMosaicIcon />
            </Typography>{" "}
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <CollectionsIcon />
            </Typography>{" "}
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <SubscriptionsIcon />
            </Typography>{" "}
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <CloudDownloadIcon />
            </Typography>
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <SettingsIcon />
            </Typography>
          </Typography>

          <Button
            onClick={logeOut}
            size="small"
            variant="contained"
            color="error"
          >
            <Logout />
          </Button>
        </Typography>

        <Typography component={"div"}>
          <Typography
            component={"div"}
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
          >
            <AccountCircleIcon color="success" />
            <Typography
              textTransform={"uppercase"}
              color={"green"}
              fontWeight={"800"}
              variant="h5"
            >
              Mijozlar
            </Typography>
          </Typography>

          <div>bu yerda katta verska bor db tushunamiz</div>
        </Typography>
      </Typography>
    </>
  );
};

export default Home;
