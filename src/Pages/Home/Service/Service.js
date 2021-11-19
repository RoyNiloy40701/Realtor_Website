import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id, name, shortDec, img, rent, Rooms, TotalArea } = props.service;
    return (

        <Col md={4}>
            <div className="shadow-lg rounded h-100">
                <img className="rounded-top img-fluid" style={{ maxHeight: "227px" }} src={img} alt="" width="350" height="247" />
                <div className="ps-1 my-2 mx-2">
                    <div className="d-flex justify-content-between ">
                        <p><span className="badge bg-warning text-dark">Rooms-{Rooms}</span></p>
                        <p><span className="badge bg-warning text-dark me-1">Total Area-{TotalArea}</span></p>
                    </div>
                    <h5 className="fw-bolder ">{name}</h5>
                    <small className="fw-light">{shortDec.slice(0, 100)}</small>
                    <h5><span className=" text-success  me-1">${rent}</span></h5>
                </div>
                <Link to={`/placeOrder/${_id}`}>
                    <div className="text-center">

                        <button className="btn btn-danger mb-3 btn-sm">Buy Now</button>
                    </div>
                </Link>
            </div>
        </Col>

    );
};

export default Service;