import React from "react";
import "./loader.scss";
import { Typography } from "@mui/material";
const Loader = () => {
  return (
    <Typography
      component={"div"}
      position={"absolute"}
      left={"50%"}
      top={"50%"}
    >
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Typography>
  );
};

export default Loader;
