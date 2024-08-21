import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography, Button } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import PutModal from "../Modal/PutModal";
import { toast } from "react-toastify";

export default function Table() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  //GetCategiesAPI

  useEffect(() => {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data?.data);
      })
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  //GetBrandsAPI

  function getApi() {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data?.data);
      })
      .catch((err) => console.error("Failed to fetch brands:", err));
  }

  useEffect(() => {
    getApi();
  }, []);

  const params = useLocation()?.pathname;

  //OpenModal

  const [postModal, setPostModal] = useState(false);

  const openModal = () => {
    setPostModal((prev) => !prev);
  };

  //DeleteApi
  const token = localStorage.getItem("tokenxon");
  function deleteApi(itemId) {
    fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/categories/${itemId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
          getApi();
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });
  }

  //edid API

  const [editModal, setEditModal] = useState(false);

  const openCloseModal = () => {
    setEditModal(false);
    setPostModal(false);
  };

  return (
    <div>
      <Typography marginTop={"30px"} component={"div"}>
        <Typography
          component={"div"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"20px"}
        >
          <Typography
            component={"div"}
            display={"flex"}
            alignItems={"center"}
            textTransform={"uppercase"}
            color={"green"}
            fontWeight={"800"}
            variant="h5"
          >
            <AccountCircleIcon color="success" />
            Mijozlar
          </Typography>
          <Button
            onClick={openModal}
            variant="outlined"
            size="large"
            color="primary"
          >
            Qo'shish
          </Button>
        </Typography>
        {postModal ? (
          <Modal
            getApi={getApi}
            categories={categories}
            setCategories={setCategories}
            setPostModal={setPostModal}
            openModal={openModal}
          />
        ) : editModal ? (
          <PutModal
            openCloseModal={openCloseModal}
            setEditModal={setEditModal}
          />
        ) : (
          ""
        )}

        <table id="customers">
          <thead>
            {params?.includes("/home") ? (
              <tr>
                <th>NAME EN</th>
                <th>NAME RU</th>
                <th>STATUS</th>
                <th>CREATED AT</th>
                <th>ID</th>
                <th>IMAGES</th>
                <th>ACTIONS</th>
              </tr>
            ) : (
              <tr>
                <th>BRAND EN</th>
                <th>NAME RU</th>
              </tr>
            )}
          </thead>
          <tbody>
            {params?.includes("/home")
              ? categories?.map((elem, index) => (
                  <tr key={index}>
                    <td>{elem?.name_en}</td>
                    <td>{elem?.name_ru}</td>
                    <td>Active</td>
                    <td>{elem?.created_at}</td>
                    <td>{elem?.id}</td>
                    <td>
                      {elem?.image_src ? (
                        <img
                          src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${elem?.image_src}`}
                          alt={elem?.name_en}
                          style={{ maxWidth: "100px", maxHeight: "100px" }}
                        />
                      ) : (
                        <Typography>No Image</Typography>
                      )}
                    </td>
                    <td>
                      <Typography
                        paddingLeft={"20px"}
                        component={"div"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"20px"}
                      >
                        <Button
                          onClick={() => {
                            deleteApi(elem?.id);
                          }}
                          variant="contained"
                          size="small"
                          color="error"
                        >
                          <Delete />
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Edit />
                        </Button>
                      </Typography>
                    </td>
                  </tr>
                ))
              : brands?.map((elem) => (
                  <tr key={elem.id}>
                    <td>{elem?.brand_en}</td>
                    <td>{elem?.name_ru}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </Typography>
    </div>
  );
}
