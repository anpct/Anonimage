import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getAllItems } from '../actions/all'

export class All extends Component {

    static propTypes ={
        items: PropTypes.array.isRequired,
        getAllItems: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getAllItems()
    }

    render() {
        return (
            <div className="container">
            <Fragment>
        <h2>Approved Items</h2>
        <div className="row">
            {this.props.items.map((item) => (
              <div className="col" style={{padding: 10}} key={item.id}>
              <div className="card" style={{width: "16rem"}}>
              <a href={item.item} target="_blank">
                <img src={item.item} className="card-img-top" alt="..." style={{width: "16rem", height: "16rem"}}/>
                </a>
                <div className="card-body">
                  <p className="card-text">
                <small>ITEM ID: {item.id}</small><br/>
                <small>DATE ADDED: {item.date_posted.slice(0,10)}</small><br/>
                <small>SCORE: {item.score}</small><br/>
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

const mapStateToProps = (state) =>
({
    items: state.all.items
})

export default connect(mapStateToProps, {getAllItems})(All)
