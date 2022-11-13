import React, { useEffect } from "react";
import { useState } from "react";
import Anuncios from "../../components/Anuncios";
import Filter from "../../components/Filter";
import { Navbar } from "../../components/Navbar-home";
import { getAllAdverts } from "../../services/adverts";
import * as C from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MenuItem, Select } from "@mui/material";

const Home = () => {
  const [adverts, setAdverts] = useState([]);
  const [orderBy, setOrderBy] = useState({ sortByPrice: "MR" });
  const [loadedData, setLoadedData] = useState(false);

  const handleGetAllAdverts = async (filters) => {
    setLoadedData(false);
    const response = await getAllAdverts(filters);
    setAdverts(response);
    setLoadedData(true);
  };

  useEffect(() => {
    handleGetAllAdverts();
  }, []);

  const handleGetByOrderSelected = async ({ sortByPrice }) => {
    setOrderBy({ sortByPrice });
    if (sortByPrice !== "MR") {
      return await handleGetAllAdverts({ sortByPrice });
    }
    await handleGetAllAdverts();
  };

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
              <Select
                value={orderBy.sortByPrice}
                style={{ backgroundColor: "white" }}
                onChange={(e) =>
                  handleGetByOrderSelected({ sortByPrice: e.target.value })
                }
              >
                <MenuItem value={"MR"}>Mais recente</MenuItem>
                <MenuItem value={"DESC"}>{"Maior preço"}</MenuItem>
                <MenuItem value={"ASC"}>{"Menor preço"}</MenuItem>
              </Select>
            </C.divorder>
          </C.divra>
          <Anuncios adverts={adverts.data} loadedData={loadedData} />
        </C.divright>
      </C.Container>
      <ToastContainer style={{ zIndex: 100 }} />
    </C.page>
  );
};

export default Home;
