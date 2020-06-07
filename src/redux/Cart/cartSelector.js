import {
    createSelector
} from 'reselect';

const selectCart = state => state.cart;


// the first argument will be the cart which is selectcart
// and the second argument you select the specific element or array that you want

export const selectCartItem = createSelector([selectCart],
    cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
    ),
)