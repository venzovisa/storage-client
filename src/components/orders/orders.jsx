import React, {Component} from 'react';
import {Row, Col, ListGroup, ListGroupItem, Table} from 'reactstrap';
import Order from './order';
import Pager from '../pagination/pagination';
import SearchBox from './searchBox';
import {paginate} from '../../utils/paginate';
import AlertBox from '../alerts/alerts';
import LoadingBar from '../alerts/loadingBar'
import _ from 'lodash';
import axios from "axios";

class Orders extends Component {

    state = {
        movies: [],
        emptyProducts: false,
        selectedGenre: 'All',
        pageSize: 4,
        currentPage: 1,
        sortCriteria: 'genre',
        sortOrder: 'asc',
        searchQuery: '',
        loadingBar: true,
        btnSubmit: false
    };


    async componentDidMount(){
        try {
            const response = await axios.get('http://localhost:3000/orders', {
                headers: {
                    'Auth-Token': window.localStorage.authToken
                }
            });
            if (response) this.setState({movies: response.data, loadingBar: false});
            if(this.state.movies.length === 0) {this.setState({emptyProducts: true})}
        }
        catch (e) {
            throw e;
        }
    }

    handleDelete = async selectedMovie => {
        let movies = this.state.movies.filter(m => m.id !== selectedMovie.id);
        this.setState({movies});
        try {
            const response = await axios.delete(`http://localhost:3000/delete_order/${selectedMovie.id}`, {
                headers: {
                    'Auth-Token': window.localStorage.authToken
                }
            });
            if (response.status === 200) console.log(response.status)
        } catch (e) {
            throw e
        }
    };

    handleFilter = selectedGenre => {
        this.setState({selectedGenre, currentPage: 1, searchQuery: ""});
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    handleSort = sortCriteria => {
        let sortOrder = this.state.sortOrder === "asc" ? "desc" : "asc";
        this.setState({sortCriteria, sortOrder});
    };

    handleSearch = query => {
        this.setState({searchQuery: query, selectedGenre: 'All',currentPage: 1});
    };

    handleChangeStatus = async selectedOrder => {
        try {
            let orderStatus = [...this.state.movies];
            console.log(orderStatus);
            let newOrderStatus;
            orderStatus.forEach((value, index) => {
                if (value._id === selectedOrder._id) {
                    value.active = !value.active;
                    newOrderStatus = value;
                }
            });
            // Disable all buttons while updating status
            this.setState({btnSubmit: true});
            // Update order status
            this.setState({orderStatus});
            console.log(newOrderStatus);
            const response = await axios.post(`http://localhost:3000/update_order_status`, newOrderStatus);
            if (response.status === 200) this.setState({btnSubmit: false});
        }
        catch (e) {
            throw e;
        }

    };

    handleEdit = ()=> {
        //TODO
    };

    render() {
        let {pageSize} = this.state;
        let {currentPage} = this.state;
        let {sortCriteria} = this.state;
        let {sortOrder} = this.state;
        let {searchQuery} = this.state;
        let filteredMovies;

        if (searchQuery !== "") {
            filteredMovies = this.state.movies.filter(m => m._id.toLowerCase().startsWith(searchQuery.toLowerCase()));
        }
        else {
            filteredMovies = this.state.selectedGenre !== "All" ? this.state.movies.filter(m => m.active === this.state.selectedGenre) : this.state.movies;
        }

        let sorted = _.orderBy(filteredMovies, sortCriteria, sortOrder);
        let pager = paginate(sorted, currentPage, pageSize);

        return <React.Fragment>
            <Row>
                <Col xs="12" lg="12"><h1>Складови поръчки</h1></Col>
            </Row>
            <Row>
                <Col xs="12" lg="4">
                    <ListGroup>
                        <ListGroupItem className={this.state.selectedGenre === "All" ? "active" : ""} onClick={() => this.handleFilter("All")}>Всички поръчки</ListGroupItem>
                        <ListGroupItem className={this.state.selectedGenre === true ? "active" : ""}  onClick={() => this.handleFilter(true)}>Активни</ListGroupItem>
                        <ListGroupItem className={this.state.selectedGenre === false ? "active" : ""} onClick={() => this.handleFilter(false)}>Изпълнени</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col xs="12" lg="8">
                    <h2>Общо поръчки: {filteredMovies.length}</h2>
                    <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                    <Table>
                        <thead>
                        <tr>
                            <th className="link" onClick={() => this.handleSort('title')}>№</th>
                            <th className="link" onClick={() => this.handleSort('genre')}>Статус</th>
                            <th>Опции</th>
                            <th>Редактиране</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pager.map((movie, index) => <Order key={index} movie={movie}
                                                   onDelete={() => this.handleDelete(movie)}
                                                   onEdit={() => this.handleEdit(movie)}
                                                   onChangeStatus={()=>this.handleChangeStatus(movie)}
                                                            btnSubmit={this.state.btnSubmit}
                                            />
                                  )
                        }
                        </tbody>
                    </Table>
                    <div className="text-center">
                        { this.state.loadingBar && <LoadingBar/>}
                        { this.state.emptyProducts.length && <AlertBox alertMessage={"Празен списък"} className="alert-info"/>}
                    </div>
                    <Pager
                        itemsCount={filteredMovies.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </Col>
            </Row>

        </React.Fragment>
    }

}

export default Orders;