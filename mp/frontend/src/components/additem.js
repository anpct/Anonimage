import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../actions/items'

class Add extends Component{

constructor(){
    super()
    this.state = {
        item: null,
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

static propTypes = {
    addItem: PropTypes.func.isRequired,
}

onChange(e) {
    this.setState({item:e.target.files[0]});
}

onSubmit(e){
    e.preventDefault();
    this.props.addItem(this.state.item)
    this.setState({
        file:null
    })

}

render(){
    return(
        <div className="card card-body mt-4 mb-4">
        <h2>Add File</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Select the file</label>
            <input
              className="form-control"
              type="file"
              name="file"
              onChange={this.onChange}
              multiple={false}
              accept=".jpg,.png,.jpeg"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
}
}

export default connect(null, { addItem })(Add)