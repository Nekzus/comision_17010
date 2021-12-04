import { useEffect, useState } from "react"

//1) Arranca la primera vez el componente sin datos (estado inicial)
//2) Hago el primer render
//3) Hago un efecto
//4) Hago una peticion ajax

const ItemListContainer = (prop) => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setItems(json)
            })
            .catch(err=>console.log(err))

    },[])

    if(items.length === 0){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }else{
        return (
            <div>
                {prop.greeting}
                <ul>
                    {items.map(item=>(
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ItemListContainer
