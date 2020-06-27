import React from 'react';
import {Button} from 'reactstrap';

const Counter = ({onIncrement, onDecrement, totalValue, counterValue}) => {

    const btnDisabled = (totalValue === 0) || (counterValue === 0);
    return (
        <li className="list-group-item m-2">
            <span className="btn btn-info btn-lg m-2">{counterValue}</span>
            <Button className="btn btn-success btn-lg m-2" onClick={onIncrement}> + </Button>
            <Button className="btn btn-warning btn-lg m-2" onClick={onDecrement} disabled={btnDisabled}> - </Button>
        </li>
    )

};

export default Counter;