import React from 'react';
import OrderForm from './orderForm';

export const UpdateOrder = ({match, history}) => {
    return (
        <OrderForm movieID={match.params._id} history={history}/>
    )

};