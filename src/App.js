import React, {Component} from 'react';
import Orders from './components/orders/orders';
import TestForm from './components/testForm';
import Products from './components/products/products';
import AddOrder from './components/orders/addOrder';
import {UpdateOrder} from './components/orders/updateOrder';
import {UpdateProduct} from './components/products/updateProduct';
import {AddProduct} from './components/products/addProduct';
import NavBar from './components/navbar';
import Home from './components/home';
import Customers from './components/customers/customers';
import NotFound from './components/notfound';
import './App.css';
import LoginForm from './components/login';
import Logout from './components/logout';
import RegisterForm from './components/register';
import {Col, Container, Row} from 'reactstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from './utils/auth';
import ProtectedRoute from "./components/protectedRoutes";


class App extends Component {

    state = {};

    componentDidMount() {
        try {
            this.setState({user: getUser()});
        }
       catch(ex) {}
    };

    render() {
        return (
            <React.Fragment>
            <NavBar user={this.state.user}/>
            <Container>
                <Row>
                    <Col xs="12">
                        <Switch>
                            <Route path="/testForm" component={TestForm} />
                            <Route path="/orders/:id" component={UpdateOrder} />
                            <ProtectedRoute path="/updateProduct/:id" component={UpdateProduct} />
                            <ProtectedRoute path="/addProduct/" component={AddProduct} />
                            <ProtectedRoute path="/orders" component={Orders} />
                            <ProtectedRoute path="/addOrder" component={AddOrder} />
                            <Route path="/products" component={Products} />
                            <Route path="/customers" component={Customers} />
                            <Route path="/login" component={LoginForm} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/register" component={RegisterForm} />
                            <Route path="/" exact component={Home} />
                            <Route path="/" component={NotFound} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default App;
