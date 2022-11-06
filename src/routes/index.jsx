import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Home from "../pages/home"
import Login from "../pages/login"
import Cadastro from "../pages/cadastro"
import Meusanuncios from "../pages/meusanuncios"

const Private = ({ Item }) => {
  const { cadastrado } = useAuth()

  return cadastrado > 0 ? <Item /> : <Login />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route exact path="/meusanuncios" element={<Meusanuncios/>} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp