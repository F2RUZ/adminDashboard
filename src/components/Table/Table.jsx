import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography, Button } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import PutModal from "../Modal/PutModal";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { Add } from "@mui/icons-material";

export default function Table() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  console.log(models);

  //getModelsApi

  async function getModelsApi() {
    await fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/models`)
      .then((res) => res.json())
      .then((data) => setModels(data?.data));
  }
  console.log(models);

  useEffect(() => {
    getModelsApi();
  }, []);
  //GetCategiesAPI

  function getApi() {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data?.data);
      })
      .catch((err) => console.error("Failed to fetch categories:", err));
  }
  //GetBrandsAPI

  function getBrandsApi() {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data?.data);
      })
      .catch((err) => console.error("Failed to fetch brands:", err));
  }
  //useEffect Barnds API
  useEffect(() => {
    getBrandsApi();
  }, []);
  //UseEffectCategoriesAPI
  useEffect(() => {
    getApi();
  }, []);

  const params = useLocation()?.pathname;

  //OpenModal

  const [postModal, setPostModal] = useState(false);

  const openModal = () => {
    setPostModal((prev) => !prev);
  };

  //deleteAPiModels

  const deleteApiModels = async (itemId) => {
    await fetch(
      `https://autoapi.dezinfeksiyatashkent.uz/api/models/${itemId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 1500,
          });

          getModelsApi();
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });
  };

  //DeleteApi Categories
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

  //deleteApiBrands

  const deleteApiBrands = async (itemId) => {
    await fetch(
      `https://autoapi.dezinfeksiyatashkent.uz/api/brands/${itemId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
          getBrandsApi();
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });
  };

  //edid API Categories

  const [editModal, setEditModal] = useState(false);
  const [idPut, setIdPut] = useState();

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
            {params?.includes("/home")
              ? "Home Page"
              : params.includes("/brands")
              ? "Brand Page"
              : params.includes("/models")
              ? "Models Page"
              : null}
          </Typography>
          <Button
            onClick={openModal}
            variant="outlined"
            size="large"
            color="primary"
          >
            ADD CATEGORY <Add />
          </Button>
        </Typography>
        {postModal ? (
          <Modal
            brands={brands}
            setBrands={setBrands}
            params={params}
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
            putId={idPut}
            setPostModal={setPostModal}
            getApi={getApi}
            params={params}
            getBrandsApi={getBrandsApi}
            getModelsApi={getModelsApi}
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
            ) : params.includes("/brands") ? (
              <tr>
                <th>TITLE</th>
                <th>IMAGES</th>
                <th>ACTIONS</th>
              </tr>
            ) : params.includes("/models") ? (
              <tr>
                <th>NAME</th>
                <th>BRAND</th>
                <th>ACTION</th>
              </tr>
            ) : null}
          </thead>
          <tbody>
            {params?.includes("/home") ? (
              categories?.length > 0 ? (
                categories?.map((elem, index) => (
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
                          onClick={() => deleteApi(elem?.id)}
                          variant="contained"
                          size="small"
                          color="error"
                        >
                          <Delete />
                        </Button>
                        <Button
                          onClick={() => setIdPut(elem?.id)}
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Edit onClick={() => setEditModal(true)} />
                        </Button>
                      </Typography>
                    </td>
                  </tr>
                ))
              ) : (
                <Loader />
              )
            ) : params.includes("/brands") ? (
              brands?.length > 0 ? (
                brands?.map((elem) => (
                  <tr key={elem.id}>
                    <td className="brand-table">{elem?.title}</td>
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
                          onClick={() => deleteApiBrands(elem?.id)}
                          variant="contained"
                          size="small"
                          color="error"
                        >
                          <Delete />
                        </Button>
                        <Button
                          onClick={() => setIdPut(elem?.id)}
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Edit onClick={() => setEditModal(true)} />
                        </Button>
                      </Typography>
                    </td>
                  </tr>
                ))
              ) : (
                <Loader />
              )
            ) : params.includes("/models") ? (
              models?.length > 0 ? (
                models?.map((elem) => (
                  <tr key={elem?.id}>
                    <td>{elem?.name}</td>
                    <td>{elem?.brand_title}</td>
                    <td>
                      <Typography
                        paddingLeft={"20px"}
                        component={"div"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"20px"}
                      >
                        <Button
                          onClick={() => deleteApiModels(elem?.id)}
                          variant="contained"
                          size="small"
                          color="error"
                        >
                          <Delete />
                        </Button>
                        <Button
                          onClick={() => setIdPut(elem?.id)}
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          <Edit onClick={() => setEditModal(true)} />
                        </Button>
                      </Typography>
                    </td>
                  </tr>
                ))
              ) : (
                <Loader />
              )
            ) : null}
          </tbody>
        </table>
      </Typography>
    </div>
  );
}
