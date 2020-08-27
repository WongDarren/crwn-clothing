import React from "react";

// MenuItem component
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

// will need to be a CLASS component because we need to store the state value of the menu items that we need to pass and create the menu items with
// React.Component exists in the React namespace, so we don't have to import {component} from 'react'
class Directory extends React.Component {
  // always need constructor() {}
  constructor() {
    // need to call super so that we pull in all the things we need from our React.Component into our class
    super();

    // set our state value
    // the data for sections: [] is provided in the course
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          // hard coded linkUrl
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  // This is the HTML we will render.
  render() {
    return (
      <div className="directory-menu">
        {
          // We want to map through our sections and
          // pass the section objects into our MenuItem component so that we can create the menu items.
          // destructure section to {id, imageUrl, title}
          // when the keys that we pass in are the same (title = {title} imageUrl = {imageUrl}),
          //  there is an ES6 trick we can do by spreading the values together into ...otherSectionProps
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            // we want to map MenuItem and
            // pass in the destructured objects
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
}

// export Directory component to use somewhere else
export default Directory;
