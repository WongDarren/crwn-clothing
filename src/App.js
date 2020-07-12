import React from 'react';
/*
Switch component- Wrap Route components inside.
        The moment that a route inside of it finds a match in the path, it does not render anything else but that route.
Route component- Routing for pages
Link component- Lets us dynamically pass in property to='/path'

Instead of <Link to='/page> Page </Link> we could use 
<button onClick={() => props.history.push('/page')}> Page </button>
That would give us more dynamic access. 
*/
import {Switch, Route, Link} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import {auth} from './firebase/firebase.utils'

/*
Basic Properties for <Route />
exact -  True or False property. Means that the PATH must be EXACT for component to render
        For example, if I didn't have exact in the HomePage route, then HomePage would render on top of /shop and /signin.
        Because the HomePage path string exists in the other two path strings.
path - A string that equals the path itself.
component - The component that we want the route to render.
*/

// If I used Switch without the exact for HomePage, and I tried to go to /shop, then / would be rendered and that's it.
// It will match / first, then not render anything else after it. 
// Switch is useful because it gives us more control. Allows us to follow a pattern where we know as long as one route matches, then that's the only thing we're gonna render.
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // +++++++++++ This is how we handle our app being aware of any auth changes on firebase
  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);

    })
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }
  // +++++++++++ end firebase auth

  render() {
    return (
      <div> 
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
