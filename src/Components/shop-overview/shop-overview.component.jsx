import React from "react";

import { connect } from "react-redux";

import CollectionPreview from "../../Components/Collection-Preview/CollectionPreview.componet";
const ShopOverview = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = ({ shop: { collections } }) => ({
  collections
});
export default connect(mapStateToProps)(ShopOverview);
