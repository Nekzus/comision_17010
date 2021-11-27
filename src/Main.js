import Button from 'react-bootstrap/Button'
import ItemListContainer from './ItemListContainer'

const Main = (props) => {

    return (
        <main>
            <h2>Home</h2>
            {props.children}
            <ItemListContainer greeting="Bienvenidos al E-Commerce!"/>
            <Button variant="primary">Primary</Button>
        </main>
    )
}

export default Main
