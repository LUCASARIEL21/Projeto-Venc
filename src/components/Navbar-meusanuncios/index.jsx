import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo_venc.svg";
import User from "../../assets/user.svg";
import * as S from "./styles";
import Anuncio from "../Anuncio";

export const NavbarM = ({ handleGetUserAdverts }) => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("userData");
  const [modal, setModal] = useState(false);

  const [isOpenDrop, setIsOpenDrop] = useState(true);

  const showDrop = () => {
    setIsOpenDrop(!isOpenDrop);
  };

  const deslogar = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
  };

  return (
    <S.header>
      <S.divimg>
        <S.logo
          src={Logo}
          alt="logo"
          onClick={() => [navigate("/home")]}
          style={{ cursor: "pointer" }}
        />
      </S.divimg>
      <S.divrigth>
        <S.txt>Meus Anúncios</S.txt>
        <S.divdrop>
          <S.divmenu onClick={showDrop}>
            <S.user src={User} alt="user" />
            {String(JSON.parse(userData).name).split(" ")[0]}
            <S.caret></S.caret>
            {isOpenDrop ? (
              <S.list>
                <li
                  style={{ marginBottom: 5 }}
                  onClick={() => [navigate("/home")]}
                >
                  Home
                </li>
                <li onClick={() => [deslogar(), navigate("/")]}>Sair</li>
              </S.list>
            ) : null}
          </S.divmenu>
        </S.divdrop>
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
            handleGetAllAdverts={handleGetUserAdverts}
          />
        )}
      </S.divrigth>
    </S.header>
  );
};
