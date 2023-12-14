import { useState } from 'react';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Saludo from './components/Saludo.jsx';
import Register from './components/Register.jsx';
import Contador from './components/Contador.jsx';

function App() {
  const [mostrar, setMostrar] = useState(true);
  // Elementos <Saludo />
  // Contenedores <Saludo>Contenido<Saludo/>
  const titulo = 'Titulo del Inicio';

  return (
    <div>
      <Header tituloProp={titulo} />
      <Saludo />
      {
        mostrar ? <Contador /> : null
      }
      <div style={{
        margin: '20px 5px'
      }}>
        <button onClick={() => setMostrar(true)}>Mostrar</button>
        <button onClick={() => setMostrar(false)}>Ocultar</button>
      </div>
      <Footer />
      {/* <Header titulo='Titulo para el Blog'/> */}
      {/* <Register /> */}
    </div>
  )
}

export default App
