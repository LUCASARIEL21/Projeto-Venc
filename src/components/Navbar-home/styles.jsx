import styled from "styled-components";

export const header = styled.div`
  display: flex;
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

export const divsearch = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ddd;
  height: 50px;
  width: 600px;
`;

export const search = styled.input`
  border: none;
  height: 100%;
  width: 100%;
`;

export const iconsearch = styled.img`
  cursor: pointer;
  width: 5%;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 3px;
  margin-right: 3px;
`;

export const divrigth = styled.div`
  display: flex;
  align-items: center;
`;

export const divdrop = styled.div`
  min-width: 10em;
  position: relative;
  margin: 2em;
  box-sizing: border-box;
`;

export const divmenu = styled.div`
  height: 2rem;
  width: 9rem;
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
  padding: 0.5em 0.5em;
  bottom: -3.6rem;
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
  margin-right: 50px;
  outline: none;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: limegreen;
  color: white;
  font-weight: 600;
  font-size: 14px;
`;
