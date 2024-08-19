import { Delete, Edit, Logout } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

//import icon

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import CollectionsIcon from "@mui/icons-material/Collections";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SettingsIcon from "@mui/icons-material/Settings";
import CottageIcon from "@mui/icons-material/Cottage";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import Navbar from "../components/Navbar/Navbar";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import { useEffect, useState } from "react";
const Home = () => {
  //Logout
  const navigate = useNavigate();
  const logeOut = () => {
    localStorage.removeItem("tokenxon");
    navigate("/");
  };

  //get API
  const [data, setData] = useState([]);

  useEffect(() => {
    const getApi = `https://autoapi.dezinfeksiyatashkent.uz/api/categories`;

    fetch(getApi)
      .then((resp) => resp.json())
      .then((data) => setData(data?.data));
  }, []);
  console.log(data);

  return (
    <>
      <Navbar />

      <Typography
        display={"flex"}
        alignItems={"start"}
        gap={"80px"}
        component={"div"}
      >
        <Typography
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ minHeight: "89vh" }}
          bgcolor={"green"}
          component={"div"}
          padding={"30px "}
        >
          <Typography
            component={"div"}
            display={"flex"}
            flexDirection={"column"}
            gap={"30px"}
          >
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <CottageIcon />
            </Typography>
            <NavLink to={"/brands"}>
              <Typography
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                padding={" 10px"}
                borderRadius={"5px"}
                color={"white"}
                boxShadow={"1px 1px 10px grey"}
                bgcolor={"lightgreen"}
                component={"div"}
              >
                <BrandingWatermarkIcon />
              </Typography>
            </NavLink>
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <AutoAwesomeMosaicIcon />
            </Typography>{" "}
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <CollectionsIcon />
            </Typography>{" "}
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <SubscriptionsIcon />
            </Typography>{" "}
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <EmojiTransportationIcon />
            </Typography>
            <Typography
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={" 10px"}
              borderRadius={"5px"}
              color={"white"}
              boxShadow={"1px 1px 10px grey"}
              bgcolor={"lightgreen"}
              component={"div"}
            >
              <SettingsIcon />
            </Typography>
          </Typography>

          <Button
            onClick={logeOut}
            size="small"
            variant="contained"
            color="error"
          >
            <Logout />
          </Button>
        </Typography>

        <Typography marginTop={'80px'}  component={"div"}>
          <Typography
            component={"div"}
            display={"flex"}
            alignItems={"center"}
            gap={"20px"}
          >
            <AccountCircleIcon color="success" />
            <Typography
              textTransform={"uppercase"}
              color={"green"}
              fontWeight={"800"}
              variant="h5"
            >
              Mijozlar
            </Typography>
          </Typography>

          <table id="customers">
            <tr>
              <th>NAME EN</th>
              <th>NANE RU</th>
              <th>CREATED</th>
              <th>ID</th>
              <th>Number</th>
              <th>Country</th>
              <th>IMAGES</th>
              <th>STATUS</th>
            </tr>

            {data?.map((elem) => (
              <tr key={elem.id}>
                <td>{elem?.name_en}</td>
                <td>{elem?.name_ru}</td>
                <td>{elem?.created_at}</td>

         
              
                <td>{elem?.id}</td>
                <td>+99891 0050913</td>
                <td>Uzbekistan</td>
                <td>
                  <img
                    src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${elem?.image_src}`}
                    alt=""
                  />
                </td>
                <td>
                  <Typography
                    paddingLeft={"20px"}
                    component={"div"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"20px"}
                  >
                    <Button variant="contained" size="small" color="error">
                      <Delete color="red" />
                    </Button>
                    <Button variant="contained" size="small" color="primary">
                      <Edit color="blue" />
                    </Button>
                  </Typography>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
            <tr>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>France</td>
            </tr> */}
          </table>
        </Typography>
      </Typography>
    </>
  );
};

export default Home;
