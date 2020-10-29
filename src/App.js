import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Public from './views/PublicPage';
import Login from './views/LoginPage';
import Protected from './views/ProtectedPage';
import { DATA } from './data';

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

const signout = (cb) => {
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
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Public} />
        <Route path="/login" component={(props) => <Login {...props} authenticate={authenticate} />} />
        <PrivateRoute path="/protected" component={Protected} />
      </Switch>
    </Router>
  );
}

export default App;
