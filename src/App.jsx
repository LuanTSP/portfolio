import Footer from "./components/footer"
import Header from "./components/header"
import Home from "./components/home"
import Contato from "./components/contato"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
