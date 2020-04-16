import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from '../store';
import Navbar from './navbar';
import Home from './home';
import Login from './login';
import Register from './register';
import Alerts from './alerts';
import Admin from './Admin';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './privateroute';
import AdminRoute from './AdminRoute';
import { loadUser } from '../actions/auth'
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
  timeout: 5000,
  position: 'top center'
}

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store = {store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Fragment>
      <Router >
      <Navbar/>
      <Alerts/>
      <Switch>
        <PrivateRoute exact path='/' component={Home}/>
        <AdminRoute exact path='/admin' component={Admin}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
     </Router>
     </Fragment>
     </AlertProvider>
     </Provider>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);