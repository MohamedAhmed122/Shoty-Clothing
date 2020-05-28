import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/image/ShoppingBag.svg";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/Cart/Cart-action";

import "./Cart-Icon.style.scss";

const CartIcon = ({toggleCartHidden}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);

// on click on the icon we will send an action toggleCartHidden
// then this action will update the state from tru to false