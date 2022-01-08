export const getItems = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setItems(json)
        })
        .catch(err => console.log(err))
}


const formatearYSetear = (arrayDeDocumentos) => {
    setItems(arrayDeDocumentos.map(documento=>{
        return {...documento.data(), id: documento.id}
    }))
}


export const traerProductos = async () => {

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



export const traerProductosPorCategoria = async () => {
    const productosCollection = collection(db, "productos")
    const constraint = where("categoria","==",id)
    const customQuery = query(productosCollection,constraint)
    const consulta = await getDocs(customQuery)
    formatearYSetear(consulta.docs)

    /* const docs_ref = consulta.docs

    const formated = docs_ref.map(documento=>{
        return {...documento.data(), id: documento.id}
    })

    setItems(formated) */
}



const useProductos = () => {

    useState()
    useEffect()

    //aca haces la consulta

    return {loading,items,error}

}