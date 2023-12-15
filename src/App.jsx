import { useState } from 'react';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Saludo from './components/Saludo.jsx';
import Register from './components/Register.jsx';
import Contador from './components/Contador.jsx';
import Contenedor from './components/Contenedor.jsx';
import UserProvider from './context/UserProvider.jsx';

function App() {
  const [mostrar, setMostrar] = useState(true);
  // Elementos <Saludo />
  // Contenedores <Saludo>Contenido<Saludo/>
  const titulo = 'Titulo del Inicio';

  return (
    <UserProvider>
      <Header tituloProp={titulo} />
      {/* {
        mostrar ? <Contador /> : <p>Contador oculto</p>
      } */}
      <Contenedor>
        <Register />
        {/* <Contador /> */}
      </Contenedor> 

      {/* <button onClick={() => setMostrar(true)}>Mostrar</button>
        <button onClick={() => setMostrar(false)}>Ocultar</button> */}
      {/* <Saludo /> */}
      <Footer />
      {/* <Header titulo='Titulo para el Blog'/> */}
    </UserProvider>
  )
}

export default App
