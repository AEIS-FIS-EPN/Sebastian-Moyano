import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <body>
    <header>
        <h1>Mi Portafolio</h1>
    </header>

    <section id='proyectos'>
      <h2>Proyectos</h2>

      <React.Fragment>
        <App imagen={"src/assets/react.png"} nombre={"Proyecto React"} descripcion={"Portafolio Personal con React"}/>
        <App imagen={"src/assets/java.png"} nombre={"Proyecto Java"} descripcion={"Proyecto Java"}/>
      </React.Fragment>
      
    </section>
    
    <footer>
      <section id='contacto'>
        <h2>Contacto</h2>
      </section>
    </footer>
  </body>
)
