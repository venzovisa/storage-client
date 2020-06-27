import React from 'react';
import {Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <Row className="text-center my-5">
        <Col xs="12" sm="6">
            <Link to="/products" className="py-2 d-block">
                <img src="/products.png" className="d-inline-block mb-2" alt="Products"/>
                <h2>Продукти</h2>
            </Link>
        </Col>
            <Col xs="12" sm="6">
                <Link to="/orders" className="py-2 d-block">
                    <img src="/orders.png" className="d-inline-block mb-2" alt="Orders"/>
                    <h2>Поръчки</h2>
                </Link>
            </Col>
        </Row>
    )

};

export default Home;