import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignedIn, ...Props }) => (
  <button
    className={`${isGoogleSignedIn ? "google-sign" : ""} custom-button`}
    {...Props}
  >
    {children}
  </button>
);

export default CustomButton;
