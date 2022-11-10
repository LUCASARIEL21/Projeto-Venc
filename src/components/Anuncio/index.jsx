import React, { useState } from "react";
import {
  Dialog,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import * as S from "./styles";
import { useEffect } from "react";
import { createAdvert, getCategories } from "../../services/adverts";
import { ToastContainer, toast } from "react-toastify";

export const Anuncio = ({ closeModal, handleGetAllAdverts, modal }) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [image, setImage] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    const handleGetCategories = async () => {
      const response = await getCategories();
      setCategoriesList(response);
    };
    handleGetCategories();
  }, []);

  const handleSetData = (field, data) => {
    setData((preview) => ({ ...preview, [field]: data }));
  };

  const uploadFiles = () => {
    document.getElementById("File").click();
  };

  const handleSetImage = (event) => {
    if (event?.target?.files) {
      const mapedFile = Array.from(event?.target?.files).map((file) => ({
        name: file.name,
        preview: URL.createObjectURL(file),
        type: file.type,
        file: event?.target?.files?.item(0),
      }));
      setImage(mapedFile[0]);
    }
  };

  const handleCreateAdvert = async () => {
    try {
      await createAdvert(data, image.file);
      toast.success("Anúncio cadastrado com sucesso!");
      handleGetAllAdverts();
      closeModal(false);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar anúncio!");
    }
  };

  return (
    <Dialog
      PaperProps={{ style: { zIndex: 1 } }}
      open={modal}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.div>
        <S.txtcriar>Criar Anúncio</S.txtcriar>
        <S.butsair onClick={() => closeModal(false)}>X</S.butsair>
        <S.txttitulo>Titulo</S.txttitulo>
        <S.inptitulo
          type="text"
          onChange={(e) => handleSetData("title", e.target.value)}
        />
        <S.txtdesc>Descrição</S.txtdesc>
        <S.inpdesc
          type="text"
          onChange={(e) => handleSetData("description", e.target.value)}
        />
        <S.txtcat>Categoria</S.txtcat>
        <FormControl sx={{ background: "#fff", borderRadius: 1 }}>
          <Select
            value={data.categoryId}
            onChange={(e) => handleSetData("categoryId", e.target.value)}
          >
            {categoriesList.map((category) => (
              <MenuItem value={category.id}>{category.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <S.txtprec>Preço(R$)</S.txtprec>
        <S.inprec
          type="number"
          onChange={(e) => handleSetData("price", e.target.value)}
        />
        <S.txtfoto>Foto</S.txtfoto>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <S.foto onClick={uploadFiles}>
            <PhotoCameraIcon />
            Adicionar fotos JPEG e PNG
            <input
              id="File"
              type="file"
              style={{ display: "none" }}
              onChange={handleSetImage}
              accept="image/jpeg,image/png"
            />
          </S.foto>
          <img src={image.preview} height="200" width="300" />
        </div>
        <S.txtloc>Localização</S.txtloc>
        <S.inploc
          type="number"
          value={data.location}
          onChange={(e) => handleSetData("location", e.target.value)}
        />
        <S.txtend>Endereço</S.txtend>
        <S.inpend
          type="text"
          placeholder="Digite seu Endereço"
          onChange={(e) => handleSetData("address", e.target.value)}
        />
        <S.txtcont>Contatos</S.txtcont>
        <S.inpemail
          type="email"
          placeholder="Digite seu E-mail"
          onChange={(e) => handleSetData("email", e.target.value)}
        />
        <S.inpcelular
          type="text"
          placeholder="(00) 90000-0000 *"
          onChange={(e) => handleSetData("telephone", e.target.value)}
        />
        <S.butcriar type="button" onClick={() => handleCreateAdvert()}>
          Criar Anúncio
        </S.butcriar>
      </S.div>
      <ToastContainer />
    </Dialog>
  );
};

export default Anuncio;
