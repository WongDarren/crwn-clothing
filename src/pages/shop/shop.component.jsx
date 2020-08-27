import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    // need access to our states, so let's pass in props to super()
    super(props);

    this.state = {
      // SHOP_DATA is an array of objects that we imported
      collections: SHOP_DATA,
    };
  }

  render() {
    // destructure collections
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          // map over our collections
          // and render out CollectionPreview where key is the id
          // so we need to destructure collections to {id, ...otherCollectionProps}
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
