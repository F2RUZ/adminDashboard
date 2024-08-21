import React, { useEffect } from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import LayoutPage from "./pages/LayoutPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Brands from "./pages/Brands";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Cities from "./pages/Cities";
import Model from "./pages/Model";
import Location from "./pages/Location";
import Settings from "./pages/Settings";
const App = () => {
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
    <div>
      <ToastContainer />
      {tokenoy?.length > 0 ? (
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route path="/brands" element={<Brands />} />
            <Route path="/home" index element={<HomePage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/model" element={<Model />} />
            <Route path="/location" element={<Location />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
