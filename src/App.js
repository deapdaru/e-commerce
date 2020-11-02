import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Public from './views/PublicPage';
import Login from './views/LoginPage';
import Shop from './views/ShopPage';
import Cart from './views/CartPage';
import { ProductsProvider } from './components/ProductsContext';

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
  localStorage.setItem("isAuthenticated", true);
  setTimeout(cb, 1000)
}

const logout = () => {
  localStorage.setItem("isAuthenticated", false)
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    localStorage.isAuthenticated === 'true'
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Public} />
          <Route path="/login" component={(props) => <Login {...props} authenticate={authenticate} />} />
          <PrivateRoute path="/shop" component={(props) => <Shop {...props} logout={logout} />} />
          <PrivateRoute path="/cart" component={(props) => <Cart {...props} logout={logout} />} />
        </Switch>
      </Router>
    </ProductsProvider>
  );
}

export default App;
