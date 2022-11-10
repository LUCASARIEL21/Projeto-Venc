import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo_venc.svg";
import User from "../../assets/user.svg";
import Search from "../../assets/search.svg";

import Anuncio from "../Anuncio";
import * as S from "./styles";

export const Navbar = ({ handleGetAllAdverts }) => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("userData");
  const [modal, setModal] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  const showDrop = () => {
    setIsOpen(!isOpen);
  };

  const deslogar = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
  };

  return (
    <S.header>
      <S.divimg>
        <S.logo src={Logo} alt="logo" />
      </S.divimg>
      <S.divsearch>
        <S.search type="text" placeholder="Pesquise" />
        <S.iconsearch src={Search} />
      </S.divsearch>
      <S.divrigth>
        <S.divdrop>
          <S.divmenu onClick={showDrop}>
            <S.user src={User} alt="user" />
            {String(JSON.parse(userData).name).split(" ")[0]}
            <S.caret></S.caret>
            {isOpen ? (
              <S.list>
                <li
                  style={{ marginBottom: 5 }}
                  onClick={() => [navigate("/meusanuncios")]}
                >
                  Meus Anúncios
                </li>
                <li onClick={() => [deslogar(), navigate("/")]}>Sair</li>
              </S.list>
            ) : null}
          </S.divmenu>
        </S.divdrop>
      </S.divrigth>
      <S.anunciar
        onClick={() => {
          setModal(true);
        }}
      >
        Anunciar
      </S.anunciar>
      {modal && (
        <Anuncio
          modal={modal}
          closeModal={setModal}
          disable={true}
          handleGetAllAdverts={handleGetAllAdverts}
        />
      )}
    </S.header>
  );
};
