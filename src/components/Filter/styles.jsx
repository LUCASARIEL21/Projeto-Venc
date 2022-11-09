import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  width: 300px;
  overflow: auto;
  max-height: 700px;
  background-color: white;
  gap: 10px;
  border-radius: 5px;
`;

export const title = styled.div`
  width: 100%;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  text-align: center;
  font-size: 18px;
  color: black;
  background-color: gray;
`;

export const categorias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  &:hover {
    color: limegreen;
  }
`;
