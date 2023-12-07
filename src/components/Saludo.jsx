
function Saludo() {

    const nombre = 'Eric';
    const isActive = true;

    const estilo = {
        color: isActive ? 'green' : 'red',
        fontSize: isActive ? '24px' : '16px',
        fontWeight: isActive ? 'bold' : '400'
    }

    return (
        <div>
            <h1>Esto es un titulo</h1>
            <img src="" alt="" />
            <p style={estilo} className={isActive ? 'bg-blue' : 'bg-red'}>Hola {nombre}!</p>
            <div />
        </div>
    )
}

export default Saludo;