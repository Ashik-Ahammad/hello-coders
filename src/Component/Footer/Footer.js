import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-5 pt-5">
            <footer className="bg-colour">
                <hr />
                <Container className="">
                    <Row justify-content-center >

                        <Col>
                            <h5 className="text-infor">For any kind of information <i class="fas fa-info-circle"></i></h5>

                            <p className="text-warning">
                                <a href="https://mail.google.com/" target="_blank" rel="noreferrer"><i class="fas fa-envelope"></i>
                                </a> hellocoders.info<i class="fas fa-at text-info"></i>gmail.com
                            </p>
                            <p className="text-warning"><i class="fas fa-phone-square-alt"></i><small className="text-danger"> +8801621869524</small></p>
                        </Col>

                        <Col>


                            <a href="https://www.facebook.com/hellocodersbd" target="_blank" rel="noreferrer">

                                <i className="fab fa-facebook-f icon bg-primary text-white p-2  rounded-pill" ></i></a>

                            &nbsp;  &nbsp;  &nbsp;
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter icon bg-primary text-white p-2 rounded-pill"></i></a>

                            &nbsp;  &nbsp;  &nbsp;
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in icon bg-primary text-white p-2   rounded-pill"></i></a>

                        </Col>

                        <Col>
                            <h4 className="text-info">
                                Our Address
                            </h4>
                            <p className="text-secondary"><a href="https://www.google.com/maps/place/Hello+Coders/@23.9088763,90.2197225,17.5z/data=!4m12!1m6!3m5!1s0x3755ef9387f6a067:0x885cadeb8c3c50eb!2sHello+Coders!8m2!3d23.9095002!4d90.2203552!3m4!1s0x3755ef9387f6a067:0x885cadeb8c3c50eb!8m2!3d23.9095002!4d90.2203552" target="_blank" rel="noreferrer"><i class="fas fa-map-marker-alt"></i></a> Dhamrai, Dhaka, Bangladesh</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;

