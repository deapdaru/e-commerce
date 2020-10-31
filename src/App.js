import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Public from './views/PublicPage';
import Login from './views/LoginPage';
import Shop from './views/ShopPage';
import { DATA } from './data';

export const ProductsContext = createContext();

/* Old Auth
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}
*/

const authenticate = (cb) => {
  sessionStorage.setItem("isAuthenticated", true);
  setTimeout(cb, 100) // fake async
}

const logout = (cb) => {
  sessionStorage.setItem("isAuthenticated", false);
  setTimeout(cb, 100) // fake async
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    sessionStorage.isAuthenticated === 'true'
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  const [ cartItems, setCartItems ] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Public} />
        <Route path="/login" component={(props) => <Login {...props} authenticate={authenticate} />} />
        <ProductsContext.Provider value={{DATA, cartItems, setCartItems}}>
          <PrivateRoute path="/shop" component={(props) => <Shop {...props} logout={logout} />} />
        </ProductsContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
