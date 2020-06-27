import React from 'react';
import {Col} from 'reactstrap';
import Button from '../button';
import {getUser} from "../../utils/auth";

const Product = ({product, onDelete}) => {
        return <Col xs="12" sm="6">
            <div className="product-item">
                <p><strong>Код:</strong> {product._id}</p>
                <p><strong>Категория:</strong> {product.category}</p>
                <p><strong>Производител:</strong> {product.manufacturer}</p>
                <p><strong>Наименование:</strong> {product.title}</p>
                <p><strong>Количество:</strong> {product.quantity} <strong>броя</strong></p>
                {getUser() && <React.Fragment>
                    <hr />
                    <div className="text-right">
                        <a href={`/updateProduct/${product._id}`} title="Edit product" className="btn btn-warning mr-2">Редактирай</a>
                        <Button btnClass={'btn-danger'} btnValue={'Изтрий'} onSelect={onDelete}/>
                    </div>
                </React.Fragment>}
            </div>
        </Col>
};

export default Product;