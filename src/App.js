import { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

const productosIniciales = [
    { id : 1, nombre : "Producto 1" },
    { id : 2, nombre : "Producto 2" },
    { id : 3, nombre : "Producto 3" },
    { id : 4, nombre : "Producto 4" }
]


const App = () => {


    const producto = { titulo: "Producto 1" }
    const saludo = "Hola Mundo"

    //let contador = 0
    //const resultado = useState(0)
    //const contador = resultado[0]
    //const setContador = resultado[1]

    const contadorInicial = 0

    const [contador, setContador] = useState(contadorInicial)
    const [mensaje, setMensaje] = useState("Todavia no hay nada, cargando...")
    const [productos,setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res, rej) => {

            setTimeout(() => {
                //console.log("Aca pido un array de productos a una DB")
                if (Math.random() > 0.5) {
                    res(productosIniciales)
                }else{
                    rej()
                }
            }, 2000)

        })
        //console.log(promesa)
        //promesa.then(()=>{})
        //promesa.catch(()=>{})
        promesa
            .then((resultado) => {
                //console.log("Salio todo bien")
                setMensaje("Todo salio bien")
                setProductos(resultado)
            })
            .catch(() => {
                //console.log("Salio todo mal")
                setMensaje("Todo salio Mal")
            })

        //promesa.finally()


    }, [])

    const aumentarContador = () => {
        console.log("Aumentar contador")
        //contador++
        //contador = contador + 1
        setContador(contador + 1)
        //console.log(contador)
    }


    return (
        <>
            <Header producto={producto} saludo={saludo} />
            <Main productos={productos}>
                <h1>Test Props</h1>
                <p>{mensaje}</p>
                <p>El contador va : {contador}</p>
                <button onClick={aumentarContador} >aumentar</button>
            </Main>
            <Footer saludo={saludo} />
        </>

    )
}

export default App;