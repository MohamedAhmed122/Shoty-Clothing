import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, ...Props }) => (
  <button className="custom-button" {...Props}>
    {children}
  </button>
);

export default CustomButton;
