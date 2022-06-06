import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import Formulario from './components/formulario';
import Operation from './components/operations';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './main';
import "./grados.css"

function App() {
  return (<>
  <BrowserRouter><Routes>
    <Route path="/calculadora" element={<Calculator/>}></Route>
    <Route path="/formulario" element={<Formulario/>}></Route>
    <Route path="/operaciones" element={<Operation/>}></Route>
    </Routes><Main/></BrowserRouter>
  </>
  );
}

export default App;
