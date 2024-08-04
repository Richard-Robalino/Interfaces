import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tarea from './components/Tarea';
import ListaTareas from './components/listatareas';

import './App.css';
import Nav from './components/Nav';
import TareaFormulario from './components/TareaFormulario';
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="inline-container">
      <Header />
      </div>
      <Nav />
      <div className='main-content' >
        <Sidebar />
        
        <div className='lista-tareas'>
          <h1>Lista de Tareas</h1>
          
          <ListaTareas/>
          <Tarea texto="Aprendiendo React en Diseño de Interfaces" />
      </div>

     
      </div>
    
    </div>
  );
}

export default App;
