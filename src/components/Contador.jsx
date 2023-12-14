import { useState, useEffect } from 'react';
import Button from './Button.jsx';

function Contador() {
    let [contador, setContador] = useState(0); // Estado local
    let [contador2, setContador2] = useState(0); // Estado local

    useEffect(() => {
        console.log('Se montó el componente');

        return () => {
            console.log('Se DESMONTÓ el componente');
        }
    }, [contador]);

    // SIN EL ARRAY DE DEPENDECIAS. Se ejecuta cuando se monta el componente y cuando se actualiza.
    // CON EL ARRAY VACIO. Se ejecuta una sola vez cuando se monta el componente.
    // CON VARIABLES EN EL ARRAY. Se ejecuta una sola vez cuando se monta el componente Y se ejecuta cuando cambia la variable del array

    const incrementar = () => {
        setContador(contador + 1);
        // console.log(contador);
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1);
        // console.log(contador2);
    }

    return (
        <div style={{
            margin: '20px 5px'
        }}>
            <p>Contador: {contador}</p>
            <p>Contador: {contador2}</p>
            <Button
                label='Contador 1'
                tarea={incrementar}
            />
            <Button
                label='Contador 2'
                tarea={incrementar2}
            />
        </div>
    )
}

export default Contador;