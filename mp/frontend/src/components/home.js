import React, { Component } from 'react';
import ListItems from './listitem';
import Add from './additem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Home extends Component{

    static propTypes = {
        user: PropTypes.object
      }


render(){
    if(this.props.user.is_staff)
        {
          return <Redirect to="/admin"/>
        }

    return(
        <div className="container">
        <div>
        <div className="card card-body mt-4 mb-4" style={{alignItems: 'center'}}>
        <h3>Welcome {this.props.user.username}</h3>
        </div>
        </div>
        <Add/>
        <ListItems/>
        </div>
    )
}
}

const mapStateToProps = state =>({
    user: state.auth.user
  })

export default connect(mapStateToProps)(Home)