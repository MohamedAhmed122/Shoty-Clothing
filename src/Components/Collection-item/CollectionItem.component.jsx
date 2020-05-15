import React from "react";

import "./CollectionItem.style.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection">
    <div className="image"
     style={{ backgroundImage: `url(${imageUrl})`}} 
     />
    <div className="collection-footer">
      <span className="name">{name.toUpperCase()}</span>
      <span className="price">{price}$</span>
    </div>
  </div>
);

export default CollectionItem;
