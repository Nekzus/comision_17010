import Nav from "./Nav"

const Header = ({producto, saludo}) => {
    
    //const {producto, saludo} = parametros

    console.log(producto)
    //const otroTitulo = parametros.producto.titulo + " Mas texto"

    //los props son de solo lectura , no deberia cambiarles el valor
    //parametros.producto.titulo = "Producto 2"

    //console.log(otroTitulo)

    return (
        <header id="main-header">
            <h1>{saludo}</h1>
            <Nav />
        </header>
    )
}

export default Header;