import Button from 'react-bootstrap/Button'
import ItemListContainer from './ItemListContainer'
import {Routes,Route} from "react-router-dom"


const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                {/* /item/:id  = ItemDetailContainer */}
            </Routes>
        </main>
    )
}

export default Main
