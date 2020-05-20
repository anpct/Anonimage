import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


export class Loader extends Component {

    static propTypes ={
        showLoader: PropTypes.bool.isRequired
    }

    render() {

        if(!this.props.showLoader){
            return null
        }
        return (
            <div style={{position:'fixed', top: 0, width: '100%', height:'100%', display: "flex", backgroundColor:'#F8F8F8AD',justifyContent: "center", alignItems: "center"}}>
            <div style={{alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
              <img src="https://media.giphy.com/media/JpSOxF7CZv4SSRGQea/200w_d.gif"></img>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) =>({
    showLoader: state.loader.showLoader
})

export default connect(mapStateToProps)(Loader)
