import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div className="mt-5">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>H E L L O &nbsp; C O D E R S</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1632425422799-286dc4325dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>H E L L O &nbsp; C O D E R S</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1632386474725-138bbf6e3f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>H E L L O &nbsp; C O D E R S</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;