import styled from "styled-components";

export const page = styled.div`
  margin: 0;
  padding: 0;
  background: #dddd;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100%;
`;

export const divleft = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 100px;
  align-items: initial;
  justify-content: center;
  height: 100%;
  width: 30%;
`;

export const divright = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 70%;
`;

export const divra = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  width: 100%;
`;

export const divresult = styled.div`
  height: 25px;
  width: 80px;
  margin-left: 50px;
  color: #c3c3c3;
`;

export const divorder = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10em;
  margin: 2em;
  box-sizing: border-box;
`;

export const txt = styled.h1`
  text-align: left;
  font-size: 12px;
  padding: 5px;
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
  background: white;
  opacity: 0.8;
`;

export const caret = styled.div`
  padding: 1px;
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
  bottom: -1.7rem;
  border: 1px solid transparent;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  right: 1px;
  width: 100%;
  background: white;
  transition: 0.2s;
  z-index: 1;
`;
