import React from 'react';
import Button from '../button';

const SelectProduct = ({product, onAdd1, onAdd10, onAdd100}) => {

    return (
            <div className="product-item">
                <p><strong>Код:</strong> {product._id}</p>
                <p><strong>Категория:</strong> {product.category}</p>
                <p><strong>Производител:</strong> {product.manufacturer}</p>
                <p><strong>Наименование:</strong> {product.title}</p>
                <p><strong>Наличност:</strong> {product.quantity} <strong>броя</strong></p>
                <hr />
                <p>
                    <strong className="mr-2">Добавяне в поръчка:</strong>
                    <Button btnClass={"btn-warning mr-2 text-white"} btnValue={1} onSelect={onAdd1}/>
                    <Button btnClass={"btn-warning mr-2 text-white"} btnValue={10} onSelect={onAdd10}/>
                    <Button btnClass={"btn-warning text-white"} btnValue={100} onSelect={onAdd100}/>
                </p>
            </div>
    )

};

export default SelectProduct;