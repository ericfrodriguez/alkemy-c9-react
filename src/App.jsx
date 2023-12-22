import { useState } from 'react';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Saludo from './components/Saludo.jsx';
import Register from './components/Register.jsx';
import Contador from './components/Contador.jsx';
import Contenedor from './components/Contenedor.jsx';
import UserProvider from './context/UserProvider.jsx';
import MyAppBar from './components/MyAppBar.jsx';
import ListaProductos from './components/ListaProductos.jsx';


function App() {
  const [mostrar, setMostrar] = useState(true);
  // Elementos <Saludo />
  // Contenedores <Saludo>Contenido<Saludo/>
  const titulo = 'Titulo del Inicio';

  return (
    <UserProvider>
      {/* {
        mostrar ? <Contador /> : <p>Contador oculto</p>
      } */}
      <MyAppBar />
      <div style={{
        minHeight: '100vh',
        padding: '20px'
      }}>

        <ListaProductos />

      </div>
      {/* <button onClick={() => setMostrar(true)}>Mostrar</button>
        <button onClick={() => setMostrar(false)}>Ocultar</button> */}
      {/* <Saludo /> */}
      {/* <Contenedor>
      </Contenedor> */}
      {/* <Register /> */}
      <Footer />
      {/* <Contador /> */}
      {/* <Header titulo='Titulo para el Blog'/> */}
    </UserProvider>
  )
}

export default App
