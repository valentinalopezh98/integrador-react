export const addItemToCart = (cartItems, product) => {
    const productInCart = cartItems.find((item) => {
        item.id === product.id
    })

    if (productInCart){
        return cartItems.map((item) => {
            return item.id === productInCart.id ? 
            {
                ...item,
                quantity : item.quantity ++ 
            } :
            item
        })
    } else {
        return [
            ...cartItems,
            {
                ...product,
                quantity: 1
            }
        ]
    }
}