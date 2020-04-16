import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getVItems, acceptItem, rejectItem } from '../actions/v_items'

export class Admin extends Component {

    componentDidMount(){
        this.props.getVItems();
    }

    static propTypes = {
        items: PropTypes.array.isRequired,
        getVItems: PropTypes.func.isRequired,
        user: PropTypes.object,
        acceptItem: PropTypes.func.isRequired,
        rejectItem: PropTypes.func.isRequired
    };

    render() {
        
        return(  
            <div className="container">
            <div className="card card-body mt-4 mb-4" style={{alignItems: 'center'}}>
        <h3>Welcome Admin {this.props.user.username}</h3>
        </div>
            <Fragment>
             <h2>Items to accept</h2>
             <div className="row">
                 {this.props.items.map((item) => (
                   <div className="col" style={{padding: 10}} key={item.id}>
                   <div className="card" style={{width: "16rem"}}>
                     <img src={item.item} className="card-img-top" alt="..." style={{width: "16rem", height: "16rem"}}/>
                     <div className="card-body">
                       <p className="card-text">
                     <small>ITEM ID: {item.id}</small><br/>
                     <small>DATE ADDED: {item.date_posted}</small><br/>
                     <small>SCORE: {item.score}</small><br/><br/>
                     <div className="row" align="center">
                        <div className="col">
                        <button
                          onClick={this.props.acceptItem.bind(this, item.id)}
                          className="btn btn-success btn-sm">
                          <i className="fa fa-check" aria-hidden="true" style={{color: 'white'}}></i>
                        </button>
                        </div>
                        <div className="col">
                        <button
                          onClick={this.props.rejectItem.bind(this, item.id)}
                          className="btn btn-danger btn-sm">
                          <i className="fa fa-times" aria-hidden="true" style={{color: 'white'}}></i>
                        </button>
                        </div>
                      </div>
                      </p>
                     </div>
                   </div>
                   </div>
                 ))}
                 </div>
           </Fragment>
           </div>
           )
    }
}

const mapStateToProps = state => (
    {
        items: state.v_items.items,
        user: state.auth.user
    }
);

export default connect(mapStateToProps, { getVItems, acceptItem, rejectItem })(Admin)
