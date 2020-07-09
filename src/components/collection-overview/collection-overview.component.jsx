import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

import "./collection-overview.styles.scss";

const CollectionOverview = () => {
  const collections = useSelector(selectShopCollections);
  const collectionsArray = Object.keys(collections).map(collectionKey => collections[collectionKey])

  return (
    <div className="collection-overview">
      {collectionsArray.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
