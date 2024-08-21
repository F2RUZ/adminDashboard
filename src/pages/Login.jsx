import { Typography } from "@mui/material";
import { useState } from "react";
import "../styles/login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone_number: number,
        password: name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          const tokenbek = data?.data?.tokens?.accessToken?.token;

          localStorage.setItem("tokenxon", tokenbek);

          toast.success(data?.message, {
            position: "top-center",
            autoClose: 1500,
          });

          navigate("/home");
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      })
      .catch((error) => {
        if (error.message === "Token expired") {
          localStorage.removeItem("tokenxon");
        }
      });
  };
  return (
    <Typography component={"div"}>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Number</label>
              <input
                required
                type="tel"
                id="username"
                placeholder="Enter your username"
                minLength={3}
                onChange={(e) => {
                  setNumber(e?.target?.value);
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Username</label>
              <input
                required
                type="text"
                id="password"
                placeholder="Enter your Text"
                minLength={5}
                onChange={(e) => {
                  setName(e?.target?.value);
                }}
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </Typography>
  );
};

export default Login;
