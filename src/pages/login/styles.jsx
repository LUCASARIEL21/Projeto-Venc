import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: #ddd;
  max-width: 500px;
  padding: 20px;
  border-radius: 5px;
`;

export const Logo = styled.img`
  width: 50%;
  height: 30%;
`;

export const txtEntrar = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: limegreen;
`;

export const txtEmail = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-right: 400px;
  color: #676767;
`;

export const txtSenha = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-right: 400px;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  border: none;
`;

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: limegreen;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
`;