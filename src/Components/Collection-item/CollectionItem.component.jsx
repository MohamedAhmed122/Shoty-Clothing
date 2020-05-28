import React from "react";

import CustomButton from "../custom-button/custtom-button.component";

import { connect } from "react-redux";

import { addItem } from "../../redux/Cart/Cart-action";

import "./CollectionItem.style.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  //console.log(item.id);
  return (
    <div className="collection">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name.toUpperCase()}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
