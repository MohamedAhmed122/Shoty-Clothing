import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/image/original.svg";

import { auth } from "../../firebase/firebase.utils";

import "./Header.Style.scss";

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);


export default Header;
