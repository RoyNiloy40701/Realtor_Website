import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const [orders, setOrders] = useState({});
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://agile-beyond-87526.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, To cancel');
        if (proceed) {
            fetch(`https://agile-beyond-87526.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders)
                    }
                })
        }
    }
    return (
        <Container className="my-5">
            <h2>My Orders</h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">OrderID</th>
                            <th scope="col">Ordered By</th>
                            <th scope="col">Email</th>
                            <th scope="col">Recipient Address</th>
                            <th scope="col">Recipient Phone</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(orders).length !== 0 &&
                            orders.map(order =>
                                <tr key={order._id}>
                                    <th scope="row">{(order._id).slice(0, 10)}...</th>
                                    <td>{order.customerName}</td>
                                    <td>{order.customerEmail}</td>
                                    <td>{order.orderAddress}</td>
                                    <td>{order.customerPhone}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.productPrice}</td>
                                    <td className={`${(order.status === 'Pending') ? 'badge bg-warning mt-2' : 'badge bg-success mt-2'}`}>{order.status}</td>
                                    <td>
                                        {
                                            (order.status === "Pending") &&
                                            <button onClick={() => handleDelete(order._id)} className="btn btn-danger px-3  btn-sm mx-1">X</button>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default MyOrders;