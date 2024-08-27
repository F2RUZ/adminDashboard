import { Button, FormControl, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import "./modal.scss";
import { Close } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Modal = ({
  openModal,
  setPostModal,
  setCategories,
  categories,
  getApi,
  params,
  brands,
  setBrands,
  getModelsApi,
  getCitiesApi,
}) => {
  const [name, setName] = useState();
  const [nameRu, setNameru] = useState();
  const [images, setImages] = useState();
  const [selectModel, setSelectModel] = useState();
  const token = localStorage.getItem("tokenxon");

  const postAPI = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name_en", name);
    formData.append("name_ru", nameRu);
    formData.append("images", images);
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/categories", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
          setCategories([...categories, data.data]);
        } else {
          toast.error(data?.error, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });

    setTimeout(() => {
      e?.target?.reset();
      setPostModal(false);
    }, 300);
  };

  const postAPIBrands = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", name);
    formData.append("images", images);

    await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/brands", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
          setBrands([...brands, data.data]);
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });

    e?.target?.reset();
    setPostModal(false);
  };

  const postApiModels = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("brand_id", selectModel);

    await fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/models`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 1500,
          });

          e?.target?.reset();
          setPostModal(false);
          getModelsApi();
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });
  };

  const postApiCities = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("text", nameRu);
    formData.append("images", images);

    console.log(formData);

    await fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/cities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          toast.success(data?.message, {
            position: "top-center",
            autoClose: 1500,
          });
          getCitiesApi();
          setPostModal(false);

          e?.target?.reset();
        } else {
          toast.error(data?.message, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });
  };

  const checkForm = params?.includes("/home")
    ? postAPI
    : params.includes("/brands")
    ? postAPIBrands
    : params.includes("/models")
    ? postApiModels
    : params.includes("/cities")
    ? postApiCities
    : null;

  return (
    <div className="opasity">
      <Typography
        width={"50%"}
        top={"25%"}
        left={"25%"}
        position={"fixed"}
        borderRadius={"20px"}
        padding={"20px 50px"}
        className="modal"
        component={"div"}
        color={"blue"}
      >
        <Typography
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          component={"div"}
        >
          <Typography variant="h5" color={"green"} fontWeight={"500"}>
            {" "}
            Post Modal oyna
          </Typography>
          <Button
            onClick={openModal}
            variant="contained"
            size="small"
            color="error"
          >
            <Close />
          </Button>
        </Typography>

        <Typography component={"div"} marginTop={"50px"}>
          <form onSubmit={checkForm} className="modal__form">
            <FormControl fullWidth>
              <Input
                required
                onChange={(e) => {
                  setName(e?.target?.value);
                }}
                type="text"
                placeholder={
                  params?.includes("/brands")
                    ? "Title"
                    : params?.includes("/home")
                    ? "Name_en"
                    : params?.includes("/models")
                    ? "Model Name"
                    : params?.includes("/cities")
                    ? "Name"
                    : null
                }
              />
            </FormControl>

            {params?.includes("/brands") ? null : params?.includes(
                "/models"
              ) ? null : (
              <FormControl fullWidth>
                <Input
                  required
                  onChange={(e) => {
                    setNameru(e?.target?.value);
                  }}
                  type="text"
                  placeholder={
                    params?.includes("/home")
                      ? "Name_ru"
                      : params?.includes("/cities")
                      ? "Text"
                      : null
                  }
                />
              </FormControl>
            )}

            {params?.includes("/home") ? (
              <FormControl fullWidth>
                <input
                  onChange={(e) => {
                    setImages(e?.target?.files[0]);
                  }}
                  className="modal__file"
                  type="file"
                  required
                  accept="image/jpg , image/png"
                />
              </FormControl>
            ) : params?.includes("/brands") ? (
              <FormControl fullWidth>
                <input
                  onChange={(e) => {
                    setImages(e?.target?.files[0]);
                  }}
                  className="modal__file"
                  type="file"
                  required
                  accept="image/jpg , image/png"
                />
              </FormControl>
            ) : params?.includes("/models") ? (
              <FormControl>
                Model Name
                <select
                  onChange={(e) => setSelectModel(e?.target?.value)}
                  name=""
                  id=""
                >
                  <option value="">Select Brand</option>
                  {brands?.map((elem) => (
                    <option value={elem?.id}>{elem?.title}</option>
                  ))}
                </select>
              </FormControl>
            ) : params?.includes("/cities") ? (
              <FormControl fullWidth>
                <input
                  onChange={(e) => {
                    setImages(e?.target?.files[0]);
                  }}
                  className="modal__file"
                  type="file"
                  required
                  accept="image/jpg , image/png"
                />
              </FormControl>
            ) : null}

            <Button size="large" type="submit" color="info" variant="outlined">
              Submit
            </Button>
          </form>
        </Typography>
      </Typography>
    </div>
  );
};

export default Modal;
