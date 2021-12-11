import { useState } from 'react'



//State Uplifting



const ListadoParrafos = ({usuarios,onEvent}) => {

    const handleClick = () => {
        onEvent("Soy el hijo")
    }

    return (
        <>
            {usuarios.map((usuario,index) => {
                return <p key={index}>{usuario} <button onClick={handleClick}>click</button></p>
            })}
        </>
    )
}











const ListadoDropdow = ({usuarios,onEvent}) => {

    const handleChange = () => {
        onEvent("Soy el hijo")
    }

    return (
        <select onChange={handleChange}>
            {usuarios.map((usuario,index) => {
                return <option key={index}>{usuario}</option>
            })}
        </select>
    )
}








const TestEventos = () => {

    const [valor,setValor] = useState("")
    const [usuarios,setUsuarios] = useState([])
    const [toggle,setToggle] = useState(false)


    const hacerClick = (e) => {
        //usuarios.push()

        //const copia = usuarios
        //copia.push(valor)

        //const copia = usuarios.splice()

        /* const copia = usuarios.slice(0)
        copia.push(valor) */

        /* const copia = [...usuarios]
        copia.push(valor) */

        //const nuevosUsuarios = [...usuarios,valor]
        //setUsuarios(nuevosUsuarios)

        setUsuarios([...usuarios,valor])
        setValor("")
    }

    const handleChange = (e) => {
        const valor = e.target.value
        setValor(valor)
    }

    const manejarEventoDelHijo = (params) => {
        console.log("click del padre")
        console.log("Params : ",params)
    }

    if(toggle){
        return (
            <div>
                <input type="text" onChange={handleChange} value={valor}/>
                <button onClick={hacerClick}>click</button>
                <ListadoParrafos onEvent={manejarEventoDelHijo} usuarios={usuarios}/>
            </div>
        )
    }else{
        return (
            <div>
                <input type="text" onChange={handleChange} value={valor}/>
                <button onClick={hacerClick}>click</button>
                <ListadoDropdow onEvent={manejarEventoDelHijo} usuarios={usuarios}/>
            </div>
        )
    }
}

export default TestEventos
