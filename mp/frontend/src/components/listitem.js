import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems, deleteItem } from '../actions/items'

class ListItems extends Component {
    

    componentDidMount(){
        this.props.getItems();
    }

    static propTypes = {
        items: PropTypes.array.isRequired,
        getItems: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired
    };

    render(){
       return( 
       <Fragment>
        <h2>Items</h2>
        <div className="row">
            {this.props.items.map((item) => (
              <div className="col" style={{padding: 10}} key={item.id}>
              <div className="card" style={{width: "16rem"}}>
                <img src={item.item} className="card-img-top" alt="..." style={{width: "16rem", height: "16rem"}}/>
                <div className="card-body">
                  <p className="card-text">
                <small>ITEM ID: {item.id}</small><br/>
                <small>DATE ADDED: {item.date_posted}</small><br/>
                <small>SCORE: {item.score}</small><br/>
                <small>VERIFIED: {item.verified? <i className="fa fa-check" aria-hidden="true" style={{color: 'green'}}></i>: <i className="fa fa-times" aria-hidden="true" style={{color: 'red'}}></i>}</small><br/>
                <small>ACCEPTED: {item.accepted? <i className="fa fa-check" aria-hidden="true" style={{color: 'green'}}></i>: <i className="fa fa-times" aria-hidden="true" style={{color: 'red'}}></i>}</small><br/>
                  <button
                    onClick={this.props.deleteItem.bind(this, item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                  </p>
                </div>
              </div>
              </div>
            ))}
            </div>
      </Fragment>
      )
    }
}

const mapStateToProps = state => (
    {
        items: state.items.items
    }
);

export default connect(mapStateToProps, { getItems, deleteItem })(ListItems);