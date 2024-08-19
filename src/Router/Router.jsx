import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import NoteFound from "../components/NoteFound/NoteFound";
import Home from "../pages/Home";
import Brands from "../pages/Brands";

const Router = () => {
  const navigate = useNavigate();
  const tokenoy = localStorage.getItem("tokenxon");
  useEffect(() => {
    if (tokenoy?.includes(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey`)) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="*" element={<NoteFound />} />
    </Routes>
  );
};

export default Router;
