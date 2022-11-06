import React from "react";
import { useState } from "react";
import Anuncios from "../../components/Anuncios";
import Filter from "../../components/Filter";
import { Navbar } from "../../components/Navbar-home";
import * as C from "./styles";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const showDrop = () => {
    setIsOpen(true);
  };
  const hideDrop = () => {
    setIsOpen(false);
  };
  return (
    <C.page>
      <Navbar />
      <C.Container>
        <C.divleft>
          <Filter />
        </C.divleft>
        <C.divright>
          <C.divra>
            <C.divresult>Resultados</C.divresult>
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
          <Anuncios />
        </C.divright>
      </C.Container>
    </C.page>
  );
};

export default Home;
