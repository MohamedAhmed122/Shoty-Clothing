import {
    addItemToCart
} from '../Cart/Card.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
    console.log(state.cartItems.name);
    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            }
            case 'ADD_ITEM':
                return {
                    ...state,
                    //cartItems:[...state.cartItem,action.payload]
                    cartItems: addItemToCart(state.cartItems, action.pyload)

                }
                default:
                    return state

    }

}




export default cartReducer;