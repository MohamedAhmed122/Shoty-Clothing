import {
  addItemToCart,
  RemoveItem
} from './Cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        hidden: !state.hidden
      };
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case 'CLEAR_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(cardItem => cardItem.id !== action.payload.id)
      }
      case 'REMOVE_ITEM':
        return {
          ...state,
          cartItems: RemoveItem(state.cartItems, action.payload)
        }
        default:
          return state;
  }
};

export default cartReducer;