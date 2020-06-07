import React from "react";

import CustomButton from "../custom-button/custtom-button.component";
import CartItem from "../Cart-Item/Cart-Item.component";

import { connect } from "react-redux";

import "./Cart-dropdown.style.scss";


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton inverted >GO TO CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });
  
  export default connect(mapStateToProps)(CartDropdown);