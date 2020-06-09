export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ? {
        ...cartItem,
        quantity: cartItem.quantity + 1
      } :
      cartItem
    );
  }

  return [...cartItems, {
    ...cartItemToAdd,
    quantity: 1
  }];
};

export const RemoveItem = (cardItems, cardItemToRemove) => {
  const existingCartItem = cardItems.find(
    cardItem => cardItem.id === cardItemToRemove.id
  )
  if (existingCartItem === 1) {
    cardItems.filter(cardItem => cardItem.id !== cardItemToRemove.id);
  }
  return cardItems.map(cardItem =>
    cardItem.id === cardItemToRemove.id ? {
      ...cardItem,
      quantity: cardItem.quantity - 1
    } :
    cardItem
  )
}