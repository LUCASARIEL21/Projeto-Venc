import React, { useState } from "react";
import { Dialog } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import * as S from "./styles";

export const Anuncio = ({ closeModal, disable, modal }) => {
  const [previewimg, setPreviewimg] = useState("");

  const imgHandler = (e) => {
    if (e.target.files.length !== 0) {
      setPreviewimg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const uploadFiles = () => {
    document.getElementById("File").click();
  };
  return (
    <Dialog
      open={modal}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.div>
        <S.txtcriar>Criar Anúncio</S.txtcriar>
        <S.butsair onClick={() => closeModal(false)}>X</S.butsair>
        <S.txttitulo>Titulo</S.txttitulo>
        <S.inptitulo type="text" />
        <S.txtdesc>Descrição</S.txtdesc>
        <S.inpdesc type="text" />
        <S.txtcat>Categoria</S.txtcat>
        <S.inpcat type="text" />
        <S.txtprec>Preço(R$)</S.txtprec>
        <S.inprec type="text" />
        <S.txtfoto>Foto</S.txtfoto>
        <S.foto onClick={uploadFiles}>
          <PhotoCameraIcon />
          Adicionar fotos JPEG e PNG
        </S.foto>
        <input
          id="File"
          type="file"
          style={{ display: "none" }}
          onChange={imgHandler}
          accept="image/jpeg,image/png"
          disabled={previewimg ? true : false}
        />
        <img src={previewimg} height="100" width="100" />
        <S.txtloc>Localização</S.txtloc>
        <S.inploc type="text" placeholder="CEP" />
        <S.txtend>Endereço</S.txtend>
        <S.inpend type="text" placeholder="Digite seu Endereço" />
        <S.txtcont>Contatos</S.txtcont>
        <S.inpemail type="email" placeholder="Digite seu E-mail" />
        <S.inpcelular type="text" placeholder="(00) 90000-0000" />
        <S.butcriar type="button" onClick={() => closeModal(false)}>
          Criar Anúncio
        </S.butcriar>
      </S.div>
    </Dialog>
  );
};

export default Anuncio;
