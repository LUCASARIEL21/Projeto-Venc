import React, { useEffect, useState } from "react";
import AnunciosM from "../../components/AnunciosM";
import { NavbarM } from "../../components/Navbar-meusanuncios";
import { getUserAdverts } from "../../services/adverts";
import * as C from "./styles";

const Meusanuncios = () => {
  const [userAdverts, setUserAdverts] = useState([]);

  const handleGetUserAdverts = async () => {
    const response = await getUserAdverts();
    setUserAdverts(response);
  };

  useEffect(() => {
    handleGetUserAdverts();
  }, []);

  return (
    <C.Container>
      <NavbarM handleGetUserAdverts={handleGetUserAdverts} />
      <AnunciosM
        handleGetUserAdverts={handleGetUserAdverts}
        userAdverts={userAdverts}
      />
    </C.Container>
  );
};

export default Meusanuncios;
