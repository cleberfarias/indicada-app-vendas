import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Relatorios from "./pages/Relatorios";
import Clientes from "./pages/Clientes";
import Produtos from "./pages/Produtos";
import Caixa from "./pages/Caixa";
import Senha from "./pages/Senha";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Menu' element={<Menu/>} />
        <Route path='/Clientes' element={<Clientes/>} />
        <Route path='/Produtos' element={<Produtos/>} />
        <Route path='/Caixa' element={<Caixa/>} />
        <Route path='/senha' element={<Senha/>} />
        <Route path='/Relatorios' element={<Relatorios/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
