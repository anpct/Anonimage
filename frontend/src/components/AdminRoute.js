import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


const PrivateRoute = ({ component: Component, auth, ...rest}) => (
    <Route {...rest}
    render={props => {
        if(auth.isLoading)
        {
            return <h2>Loading...</h2>;
        }
        else if(!auth.isAuthenticated)
        {
            return <Redirect to='/login' />
        }
        else if(auth.user.is_staff && auth.isAuthenticated)
        {
            return <Component {...props}/>
        }
        else if(auth.isAuthenticated && !auth.user.is_staff)
        {
            return <Redirect to='/' />
        }
        }}/>
)

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
