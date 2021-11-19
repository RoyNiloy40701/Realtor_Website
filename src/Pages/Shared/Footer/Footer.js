import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from "../../../Photos/rdc-logo-default.svg"
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Footer = () => {
     return (
          <footer>
               <div className="footer py-5">

                    <div className="container">
                         <Row  >
                              <Col xs={6} md={3}>
                                   <img src={logo} width="150" height="" alt=""></img>
                                   <p className="mt-4 pe-5" >We support programs that create advancement opportunities for people.</p>
                              </Col>
                              <Col xs={6} md={3} >


                                   <h5 className="ms-3">Import Links</h5>
                                   <Nav.Link as={NavLink} to="/">Destination</Nav.Link>
                                   <Nav.Link as={NavLink} to="/">Get in Touch</Nav.Link>
                                   <Nav.Link as={NavLink} to="/">Who we Are</Nav.Link>
                                   <Nav.Link as={NavLink} to="/">Contact Us</Nav.Link>
                              </Col>
                              <Col xs={6} md={3}>
                                   <h5 className="ms-3">Help & Support</h5>
                                   <Nav.Link as={NavLink} to="/">Documentation</Nav.Link>
                                   <Nav.Link as={NavLink} to="/">Live Chat</Nav.Link>
                                   <Nav.Link as={NavLink} to="/">Privacy</Nav.Link>
                                   <Nav.Link as={NavLink} to="/">Faqs</Nav.Link>
                              </Col>
                              <Col xs={6} md={3}>
                                   <h5 className="ms-3" >Contact Us</h5>
                                   <Nav.Link ><GoLocation></GoLocation>PO Box 16122 Collins Street West Victoria 8007 Australia</Nav.Link>
                                   <Nav.Link><BsFillTelephoneForwardFill></BsFillTelephoneForwardFill> +91 458 654 528</Nav.Link>
                                   <Nav.Link as={NavLink} to="/"><AiOutlineMail></AiOutlineMail> realtor@gmail.com</Nav.Link>
                              </Col>
                         </Row>
                    </div>


               </div>
          </footer>
     );
};

export default Footer;