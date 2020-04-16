import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth'

class Navbar extends Component{

static propTypes ={
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired
}
render(){
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">ANP</a>
      { this.props.isAuthenticated?
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <button onClick={this.props.logout} className="btn btn-link">
            Logout
          </button>
            </li>
          </ul>
        </div>:
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to='/register' className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
            <Link to='/login' className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      }
        </div>
      </nav>
    )
}
}


const mapStateToProps = (state) =>({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {logout})(Navbar)