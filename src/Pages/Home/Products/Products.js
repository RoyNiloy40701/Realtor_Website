import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Products = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://agile-beyond-87526.herokuapp.com/plans')
            .then(res => res.json())
            .then(result => setServices(result))
    }, [])
    return (
        <Container className="my-5">
            <div className="text-center">
                <h5 className="text-secondary">Home We Offered</h5>
                <h2 className="text-warning mb-5">Planning For Your House</h2>
            </div>
            <Row className="g-3">
                {

                    services.slice(0, 6).map(serv => <Service key={serv.name} service={serv}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Products;