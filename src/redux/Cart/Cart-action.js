
export const toggleCartHidden =()=>({
    type:'TOGGLE_CART_HIDDEN'
}) 

export const addItem =item =>({
    type: 'ADD_ITEM',
    payload: item
})

export const ClearItemFromCart = item =>({
    type: 'CLEAR_ITEM',
    payload:item
})
export const RemoveItem =(item) =>({
    type: 'REMOVE_ITEM',
    payload: item
})