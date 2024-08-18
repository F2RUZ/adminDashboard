import { Typography } from "@mui/material";
import React from "react";

const NoteFound = () => {
  return (
    <Typography
      sx={({ minWidth: 100 }, { minHeight: "80vh" })}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      component={"div"}
    >
      <Typography component={"div"} variant="h4" color={"green"}>
        Hech narsa topilmadi oshna
      </Typography>
    </Typography>
  );
};

export default NoteFound;
