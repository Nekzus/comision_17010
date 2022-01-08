import { collection , getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { db } from "./firebase"

//1 - Conecto la app
//2 - Traigo la base de datos
//3 - Traigo la ref a la coleccion (fn collection)
//const productosCollection = collection(db, "productos")
//const ordenesCollection = collection(db, "ordenes")
//4 - Le hago una consulta a esa coleccion : getDocs - getDoc


const ItemListContainer = (prop) => {

    const [items, setItems] = useState([])
    const {id} = useParams() 



    const traerProductos = async () => {

        const productosCollection = collection(db, "productos")
        const consulta = await getDocs(productosCollection)

        const docs_ref = consulta.docs

        const formated = docs_ref.map(documento=>{
            //const producto = document.data()
            //producto.id = documento.id

            //const producto = {...documento.data(), id: documento.id}
            //return producto

            return {...documento.data(), id: documento.id}
        })

        setItems(formated)

        /* consulta.forEach(documento=>{
            console.log(documento)
        }) */


    }

    
    useEffect(() => {
        
       traerProductos()

    }, [id])


    if (items.length === 0) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div>
                {prop.greeting}
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.titulo} <NavLink to={`/item/${item.id}`}>ver detalle</NavLink> </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ItemListContainer
