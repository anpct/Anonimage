import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export class Alerts extends Component {

    static propTypes ={
        error: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        const { error, alert, messages } = this.props;
        if(error !== prevProps.error){
        if (error.msg.item) alert.error(error.msg.item.join());
        if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
        if (error.msg.username) alert.error(error.msg.username.join());
        if (error.msg.email) alert.error(error.msg.email.join());
        if (error.msg.mismatch) alert.error(error.msg.mismatch);
        }

        if(messages !== prevProps.messages){
        alert.success(messages.msg);
        }
    }

    render() {
        return (
            <Fragment/>
        )
    }
}

const mapStateToProps = (state) =>({
    error: state.errors,
    messages: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
