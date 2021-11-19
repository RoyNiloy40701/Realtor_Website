import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const PlaceOrder = () => {
    const { user } = useAuth();
    const { planId } = useParams();
    const [plan, setPlan] = useState({});
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

        Object.assign(data, { status: "Pending" });
        console.log(data);
        axios.post('https://agile-beyond-87526.herokuapp.com/order', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Order Placed Successfully");
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://agile-beyond-87526.herokuapp.com/placeOrder/${planId}`)
            .then(res => res.json())
            .then(data => {
                setPlan(data);
            })
    }, [])
    return (
        <Container className="my-4">
            <h2 className="text-center my-2">Place Order</h2>
            {
                plan &&

                <Row>
                    <Col md={6}>
                        <img src={plan.img} alt="" className="img-fluid" />
                        <h4>{plan.name}</h4>
                        <div className="d-flex justify-content-between px-2">
                            <p><span className="badge bg-warning text-dark me-1">Rooms: {plan.Rooms}</span></p>
                            <p><span className="badge bg-warning text-dark ">Total Area: {plan.TotalArea}</span></p>

                        </div>
                        <p>{plan.shortDec}</p>
                        <h5 className="text-danger"> Apartment Rent: {plan.rent}$</h5>
                    </Col>
                    <Col md={6}>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label htmlFor="userName" className="form-label mt-2">My Name</label>
                            <input className="form-control" defaultValue={user.displayName} id="userName" {...register("customerName")} placeholder="Name" />

                            <label htmlFor="userEmail" className="form-label  mt-2">My Email</label>
                            <input readOnly className="form-control" defaultValue={user.email} id="userEmail" {...register("customerEmail")} placeholder="Email" />



                            {
                                Object.keys(plan).length !== 0 &&
                                <div>
                                    <label htmlFor="productName" className="form-label  mt-2">Product Name</label>
                                    <input readOnly className="form-control" defaultValue={plan.name} id="productName" {...register("productName")} placeholder="Product Name" />

                                    <label htmlFor="productPrice" className="form-label  mt-2">Product Price</label>
                                    <input readOnly className="form-control" defaultValue={plan.rent} id="productPrice" {...register("productPrice")} placeholder="Price" />
                                </div>
                            }


                            <label htmlFor="orderAddress" className="form-label  mt-2">Order Recipient Address</label>
                            <input className="form-control" id="orderAddress" {...register("orderAddress", { required: true })} placeholder="Recipient Address" />
                            {errors.orderAddress && <p className="text-danger">This field is required</p>}

                            <label htmlFor="customerPhone" className="form-label  mt-2">Order Recipient Phone Number</label>
                            <input className="form-control" id="customerPhone" {...register("customerPhone", { required: true })} placeholder="Recipient Phone Number" />
                            {errors.customerPhone && <p className="text-danger">This field is required</p>}
                            <p className="text-center mt-2">
                                <input className="btn btn-danger my-2" type="submit" value="Place Order" /></p>
                        </form>

                    </Col>
                </Row>
            }
        </Container>
    );
};

export default PlaceOrder;