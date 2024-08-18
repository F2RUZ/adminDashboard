import React from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Layout />
    </div>
  );
};

export default App;
