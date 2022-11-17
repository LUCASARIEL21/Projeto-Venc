import React from "react";
import { ToastContainer } from "react-toastify";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
