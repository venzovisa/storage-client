import React, {Component} from 'react';
import Counter from './counter';
import AlertBox from '../alerts/alerts';
import {Col} from 'reactstrap';

class Counters extends Component {

    state = {
        totalValue: 0,
        counters: [
            {id: 0, value: 0},
            {id: 1, value: 0},
            {id: 2, value: 0},
        ]
    };

    handleIncrement = counterID => {
        let prevState = {...this.state};
        prevState.counters.map(counter => counter.id === counterID ? counter.value += 1 : false);
        this.setState({prevState});
        this.handleTotalValue();
    };

    handleDecrement = counterID => {
        let prevState = {...this.state};
        prevState.counters.map(counter => counter.id === counterID ? counter.value -= 1 : false);
        this.setState({prevState});
        this.handleTotalValue();
    };

    handleTotalValue = () => {
        let totalValue = 0;
        this.state.counters.map(
            counter => totalValue += counter.value
        );
        this.setState({totalValue});
    };

    render() {
        const isEven = this.state.totalValue % 2 === 0;
        const isOdd = this.state.totalValue % 2 !== 0;

        return (
            <React.Fragment>
                <Col xs="12" lg="6" className="text-center">
                    <h1>Total clicks: {this.state.totalValue}</h1>
                    <ul className="list-group">
                        {this.state.counters.map((counter) =>
                            <Counter
                                key={counter.id}
                                onIncrement={() => this.handleIncrement(counter.id)}
                                onDecrement={() => this.handleDecrement(counter.id)}
                                counterValue={counter.value}
                                totalValue={this.state.totalValue}
                            />
                        )}

                    </ul>
                    {isEven &&
                    <AlertBox alertMessage={this.state.totalValue + " is EVEN value of click!"} color={"success"}/>}
                    {isOdd &&
                    <AlertBox alertMessage={this.state.totalValue + " is ODD value of click!"} color={"warning"}/>}
                </Col>
                <Col xs="12" lg="6">
                </Col>
            </React.Fragment>
        )
    }

}

export default Counters;