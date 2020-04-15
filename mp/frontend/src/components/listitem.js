import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems} from '../actions/items'

class ListItems extends Component {
    // static propTypes = {
    //     items: PropTypes.array.isRequired
    // };

    // componentDidMount(){
    //     this.props.getLeads();
    // }

    render(){
       return( <div>
            <h1>ITEMS</h1>
        </div>)
    }
}

const mapStateToProps = state => (
    {
        items: state.items.items
    }
);

export default connect(mapStateToProps, { getItems })(ListItems);