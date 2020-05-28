import React from "react";

import CustomButton from "../custom-button/custtom-button.component";

import "./cart-dropdown.style.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton >GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
