import styled from "styled-components";

export const page = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  background: #dddd;
  height: 100%;
  overflow: auto;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const divleft = styled.div`
  position: fixed;
  left: 20px;
  top: 150px;
  min-width: "300px";
`;

export const divright = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 600px;
  right: 30px;
  top: 0px;
  left: 340px;
`;

export const divra = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const divresult = styled.div`
  color: #000;
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
  font-size: 13px;
  padding: 5px;
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
