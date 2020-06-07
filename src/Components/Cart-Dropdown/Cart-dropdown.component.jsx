import React from "react";

import CustomButton from "../custom-button/custtom-button.component";
import CartItem from "../Cart-Item/Cart-Item.component";

import { connect } from "react-redux";

import {withRouter} from 'react-router-dom'

import {toggleCartHidden} from  '../../redux/Cart/Cart-action'

import "./Cart-dropdown.style.scss";

const CartDropdown = ({ cartItems,history, toggleCartHidden}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={()=>{
      history.push('./checkout')
      toggleCartHidden()
      }} inverted>GO TO CHECKOUT</CustomButton>
  </div>
); 

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
const mapDispatchToprops =(dispatch)=>({
  toggleCartHidden :() => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToprops)(CartDropdown));
