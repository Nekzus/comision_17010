import {useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"



const App = () => {
    
    
    const producto = {titulo:"Producto 1"}
    const saludo = "Hola Mundo"
    
    //let contador = 0
    //const resultado = useState(0)
    //const contador = resultado[0]
    //const setContador = resultado[1]

    const contadorInicial = 0

    const [contador, setContador] = useState(contadorInicial)
    
    
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
            <Main>
                <h1>Test Props</h1>
                <p>El contador va : {contador}</p>
                <button onClick={aumentarContador} >aumentar</button>
            </Main>
            <Footer saludo={saludo}/>
        </>
       
    )
}

export default App;