import '../styles/Saludo.css';

function Saludo() {

    const nombre = 'Eric';
    const isActive = true;

    // const estilo = {
    //     color: isActive ? 'green' : 'red',
    //     fontSize: isActive ? '24px' : '16px',
    //     fontWeight: isActive ? 'bold' : '400'
    // }

    // Logica para renderizar

    return (
        <div className="saludo-container">
            <h1 className="saludo-title">Esto es un titulo</h1>
            <p  className={isActive ? 'bg-blue' : 'bg-red'}>Hola {nombre}!</p>
            <div />
        </div>
    )
}

export default Saludo;