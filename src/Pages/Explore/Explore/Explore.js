import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../../Home/Service/Service';

const Explore = () => {
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
                <h1 className="text-warning mb-5">Planning For Your House</h1>
            </div>
            <Row className="g-3">
                {
                    services.map(serv => <Service key={serv._id} service={serv}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Explore;