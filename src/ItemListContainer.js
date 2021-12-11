import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"


const ItemListContainer = (prop) => {

    const [items, setItems] = useState([])
    const {id} = useParams() 
    
    useEffect(() => {
        
        if(!id){
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    setItems(json)
                })
                .catch(err => console.log(err))

        }else {
            fetch(`https://fakestoreapi.com/products/category/${id}`)
                .then(res => res.json())
                .then(json => {
                    setItems(json)
                })
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
                        <li key={item.id}>{item.title} <NavLink to="/item/id">ver detalle</NavLink> </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ItemListContainer
