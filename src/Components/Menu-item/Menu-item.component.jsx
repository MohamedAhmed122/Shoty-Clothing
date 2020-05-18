import React from "react";
import "./Menu-item.style.scss";

const Menu = ({ title, img, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${img}) `,
      }}
    />

    <div className="cantainer">
      <h3 className="title">{title.toUpperCase()}</h3>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default Menu;
