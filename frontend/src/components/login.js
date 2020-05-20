import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth'
import PropTypes from 'prop-types';

export class Login extends Component {
    state = {
        username: '',
        password: '',
      };
    
    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
      admin: PropTypes.bool
    }

      onSubmit = (e) =>{
          e.preventDefault()
          this.props.login(this.state.username, this.state.password)
      }
    
      onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
      render() {
        if(this.props.isAuthenticated)
        {
          return <Redirect to="/"/>
        }
        const { username, password } = this.state;
        return (
          <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
              <h2 className="text-center">Login</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
            <div className="card card-body mt-5">
            Anonimage is a mobile friendly web app that uses machine learning to assess the quality of anonymously shared images.
            A user first makes an account in the web app, after making an account the user is able to upload images to the web app.
             Once an image is uploaded the quality score of the image is automatically calculated, this image is not yet available to be viewed by other users. 
             Other users can view the images only on approval by the admin. On logging in the admin is given a set of images to approve or reject.
              If the admin approves the image, then the image is available to be viewed by every user in the explore tab.
            </div>
          </div>
        );
      }
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login)
