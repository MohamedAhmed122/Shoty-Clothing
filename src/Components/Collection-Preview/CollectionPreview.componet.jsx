import React from "react";
import CollectionItem from "../Collection-item/CollectionItem.component";
import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview" >
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...props }) => (
          <CollectionItem key={id} {...props} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
 