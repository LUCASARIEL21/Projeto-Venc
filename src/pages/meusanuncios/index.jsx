import React, { useEffect, useState } from "react";
import AnunciosM from "../../components/AnunciosM";
import { NavbarM } from "../../components/Navbar-meusanuncios";
import { getUserAdverts } from "../../services/adverts";
import * as C from "./styles";

const Meusanuncios = () => {
  const [userAdverts, setUserAdverts] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  const handleGetUserAdverts = async () => {
    setLoadedData(false);
    const response = await getUserAdverts();
    setUserAdverts(response);
    setLoadedData(true);
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
        loadedData={loadedData}
      />
    </C.Container>
  );
};

export default Meusanuncios;
