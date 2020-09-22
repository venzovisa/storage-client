import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';

export default class Example extends React.Component {

    render() {
        return (
            <Container>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        Складтроник
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                                <NavLink to="/products" className="nav-item nav-link">Продукти</NavLink>
                                <NavLink to="/orders" className="nav-item nav-link">Поръчки</NavLink>
                            <NavLink to="/addOrder" className="nav-item nav-link">Нова Поръчка</NavLink>
                            <NavLink to="/chat" className="nav-item nav-link">Чат</NavLink>
                            {!this.props.user && <React.Fragment>
                                <NavLink to="/login" className="nav-item nav-link">Вписване</NavLink>
                                <NavLink to="/register" className="nav-item nav-link">Регистриране</NavLink>
                            </React.Fragment>}
                            {this.props.user && <React.Fragment>
                                <NavLink to="/user" className="nav-item nav-link">{this.props.user.email}</NavLink>
                                <NavLink to="/logout" className="nav-item nav-link" >Изход</NavLink>
                            </React.Fragment>}

                        </div>
                    </div>
                </nav>
            </Container>
        );
    }
}