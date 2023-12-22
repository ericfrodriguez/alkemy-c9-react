import { useEffect, useState } from "react";
import { Box } from "@mui/material"
import axios from "axios";

import Producto from "./Producto";

function ListaProductos() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        // Efecto secundario
        console.log('Obtencion de informacion API');
        axios.get('https://fakestoreapi.com/products')
            .then((respuesta) => {
                setProductos(respuesta.data)
            }) // En caso de exito
            .catch((error) => {
                console.log(error)
            }) // En caso de error
    }, [])

    return (
        <Box>
            {
                productos?.map((producto) => (
                    <Producto
                        key={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}
                        description={producto.description}
                    />
                ))
            }
        </Box>
    )
}
export default ListaProductos

