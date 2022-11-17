import React, { useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo_venc.svg";
import { registerUser } from "../../services/user";
import { toast } from "react-toastify";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email | !emailConf | !senha | !name) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    try {
      await registerUser({ email, password: senha, name });
      toast.success("Usuário cadatrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error?.response?.status == 400) {
        setError("Usuário já existe");
      }
    }
  };

  return (
    <C.Container>
      <C.Content>
        <C.Logo src={Logo} />
        <C.txtconta>Criar conta</C.txtconta>
        <C.txtemail>Nome</C.txtemail>
        <C.Input
          type="text"
          placeholder="Digite seu Nome"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
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
        <C.Button type="button" Text="Inscrever-se" onClick={handleSignup}>
          Inscrever-se
        </C.Button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Cadastro;
