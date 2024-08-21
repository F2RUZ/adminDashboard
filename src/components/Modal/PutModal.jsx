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
}) => {
  const [name, setName] = useState();
  const [nameRu, setNameru] = useState();
  const [images, setImages] = useState();

  const  putApi =  async (e) => {
    const formData = new FormData();

    formData.append("name_en", name);
    formData.append("name_ru", nameRu);
    formData.append("images", images);
    const token = localStorage.getItem("tokenxon");
    e.preventDefault();
    await fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/categories/${putId}`, {
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
                placeholder="Name_en"
              />
            </FormControl>
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
            <Button
              onClick={putApi}
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
