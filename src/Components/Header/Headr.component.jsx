import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/image/original.svg";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

import CartIcon from "../Cart-icon/Cart-Icon.component";
import CartDropdown from "../Cart-Dropdown/Cart-dropdown.component";
import "./Header.Style.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
// this function should allow us to access the root ruducer
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
// and now we are getting the null value by passing the ()
export default connect(mapStateToProps)(Header);
