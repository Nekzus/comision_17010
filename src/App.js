import { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"

const App = () => {


    const producto = { titulo: "Producto 1" }
    const saludo = "Hola Mundo"
    const contadorInicial = 0

    const [contador, setContador] = useState(contadorInicial)
    const [mensaje, setMensaje] = useState("Todavia no hay nada, cargando...")

    const aumentarContador = () => {
        console.log("Aumentar contador")
        //contador++
        //contador = contador + 1
        setContador(contador + 1)
        //console.log(contador)
    }


    return (
        <BrowserRouter>
            <Header producto={producto} saludo={saludo} />
            <Main/>
            <Footer saludo={saludo} />
        </BrowserRouter>
    )
}

export default App;