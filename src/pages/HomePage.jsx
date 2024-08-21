import { Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table/Table";

const HomePage = () => {
  return (
    <Typography margin={''} component={'div'} sx={{width: '85%'}}>
      <Typography variant="h5" color={"green"}>
        <Table />
      </Typography>
    </Typography>
  );
};

export default HomePage;
