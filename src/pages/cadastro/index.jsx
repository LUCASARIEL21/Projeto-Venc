import React, { useState } from "react"
import * as C from "./styles"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Logo from "../../assets/logo_venc.svg"

const Cadastro = () => {
  const [email, setEmail] = useState("")
  const [emailConf, setEmailConf] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const { cadastro } = useAuth()

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos")
      return
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais")
      return
    }

    const res = cadastro(email, senha)

    if (res) {
      setError(res)
      return
    }

    alert("Usuário cadatrado com sucesso!")
    navigate("/")
  };

  return (
    <C.Container>
      <C.Content>
        <C.Logo src={Logo}/>
        <C.txtconta>Criar conta</C.txtconta>
        <C.txtemail>Email</C.txtemail>
        <C.Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <C.txtconfirme>Confirmar Email</C.txtconfirme>
        <C.Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <C.txtsenha>Senha</C.txtsenha>
        <C.Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <C.Button type="button" Text="Inscrever-se" onClick={handleSignup}>Inscrever-se</C.Button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  )
}

export default Cadastro;