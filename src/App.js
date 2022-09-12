import React from "react";
import Login from "./componenets/Login";
import { Route, Routes , BrowserRouter } from "react-router-dom";
import Listado from "./componenets/Listado";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import './styles/app.css'
import Detalle from "./componenets/Detalle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/listado" element={<Listado/>} />
          <Route path="/detalle" element={<Detalle/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
