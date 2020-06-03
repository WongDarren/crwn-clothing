// This component will be used in the Directory component
import React from 'react';

// withRouter is a higher order component - essentially a function that takes a component as an argument and returns a modified component
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

// functional component because we don't really need our component to hold any states (at least for now)
// Instead of just passing in 'props', we can destructure our 'props' and pass in individual elements
//  in the form {title}.
// Now we can populate our component with the destructured value of title from our 'props'.
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
  // the size value may or may not exist, that's why we string interpolate it
  // with history, we want to push 
  <div 
    className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    // will be /somematchedURL/linkUrl
    // now we have some navigation set up in our menu item component
  >
    <div
      className='background-image'
      style={{
        // pass imageUrl using JS template strings
        backgroundImage: `url(${imageUrl})` // string interpolated value of imageUrl
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

// export MenuItem component to use somewhere else
export default withRouter(MenuItem);
// pass MenuItem into withRouter
// withRouter will return us a back a super-powered MenuItem component with access to location/ match/ history props