import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, inverted, isGoogleSignedIn, ...Props }) => (
  <button
    className={` ${inverted ? "inverted" : ""} ${
      isGoogleSignedIn ? "google-sign" : ""
    } custom-button`}
    {...Props}
  >
    {children}
  </button>
);

export default CustomButton;
