import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const Order = ({movie, onDelete, onEdit, onChangeStatus, btnSubmit}) => {

    return (
        <tr className="movie-item" key={movie._id}>
            <td><Link to={`/orders/${movie._id}`}>{movie._id}</Link></td>
            <td>{movie.active ? 'Активна' :  'Изпълнена'}</td>
            <td>
                {/*<td><Button color="danger" onClick={onDelete}>Delete</Button></td>*/}
                {movie.active && <Button color="danger" onClick={onChangeStatus} disabled={btnSubmit}>Изпълни</Button>}
                {!movie.active && <Button color="success" onClick={onChangeStatus} disabled={btnSubmit}>Активирай</Button>}
            </td>
            <td> <Link to={`/updateProduct/${movie._id}`} className="btn btn-warning text-white" onClick={onEdit}>Промени</Link></td>
        </tr>
    )

};

export default Order;