import React from "react";

// Directory component
import Directory from "../../components/directory/directory.component";

// styles for this component
// import "./homepage.styles.scss";

// Styled Components
import { HomePageContainer } from "./homepage.styles";

// <Directory /> is a component with the following
/*
  <div className='directory-menu'>
    <div className='menu-item'>
      <div className='content'>
      </div>
    </div>
  </div>
*/
// const because functional component, don't really need to store any state
const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

// export component so we can use Homepage somewhere else
export default HomePage;
