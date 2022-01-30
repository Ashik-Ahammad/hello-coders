import React from 'react';
import { Accordion, Col, Container, Row, Table } from 'react-bootstrap';
import { Button, Grid } from '@mui/material';
import './AboutUs.css';
import image3 from '../../images/imgg3.jpg'
import image5 from '../../images/img5.jpg'
import { NavLink } from 'react-router-dom';
import Members from '../Home/Members/Members';

const AboutUs = () => {
    return (
        <div>
            <div className="bg-dark h-100 text-white">
                <img className="w-100 about-img" src={image5} alt="" />
                <h2 className="aboutUS">About Us <span><i class="fas fa-arrow-right arrow text-danger"></i></span></h2>

            </div>
            <Container>
                <Row>
                    <Col>
                        <img className="img-fluid" src={image3} alt="" />
                    </Col>

                    <Col className="table-style">
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Language</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Trainer1</td>
                                    <td>PHP,LARAVEL</td>
                                    <td>@kmhn</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Trainer2</td>
                                    <td>Assembly Language</td>
                                    <td>@nhs</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Trainer3</td>
                                    <td>JAVA Problem Expert</td>
                                    <td>@sman</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Trainer4</td>
                                    <td>C,JAVA</td>
                                    <td>@cfat</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Trainer5</td>
                                    <td>JS,REACT,NODEjs</td>
                                    <td>@ashd</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-dark'>Why <span className='text-warning'>us </span> ?</h1>
                        <h5>Innovation is at the heart of any successful company. Innovation keeps an organization at the top of their game, allowing them to flex their competitive muscles and take pride in the work they do.

                            Innovation also inspires employees to do great work and contribute toward the greater good of the company. Ensure employees feel safe to share their ideas with managers and even higher-ups. Employees know the day-to-day operations best after all - they might just be the source of your next great breakthrough.</h5>
                        <NavLink style={{ textDecoration: 'none' }} to="/contact">
                            <Button variant="contained" style={{ backgroundColor: '#5CE7ED', color: 'brown' }}>
                                Need Counselling ? Make a call !
                            </Button>
                        </NavLink>
                    </Col>

                    <Col className="accr-style mt-5">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>About us I</Accordion.Header>
                                <Accordion.Body>
                                    We have C programming course for the beginners with lots of problem solvings.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>About us II</Accordion.Header>
                                <Accordion.Body>
                                    We service also serves Java basic to advance course with making project.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>About us III</Accordion.Header>
                                <Accordion.Body>
                                    Hello Coders giving you opportunity to become a web designer(html,css,bootstrap,tailwind) and a web developer using(php,laravel or js,react,nodejs)
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Grid item xs={4} sm={8} md={12} style={{ marginTop: '20px', }}>
                    <Members></Members>
                </Grid>
            </Container>
        </div>
    );
};

export default AboutUs;