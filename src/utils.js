export const getItems = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setItems(json)
        })
        .catch(err => console.log(err))
}