import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  width: 400px;
  height: 400px;
  max-width: 800px;
  max-height: 800px;
  background-color: white;
  gap: 5px;
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
