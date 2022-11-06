import React from "react";
import AnunciosM from "../../components/AnunciosM";
import { NavbarM } from "../../components/Navbar-meusanuncios";
import * as C from "./styles";

const Meusanuncios = () => {
  return (
    <C.Container>
      <NavbarM />
      <AnunciosM />
    </C.Container>
  );
};

export default Meusanuncios;
