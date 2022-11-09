import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/adverts";
import * as S from "./styles";

function Filter({ handleGetAllAdverts }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const handleGetCategories = async () => {
      const response = await getCategories();
      setCategories(response);
    };
    handleGetCategories();
  }, []);

  const getAdvertsFilteredByCategory = async (categoryId) => {
    await handleGetAllAdverts({ categoryId });
  };

  return (
    <S.container>
      <S.title>
        <h5>Busca por Categorias</h5>
      </S.title>
      <S.categorias>
        <>
          <p
            onClick={() => getAdvertsFilteredByCategory()}
            key={`cat-${0}`}
            style={{
              color: "limegreen",
              cursor: "pointer",
              marginBottom: 10,
            }}
          >
            Todos
          </p>
          {categories?.map((category, index) => (
            <p
              onClick={() => getAdvertsFilteredByCategory(category.id)}
              key={`cat-${category.id}`}
              style={{
                color: "limegreen",
                cursor: "pointer",
                marginTop: index > 0 ? 10 : 0,
                marginBottom: index == categories.length - 1 ? 10 : 0,
              }}
            >
              {category.name}
            </p>
          ))}
        </>
      </S.categorias>
    </S.container>
  );
}

export default Filter;
