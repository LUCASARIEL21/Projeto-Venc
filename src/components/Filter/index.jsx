import React from "react";
import * as S from "./styles";

function Filter() {
  return (
    <S.container>
      <S.title>
        <h5>Busca por Categorias</h5>
      </S.title>
      <S.categorias>
        <a href="#" style={{ color: "limegreen" }}>
          Auto e Peças
        </a>
        <a href="#" style={{ color: "limegreen" }}>
          Eletrônicos e Celulares
        </a>
        <a href="#" style={{ color: "limegreen" }}>
          Imóveis
        </a>
      </S.categorias>
    </S.container>
  );
}

export default Filter;
