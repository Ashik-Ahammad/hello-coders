import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div class="context">
                <h1 className="mb-5">HELLO CODERS BANGLADESH</h1>


                <Container>
                    <Row >
                        <Col className="text-white mt-5">
                            At Hello Coders BD, we develop innovative ideas that provide all application solution. Among a plethora of products and services, web design and development, E-commerce solutions, Business-to-Client applications, are a few that we offer.We also provide high-level language learning course Our business philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions, and the best quality/price ratio found in the industry.
                        </Col>

                        <Col >
                            <h4 className="text-warning">Contact us for any information</h4>

                            <div className="bg-dsgn py-3 mb-2">
                                <p className="text-black">
                                    <a href="https://mail.google.com/" target="_blank" rel="noreferrer"><i class="fas fa-envelope text-white"></i>
                                    </a> hellocoders.info<i class="fas fa-at text-dark"></i>gmail.com
                                </p>
                            </div>
                            <div className="bg-dsgn py-3 mb-2">
                                <p className="text-danger"><a href="/contact"><i class="fas fa-phone-alt text-white"></i></a> <small className="text-black"> +8801621869524</small><span> (9AM - 8PM)</span></p>
                            </div>

                            <div className="bg-dsgn py-3 mb-2">
                                <p className="text-secondary"><a href="https://www.google.com/maps/place/Hello+Coders/@23.9088763,90.2197225,17.5z/data=!4m12!1m6!3m5!1s0x3755ef9387f6a067:0x885cadeb8c3c50eb!2sHello+Coders!8m2!3d23.9095002!4d90.2203552!3m4!1s0x3755ef9387f6a067:0x885cadeb8c3c50eb!8m2!3d23.9095002!4d90.2203552" target="_blank" rel="noreferrer"><i class="fas fa-map-marker-alt text-white" ></i></a> <span className="text-black">Dhamrai, Dhaka, Bangladesh</span></p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>


            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <div className="bg-info w-75 mt-5 container">
                <form action="">
                    <label htmlFor="text">Send Feedback &nbsp;</label><input type="email" required name="email" placeholder="email" /><input className="p-2 m-2" type="text" name="text" placeholder="text" /><input className="p-2 bg-secondary" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;