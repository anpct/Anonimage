import React, { Component } from 'react';
import ListItems from './listitem';
import Add from './additem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Home extends Component{

    static propTypes = {
        admin: PropTypes.object
      }


render(){
    if(this.props.admin.is_staff)
        {
          return <Redirect to="/admin"/>
        }

    return(
        <div className="container">

        <Add/>
        <ListItems/>
        
        </div>
    )
}
}

const mapStateToProps = state =>({
    admin: state.auth.user
  })

export default connect(mapStateToProps)(Home)