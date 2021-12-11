import { createContext , useState } from "react"


//Patron Provider

//const context = createContext({nombre:"Horacio"})
//const Consumer = context.Consumer
//const Provider = context.Provider


export const context = createContext()

const { Provider } = context


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const agregarProducto = (producto,cantidad) => {
        isInCart()
        //carrito[0].cantidad = +cantidad ESTO NO!!!
        //const res = array.filter(condicion) // [{}]
    }

    const eliminarProducto = (id) => {}

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidad(0)
    }

    const isInCart = (id) => {}

    const valorContexto = { 
        carrito,
        cantidad,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito
     }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider