import React from "react";

import { connect } from "react-redux";

import {
  ClearItemFromCart,
  RemoveItem,
  addItem,
} from "../../redux/Cart/Cart-action";
import "./checkout-items.style.scss";

const CheckoutItems = ({
  cartItems,
  ClearItemFromCart,
  addItem,
  RemoveItem,
}) => {
  const { imageUrl, name, price, quantity } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => RemoveItem(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span
        className="remove-button"
        onClick={() => ClearItemFromCart(cartItems)}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ClearItemFromCart: (item) => dispatch(ClearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  RemoveItem: (item) => dispatch(RemoveItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItems);
