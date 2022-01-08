import { collection, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "./firebase"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    const getItem = async () => {
        const productosCollection = collection(db, "productos")
        const referencia = doc(productosCollection, id)
        const documento = await getDoc(referencia)
        //console.log(documento.data())
        //setItem({...documento.data(), id: documento.id})
        setItem({ ...documento.data() })
    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div>
            <h1>{item.titulo} - $ {item.precio} </h1>
            <img src={item.imagen} alt="logo" />
            <p>unidades disponibles : {item.stock}</p>
            <p>{item.descripcion}</p>
        </div>
    )
}

export default ItemDetailContainer
