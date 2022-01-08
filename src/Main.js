//import Button from 'react-bootstrap/Button'
import ItemListContainer from './ItemListContainer'
import {Routes,Route} from "react-router-dom"
import ItemDetailContainer from './ItemDetailContainer'


const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                {/* <Route path="/cart" element={<Cart/>}/> */}
            </Routes>
        </main>
    )
}

export default Main
