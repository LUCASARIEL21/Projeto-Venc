import styled from "styled-components";

export const header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const divimg = styled.div`
  margin-left: 100px;
  height: 90%;
  width: 20%;
`;

export const logo = styled.img`
  width: 60%;
`;

export const divrigth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 700px;
`;

export const txt = styled.h5`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const divdrop = styled.div`
  min-width: 10em;
  position: relative;
  margin: 2em;
  box-sizing: border-box;
`;

export const divmenu = styled.div`
  height: 2rem;
  width: 8rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border-radius: 0.5em;
  padding: 1em;
  color: black;
  position: relative;
  cursor: pointer;
  & :hover {
    color: black;
    background-color: white;
  }
`;

export const user = styled.img`
  width: 20%;
  border: none;
`;

export const caret = styled.div`
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid green;
  transition: 0.3s;
  & :rotate {
    transform: rotate(180deg);
  }
`;

export const list = styled.ul`
  font-weight: 600;
  list-style-type: none;
  position: absolute;
  padding: 0.2em 0.5em;
  bottom: -2.82rem;
  border: 1px solid transparent;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  right: 1px;
  width: 100%;
  background: white;
  transition: 0.2s;
  z-index: 1;
  & :hover {
    border: 1px solid white;
    border-radius: 0.5em;
    background: white;
    opacity: 0.5;
  }
`;

export const anunciar = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: limegreen;
  color: white;
  font-weight: 600;
  font-size: 14px;
  max-width: 200px;
  margin-right: 100px;
`;
