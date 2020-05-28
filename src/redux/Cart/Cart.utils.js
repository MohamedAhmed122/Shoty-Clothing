export const addItemToCart =(cartItems, newItem)=>{
    const exisitingItem = cartItems.find(cartItem => cartItem.id === newItem.id)

    if(exisitingItem){

        return cartItems.map(cartItem => 
            cartItem.id === newItem.id ?
            {
                ...cartItem,
                quantity :cartItem.quantity+1
            }:
            {
                cartItem,
            }
        )
    }
    return [...cartItems , { ...newItem, quantity : 1 }]
}