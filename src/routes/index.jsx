import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/home";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Meusanuncios from "../pages/meusanuncios";

const Private = ({ Item }) => {
  const userToken = localStorage.getItem("userToken");

  return userToken ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route
            exact
            path="/meusanuncios"
            element={<Private Item={Meusanuncios} />}
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
