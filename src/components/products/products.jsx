import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import Product from './product';
import LoadingBar from '../alerts/loadingBar';
import axios from 'axios';
import { getUser } from "../../utils/auth";
import ButtonLink from "../buttonLink";

class Products extends Component {

    state = {
        products: [],
        loadingBar: true
    };

    handleDelete = async productID => {
        try {
            if (this.state.user){
                // Remove product from state
                const products = this.state.products.filter(p => p._id !== productID);
                this.setState({products});
                const response = await axios.delete(`${process.env.api_url}/delete_product/${productID}`, {
                    headers: {'Auth-Token': window.sessionStorage.authToken}
                });
                console.log(response.data);
            } else {
                window.location.pathname = '/login';
            }
        }
        catch (e){
            console.error(e);
        }

    };

    async componentDidMount(){
        try {
            this.setState({user: getUser()});
        }
            catch(e) {
            console.error(e);
        }

        try {
            const response = await axios.get(`${process.env.api_url}/products`);
            this.setState({products: response.data, loadingBar: false})
        }
        catch (e){
           console.error(e);
        }
    }

    render() {

    const {products} = this.state;
        return <React.Fragment>
            <Row className="mb-5">
                <Col xs="12"><h1>Складова наличност</h1></Col>
                    {products.map((product, index) => <Product key={index} product={product} onDelete={() => this.handleDelete(product._id)}/>)}
                <Col xs="12">
                    {this.state.loadingBar && <LoadingBar/>}
                </Col>
                {this.state.user && <Col xs="12">
                    <ButtonLink href={`/addProduct`} title={"+ Add product"} className={"btn-success mb-2"} />
                </Col>}
            </Row>
        </React.Fragment>
    }

}

export default Products;