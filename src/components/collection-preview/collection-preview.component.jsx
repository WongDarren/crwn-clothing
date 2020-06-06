import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

/*
  we want to return an outer div that contains our entire collection
  inside, will be a title 
  as well as the actual items themselves

  inside the preview, we want to map out the items array
*/ 

// .filter().map() chain of functions get called again when the component gets rendered or re-rendered
// performance concern on slower computers or component gets large - overhead
const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        // only want to display 4, so
        // filter items and index so that index is less than 4
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id}{...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;