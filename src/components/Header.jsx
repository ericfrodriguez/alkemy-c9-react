
import '../styles/Header.css'
import Button from './Button';

// function Header(props) {
function Header({ tituloProp }) {
    // const { titulo } = props;

    function handleButtonClick(button) {
        alert('Click en el boton: ' + button)
    }

    return (
        <header>
            <Button tarea={handleButtonClick} label='Inicio'/>
            <Button tarea={handleButtonClick} label='Blog'/>
            <Button tarea={handleButtonClick} label='Contacto'/>
        </header>
    )
}

export default Header;