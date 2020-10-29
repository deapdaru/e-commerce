import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Public from './views/PublicPage';
import Login from './views/LoginPage';
import Protected from './views/ProtectedPage';
import { DATA } from './data';

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

// console.log(DATA);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Public} />
        <Route path="/login" component={(props) => <Login {...props} fakeAuth={fakeAuth} />} />
        <PrivateRoute path="/protected" component={Protected} />
      </Switch>
    </Router>
  );
}

export default App;
