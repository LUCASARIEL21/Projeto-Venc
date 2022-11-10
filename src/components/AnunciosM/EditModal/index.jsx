import React, { useState } from "react";
import { Dialog, FormControl, MenuItem, Select } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import * as S from "./styles";
import { useEffect } from "react";
import { editAdverts, getCategories } from "../../../services/adverts";
import { ToastContainer } from "react-toastify";

export const EditModal = ({ advert, handleGetUserAdverts }) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [modal, setModal] = useState(false);

  const initialValues = {
    title: advert.title,
    description: advert.description,
    price: advert.price,
    location: advert.location,
    address: advert.address,
    email: advert.email,
    telephone: advert.telephone,
    categoryId: advert.categoryId,
  };

  const [data, setData] = useState(initialValues);

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

  const handleEditAdvert = async () => {
    await editAdverts(advert.id, data);
    handleGetUserAdverts();
    setModal(false);
  };

  return (
    <>
      {
        <S.editButton
          onClick={() => {
            setModal(true);
          }}
        >
          <EditIcon style={{ color: "white" }} />
          <h5 style={{ textAlign: "center", fontSize: "13px" }}>Editar</h5>
        </S.editButton>
      }
      <Dialog
        PaperProps={{ style: { zIndex: 1 } }}
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.div>
          <S.txtcriar>Criar Anúncio</S.txtcriar>
          <S.butsair onClick={() => setModal(false)}>X</S.butsair>
          <S.txttitulo>Titulo</S.txttitulo>
          <S.inptitulo
            value={data.title}
            type="text"
            onChange={(e) => handleSetData("title", e.target.value)}
          />
          <S.txtdesc>Descrição</S.txtdesc>
          <S.inpdesc
            value={data.description}
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
            value={data.price}
            type="number"
            onChange={(e) => handleSetData("price", e.target.value)}
          />
          <S.txtfoto>Foto</S.txtfoto>
          <img
            src={advert.advertsImages[0]}
            crossOrigin="anonymous"
            height="150"
            width="250"
          />
          <S.txtloc>Localização</S.txtloc>
          <S.inploc
            type="number"
            value={data.location}
            onChange={(e) => handleSetData("location", e.target.value)}
          />
          <S.txtend>Endereço</S.txtend>
          <S.inpend
            value={data.address}
            type="text"
            placeholder="Digite seu Endereço"
            onChange={(e) => handleSetData("address", e.target.value)}
          />
          <S.txtcont>Contatos</S.txtcont>
          <S.inpemail
            value={data.email}
            type="email"
            placeholder="Digite seu E-mail"
            onChange={(e) => handleSetData("email", e.target.value)}
          />
          <S.inpcelular
            value={data.telephone}
            type="text"
            placeholder="(00) 90000-0000 *"
            onChange={(e) => handleSetData("telephone", e.target.value)}
          />
          <S.butcriar type="button" onClick={() => handleEditAdvert()}>
            Editar Anúncio
          </S.butcriar>
        </S.div>
        <ToastContainer />
      </Dialog>
    </>
  );
};

export default EditModal;
