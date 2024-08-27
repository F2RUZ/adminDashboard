import {
  Apartment,
  CarCrashSharp,
  Category,
  Logout,
  ModelTraining,
  MyLocation,
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

//import icon

import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import CollectionsIcon from "@mui/icons-material/Collections";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SettingsIcon from "@mui/icons-material/Settings";
import CottageIcon from "@mui/icons-material/Cottage";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import { useEffect } from "react";

const Sidebar = () => {
  //Logout
  const navigate = useNavigate();

  const logeOut = () => {
    setTimeout(() => {
      localStorage.removeItem("tokenxon");
      navigate("/");
    }, 500);
  };

  const tokenoy = localStorage.getItem("tokenxon");
  useEffect(() => {
    if (tokenoy?.includes(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey`)) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <Typography
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"60px"}
      sx={{ minHeight: "150vh" }}
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
        <NavLink to="/home">
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
            <CottageIcon />
          </Typography>
        </NavLink>
        <NavLink to={"/brands"}>
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
            <BrandingWatermarkIcon />
          </Typography>
        </NavLink>
        <NavLink to={"/models"}>
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
            <ModelTraining />
          </Typography>{" "}
        </NavLink>
        <NavLink to="/cities">
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
            <Apartment />
          </Typography>{" "}
        </NavLink>
        <NavLink to={"/location"}>
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
            <MyLocation />
          </Typography>
        </NavLink>
        <NavLink to={"/cars"}>
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
            <CarCrashSharp />
          </Typography>
        </NavLink>
      </Typography>

      <Button onClick={logeOut} size="small" variant="contained" color="error">
        <Logout />
      </Button>
    </Typography>
  );
};

export default Sidebar;
