import React from 'react';

import CustomButtton from '../custom-button/custtom-button.component';

import './Cart-dropdown.style.scss';

const CartDropdown =()=>(
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButtton inverted>GO TO CHECKOUT</CustomButtton>
    </div>
)
export default CartDropdown; 
