import React, { useEffect } from "react";
import { useState } from "react";
import Anuncios from "../../components/Anuncios";
import Filter from "../../components/Filter";
import { Navbar } from "../../components/Navbar-home";
import { getAllAdverts } from "../../services/adverts";
import * as C from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [adverts, setAdverts] = useState([]);

  const showDrop = () => {
    setIsOpen(true);
  };
  const hideDrop = () => {
    setIsOpen(false);
  };

  const handleGetAllAdverts = async (filters) => {
    const response = await getAllAdverts(filters);
    setAdverts(response);
  };

  useEffect(() => {
    handleGetAllAdverts();
  }, []);

  return (
    <C.page>
      <Navbar handleGetAllAdverts={handleGetAllAdverts} />
      <C.Container>
        <C.divleft>
          <Filter handleGetAllAdverts={handleGetAllAdverts} />
        </C.divleft>
        <C.divright>
          <C.divra>
            <C.divresult>{`${adverts.totalRows || 0} ${
              adverts.totalRows > 1 ? `Resultados` : `Resultado`
            }`}</C.divresult>
            <C.divorder>
              <C.txt>Ordenar por</C.txt>
              <C.divmenu onMouseEnter={showDrop} onMouseLeave={hideDrop}>
                Maior preço
                <C.caret></C.caret>
                {isOpen ? (
                  <C.list onMouseEnter={showDrop}>
                    <li>Menor preço</li>
                  </C.list>
                ) : null}
              </C.divmenu>
            </C.divorder>
          </C.divra>
          <Anuncios adverts={adverts.data} />
        </C.divright>
      </C.Container>
      <ToastContainer style={{ zIndex: 100 }} />
    </C.page>
  );
};

export default Home;
