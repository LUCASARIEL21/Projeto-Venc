import React from "react"
import RoutesApp from "./routes"
import { AuthProvider } from "./hooks/auth"
import GlobalStyle from "./styles/global"

function App() {

  return (
    <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
  )
}

export default App
