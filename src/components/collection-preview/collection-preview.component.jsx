import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

//import "./collection-preview.styles.scss";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

/*
  we want to return an outer div that contains our entire collection
  inside, will be a title 
  as well as the actual items themselves

  inside the preview, we want to map out the items array
*/

// .filter().map() chain of functions get called again when the component gets rendered or re-rendered
// performance concern on slower computers or component gets large - overhead

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
