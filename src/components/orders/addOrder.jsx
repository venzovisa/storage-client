import React, {Component} from 'react';
import {Row, Col, Table} from 'reactstrap';
import SelectProduct from './selectProduct';
import OrderedProduct from './orderedProduct';
import AlertBox from '../alerts/alerts';
import Button from '../button';
import LoadingBar from '../alerts/loadingBar';
import axios from "axios";

class AddOrder extends Component {

    state = {
        products: [],
        selectedProducts: [],
        loadingBar: true
    };

   async componentDidMount(){
        try {
            const response = await axios.get('http://localhost:3000/products');
            this.setState({products: response.data, loadingBar: false})
        }
        catch (e){
            throw e;
        }
    }

    handleSelect = (selectedProduct) => {
        if (this.state.selectedProducts.find((p) => p._id === selectedProduct._id)) {
            console.log('Merge with existing product');
            console.log(this.state.selectedProducts);
            let newState = [...this.state.selectedProducts].map(
                p => p._id === selectedProduct._id ? {_id: p._id, quantity: p.quantity + selectedProduct.quantity} : p);
            console.log(newState);
            this.setState({selectedProducts: newState});
        } else {
            console.log('Add new product to selection');
            this.setState({selectedProducts: [...this.state.selectedProducts, {_id: selectedProduct._id, quantity: selectedProduct.quantity}]});
            console.log({_id: selectedProduct._id, quantity: Number(selectedProduct.quantity)});
        }
    };

    handleRemove = productID => {
        let newState = [...this.state.selectedProducts].filter((removeItem) => productID !== removeItem._id);
        this.setState({selectedProducts: newState});
    };

    handleSubmit = async () => {
    const products = this.state.selectedProducts;
    const active = true;
    const response = axios.post(`http://localhost:3000/add_order`, {products, active});
    if (response.status === 200) this.props.history.push('/orders');
    };

    render() {
        const {products, selectedProducts} = this.state;
        return <React.Fragment>
            <Row>
                <Col xs="12"><h1>Избор на продукти</h1></Col>
                <Col xs="12" sm="6">
                    <h2>Налични продукти</h2>
                    <div className="in-stock-products mb-2">
                    {products.map((product, index) =>
                            <SelectProduct
                                key={index}
                                product={product}
                                onAdd1={() => this.handleSelect({_id: product._id, quantity: 1})}
                                onAdd10={() => this.handleSelect({_id: product._id, quantity: 10})}
                                onAdd100={() => this.handleSelect({_id: product._id, quantity: 100})}
                            />
                    )}
                    { this.state.loadingBar && <LoadingBar />}
                    </div>
                </Col>
                <Col xs="12" sm="6">
                    <h2>Избрани продукти</h2>
                    <Table>
                        <thead>
                        <tr>
                            <th>Код</th>
                            <th>Количество</th>
                            <th>Опции</th>
                        </tr>
                        </thead>
                        <tbody>
                        {selectedProducts.map((product, index) =>
                            <OrderedProduct
                                key={index}
                                product={product}
                                onRemove={() => this.handleRemove(product._id)}/>
                        )
                        }
                        </tbody>
                    </Table>
                    { this.state.selectedProducts.length === 0 && <AlertBox alertMessage={"Няма избрани продукти"} className="alert-info"/>}
                </Col>
                <Col xs="12" className="text-center mb-5">
                    <Button
                        btnValue={"Изпрати"}
                        btnClass={"btn-success"}
                        onSelect={() => this.handleSubmit()}
                        disabled={this.state.selectedProducts.length === 0 && true}
                    />
                </Col>
            </Row>
        </React.Fragment>
    }

}

export default AddOrder;