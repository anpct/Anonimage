import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from '../store';
import Navbar from './navbar';
import Home from './home';
import Login from './login';
import Register from './register';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './privateroute';
import { loadUser } from '../actions/auth'

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store = {store}>
      <Fragment>
      <Router >
      <Navbar/>
      <Switch>
        <PrivateRoute exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
     </Router>
     </Fragment>
     </Provider>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);