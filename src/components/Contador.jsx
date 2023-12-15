import { useState, useEffect, useRef } from 'react';
import Button from './Button.jsx';

function Contador() {

    let cont = useRef(0); // Persistir ante una actualizacion/re-renderizacion
    
    const parrafo = useRef(null); // Enfocar a elementos HTML y manipularlos.
    console.log(parrafo);
    // pepito.current = 'Nuevo valor';
    // console.log(pepito);
    
    let [contador, setContador] = useState(0); // Estado local
    let [contador2, setContador2] = useState(0); // Estado local
    
    useEffect(() => {
        // console.log('Se montó el componente');

        return () => {
            // console.log('Se DESMONTÓ el componente');
        }
    }, [contador]);
    
    // SIN EL ARRAY DE DEPENDECIAS. Se ejecuta cuando se monta el componente y cuando se actualiza.
    // CON EL ARRAY VACIO. Se ejecuta una sola vez cuando se monta el componente.
    // CON VARIABLES EN EL ARRAY. Se ejecuta una sola vez cuando se monta el componente Y se ejecuta cuando cambia la variable del array
    
    const incrementar = () => {
        cont.current++;
        console.log(cont.current);
        // setContador(contador + 1);
        // console.log(contador);
        // parrafo.current.innerText = 'Nuevo valor por referencia'
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1);
        // console.log(contador2);
    }

    console.log('Actualizacion = Re-renderizacion');

    return (
        <div style={{
            margin: '20px 5px'
        }}>
            <p ref={parrafo}>Contador: {contador}</p>
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