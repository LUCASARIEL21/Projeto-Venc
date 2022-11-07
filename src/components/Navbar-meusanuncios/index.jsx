import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';

import Logo from "../../assets/logo_venc.svg";
import User from "../../assets/user.svg";
import useAuth from "../../hooks/useAuth";

import * as S from "./styles";
import Anuncio from "../Anuncio";

export const NavbarM = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  const showDrop = () => {
    setIsOpen(true);
  };

  const hideDrop = () => {
    setIsOpen(false);
  };

  const deslogar = () => {
    localStorage.removeItem("userToken");
  };

  return (
    <S.header>
      <S.divimg>
        <S.logo src={Logo} alt="logo" />
      </S.divimg>
      <S.divrigth>
        <S.txt>Meus Anúncios</S.txt>
        <S.divdrop>
          <S.divmenu onMouseEnter={showDrop} onMouseLeave={hideDrop}>
            <S.user src={User} alt="user" />
            Usuário
            <S.caret></S.caret>
            {isOpen ? (
              <S.list onMouseEnter={showDrop}>
                <li onClick={() => [navigate("/home")]}>Home</li>
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
        {modal && <Anuncio modal={modal} closeModal={setModal} />}
      </S.divrigth>
    </S.header>
  );
};
