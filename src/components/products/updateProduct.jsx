import React from 'react';
import ProductForm from './productForm';

export const UpdateProduct = ({match, history}) => {
    return (
            <ProductForm productID={match.params.id} history={history}/>
    )
};

