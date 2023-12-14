import { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
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