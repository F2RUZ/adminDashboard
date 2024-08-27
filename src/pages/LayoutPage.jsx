import { Route, Routes } from "react-router-dom";
import Brands from "./Brands";
import HomePage from "./HomePage";
import Sidebar from "./Sidebar";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Category from "./Category";
import Cities from "./Cities";
import Model from "./Model";
import Location from "./Location";
import Settings from "./Settings";
// import { useEffect } from "react";
const LayoutPage = () => {
  return (
    <>
      <Navbar />

      <Typography
        bgcolor={""}
        display={"flex"}
        alignItems={"start"}
        gap={"80px"}
        component={"div"}
      >
        <Sidebar />
        <Routes>
          <Route path="/brands" element={<Brands />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/models" element={<Model />} />
          <Route path="/location" element={<Location />} />
          <Route path="/cars" element={<Settings />} />
        </Routes>
      </Typography>
    </>
  );
};

export default LayoutPage;
