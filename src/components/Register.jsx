import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Register() {
    const { setUser } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleImageName = (event) => {
        setImage(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

        // Cambiar el valor de mi contexto
        setUser({
            name: name,
            image: image
        });
    }

    return (
        <div style={{
            margin: '20px 5px'
        }}>
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSubmit}>
                <div style={{
                    margin: '20px 0px'
                }}>
                    <label htmlFor="name" style={{
                        margin: '0px 10px'
                    }}>
                        Nombre
                    </label>
                    <input onChange={handleChangeName} id="name" type="text" />
                </div>
                <div style={{
                    margin: '20px 0px'
                }}>
                    <label htmlFor="email" style={{
                        margin: '0px 10px'
                    }}>
                        Email
                    </label>
                    <input onChange={handleChangeEmail} id="email" type="text" />
                </div>
                <div style={{
                    margin: '20px 0px'
                }}>
                    <label htmlFor="image" style={{
                        margin: '0px 10px'
                    }}>
                        Imagen: 
                    </label>
                    <input onChange={handleImageName} id="image" type="text" />
                </div>
                <button type="submit">Registrarse</button>
            </form>
            {
                submitted
                    ? (<div style={{
                        margin: '20px 5px'
                    }}>
                        <h2>Datos Ingresados</h2>
                        <p>Nombre: {name}</p>
                        <p>Email: {email}</p>
                    </div>)
                    : null

            }
        </div>
    )
}

export default Register;