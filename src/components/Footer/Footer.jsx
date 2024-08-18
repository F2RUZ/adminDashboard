import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Typography
      textAlign={"center"}
      padding={"10px  0"}
      bgcolor={"green"}
      sx={{ minWidth: 100 }}
      component={"div"}
    >
      <Typography variant="h4" color={"coral"}>
        Footer bor deb tushunamiz{" "}
      </Typography>
    </Typography>
  );
};

export default Footer;
