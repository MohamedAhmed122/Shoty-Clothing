import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/image/ShoppingBag.svg";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/Cart/Cart-action";

import "./Cart-Icon.style.scss";

const CartIcon = ({ toggleCartHidden, countItems }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{countItems}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  countItems: cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// on click on the icon we will send an action toggleCartHidden
// then this action will update the state from tru to false
