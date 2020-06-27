import React, {Component} from 'react';
import {Alert} from 'reactstrap';

class AlertBox extends Component {

    onDismiss = () => {
        this.setState({visible: false});
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

    }

    render() {
        const {alertMessage, color} = this.props;
        return (
            <Alert color={color} className="alertbox clearfix m-2" isOpen={this.state.visible} toggle={this.onDismiss}>
                {alertMessage}
            </Alert>
        )
    }
}

export default AlertBox;