import { Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  return (
    <Typography
      sx={({ minWidth: 100 }, { minHeight: "100px" })}
      color={"whitesmoke"}
      component={"div"}
      bgcolor={"green"}
      textAlign={"start"}
      paddingLeft={"50px"}
      display={"flex"}
      alignItems={"center"}
      fontWeight={"900"}
    >
      <Typography color={"whitesmoke"} component={"div"}>
        <MenuIcon />
      </Typography>
      <Typography paddingLeft={'50px'} variant="h4" component={"h4"}>
        GreenLeaf Dashboard
      </Typography>
    </Typography>
  );
};

export default Navbar;
