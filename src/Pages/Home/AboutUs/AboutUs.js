import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6} className='mt-5 mb-3'>
                    <img className=" img-fluid rounded-3" src="https://media.istockphoto.com/photos/real-estate-agent-showing-an-apartment-for-sale-to-a-young-couple-picture-id1307804197?b=1&k=20&m=1307804197&s=170667a&w=0&h=LoqYn9rySVXeASwIIIcatd2aBdX3Qk3I8-pSxKmk-JY=" alt="" />
                </Col>
                <Col md={6}>
                    <h5 className="text-secondary fw-bold">We Are <span className="text-warning">Specialized</span> In</h5>
                    <h2 className="text-danger">Finding best apartment for you</h2>
                    <div className="my-5">
                        <h6 className="fw-bold">What is important to look for in an apartment?</h6>
                        <p className="text-dark">Be sure to also check: whether the lease is a 6-month, one year or month-to-month type of lease; what date the rent is due each month; whether roommates are allowed; who is responsible for the maintenance; any parking rules; and whether your deposit is refundable</p>
                    </div>
                    <div>
                        <h6 className="fw-bold">What kind of financing is currently on the property?</h6>
                        <p className="text-dark">If their loan is set to mature in a year then that might mean there’s more motivation for them to make a deal happen vs. a loan maturing in 4 years.</p>
                    </div>
                    <button className="btn btn-danger">Discover More </button>
                </Col>

            </Row>
        </Container>
    );
};

export default AboutUs;