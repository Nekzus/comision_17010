import Button from 'react-bootstrap/Button'
import ItemListContainer from './ItemListContainer'

const Main = () => {
    return (
        <main>
            <h2>Home</h2>
            <ItemListContainer greeting="Bienvenidos al E-Commerce!"/>
            <Button variant="primary">Primary</Button>
        </main>
    )
}

export default Main
