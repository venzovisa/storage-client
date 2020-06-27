import React from 'react';
import Button from '../button';

const OrderedProduct = ({product, onRemove}) => {

    return (
        <tr className="movie-item" key={product._id}>
            <td>{product._id}</td>
            <td>{product.quantity}</td>
            <td><Button btnClass="btn-danger" btnValue="Изтрий" onSelect={onRemove} /></td>
        </tr>
    )

};

export default OrderedProduct;