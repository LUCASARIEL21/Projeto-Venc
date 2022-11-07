import React, { useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../assets/logo_venc.svg";
import { authenticate } from "../../services/user";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const token = await authenticate({ email, password });
      localStorage.setItem("userToken", JSON.stringify(token));
      navigate("/home");
    } catch (error) {
      if (error?.response?.status == 400) {
        setError("Usuário ou senha incorreto");
      }
    }
  };

  return (
    <C.Container>
      <C.Content>
        <C.Logo src={Logo} />
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
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <C.Button type="button" Text="Entrar" onClick={handleLogin}>
          Entrar
        </C.Button>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/cadastro">&nbsp;Cadastre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Login;
