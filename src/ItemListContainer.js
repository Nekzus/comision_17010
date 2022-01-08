import { collection , getDocs, query, where } from "firebase/firestore"
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

    //console.log(id)

    const formatearYSetear = (arrayDeDocumentos) => {
        setItems(arrayDeDocumentos.map(documento=>{
            return {...documento.data(), id: documento.id}
        }))
    }


    const traerProductos = async () => {

        const productosCollection = collection(db, "productos")
        const consulta = await getDocs(productosCollection)
        formatearYSetear(consulta.docs)


        /* const docs_ref = consulta.docs

        const formated = docs_ref.map(documento=>{
            const producto = document.data()
            producto.id = documento.id

            const producto = {...documento.data(), id: documento.id}
            return producto

            return {...documento.data(), id: documento.id}
        })

        setItems(formated) */

        /* consulta.forEach(documento=>{
            console.log(documento)
        }) */

    }

    

    const traerProductosPorCategoria = async () => {
        const productosCollection = collection(db, "productos")
        const constraint1 = where("categoria","==",id)
        const constraint2 = where("precio",">",100)
        const customQuery = query(productosCollection,constraint1,constraint2)
        const consulta = await getDocs(customQuery)
        formatearYSetear(consulta.docs)

        /* const docs_ref = consulta.docs

        const formated = docs_ref.map(documento=>{
            return {...documento.data(), id: documento.id}
        })

        setItems(formated) */
    }

    useEffect(() => {
        
        if(id){
            traerProductosPorCategoria()
        }else{
            traerProductos()
        }

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
                        <li key={item.id}>{item.titulo} - ${item.precio} <NavLink to={`/item/${item.id}`}>ver detalle</NavLink> </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ItemListContainer
