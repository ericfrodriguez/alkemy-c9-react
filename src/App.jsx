import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Saludo from './components/Saludo.jsx';

function App() {

  // Elementos <Saludo />
  // Contenedores <Saludo>Contenido<Saludo/>
  const titulo = 'Titulo del Inicio';

  return (
    <div>
      <Header tituloProp={titulo}/>
      {/* <Header titulo='Titulo para el Blog'/> */}
      <Saludo />
      <Footer />
    </div>
  )
}

export default App
