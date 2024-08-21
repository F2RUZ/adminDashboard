import { Button, FormControl, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import "./modal.scss";
import { Close } from "@mui/icons-material";
import { toast } from "react-toastify";

const PutModal = ({
  openCloseModal,
  putId,
  setPostModal,
  getApi,
  setEditModal,
  params,
  getBrandsApi,
  getModelsApi,
}) => {
  const [name, setName] = useState();
  const [nameRu, setNameru] = useState();
  const [images, setImages] = useState();
  const token = localStorage.getItem("tokenxon");
  const [selectModel, setSelectModel] = useState();

  const putApi = async (e) => {
    const formData = new FormData();

    formData.append("name_en", name);
    formData.append("name_ru", nameRu);
    formData.append("images", images);
    e.preventDefault();
    await fetch(
      `https://autoapi.dezinfeksiyatashkent.uz/api/categories/${putId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
          getApi();
        } else {
          toast.error(data?.error, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });

    setEditModal(false);
    e?.target?.reset();
  };

  const putApiBrands = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", name);
    formData.append("images", images);
    fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/brands/${putId}`, {
      method: "PUT",
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
          getBrandsApi();
          setEditModal(false);
          e?.target?.reset();
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });
  };

  const putApiModels = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    // formData.append("brand_title", selectModel);

    await fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/models/${putId}`, {
      method: "PUT",
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

          getModelsApi();
          setEditModal(false);
          e?.target?.reset();
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 1500,
          });
        }
      });
  };

  const checkRoute = params?.includes("/home")
    ? putApi
    : params?.includes("/brands")
    ? putApiBrands
    : params?.includes("/models")
    ? putApiModels
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
            Update Modal Oyna
          </Typography>
          <Button
            onClick={openCloseModal}
            variant="contained"
            size="small"
            color="error"
          >
            <Close />
          </Button>
        </Typography>

        <Typography component={"div"} marginTop={"50px"}>
          <form className="modal__form">
            <FormControl fullWidth>
              <Input
                required
                onChange={(e) => {
                  setName(e?.target?.value);
                }}
                type="text"
                placeholder={params?.includes("/home") ? "Name_en" : "Title"}
              />
            </FormControl>
            {params?.includes("/home") ? (
              <FormControl fullWidth>
                <Input
                  required
                  onChange={(e) => {
                    setNameru(e?.target?.value);
                  }}
                  type="text"
                  placeholder="Name_ru"
                />
              </FormControl>
            ) : null}
            {params?.includes("/home") ? (
              <FormControl fullWidth>
                <input
                  onChange={(e) => {
                    setImages(e?.target?.files[0]);
                  }}
                  className="modal__file"
                  type="file"
                  required
                  accept="image/jpg , image/png  "
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
                  accept="image/jpg , image/png  "
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
                  <option value="audi">Audi</option>
                  <option value="lamborghini">Lamborghini</option>
                  <option value="mercedes-benz">Mercedes Benz</option>
                  <option value="uz-auto-ravon">Uz Auto Ravon</option>
                </select>
              </FormControl>
            ) : null}
            <Button
              onClick={checkRoute}
              size="large"
              type="submit"
              color="info"
              variant="outlined"
            >
              Submit
            </Button>
          </form>
        </Typography>
      </Typography>
    </div>
  );
};

export default PutModal;
