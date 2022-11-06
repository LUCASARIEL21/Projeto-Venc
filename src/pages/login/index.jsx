import React, { useState } from "react"
import * as C from "./styles"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Logo from "../../assets/logo_venc.svg"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos")
      return
    }

    const res = login(email, senha)

    if (res) {
      setError(res)
      return
    }

    navigate("/home")
  }

  return (
    <C.Container>
      <C.Content>
        <C.Logo src={Logo}/>
        <C.txtEntrar>Entrar na conta</C.txtEntrar>
        <C.txtEmail>Email</C.txtEmail>
          <C.Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <C.txtSenha>Senha</C.txtSenha>
          <C.Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <C.Button type="button" Text="Entrar" onClick={handleLogin}>Entrar</C.Button>
          <C.LabelSignup>
            Não tem uma conta?
            <C.Strong>
              <Link to="/cadastro">&nbsp;Cadastre-se</Link>
            </C.Strong>
          </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}

export default Login