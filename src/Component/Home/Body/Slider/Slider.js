import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgC from '../../../../images/img8.jpg';
import imgJ from '../../../../images/img4.jpg';
import imgP from '../../../../images/imgg3.jpg';
import './Slider.css'


const Slider = () => {
    return (
        <div className="mt-5">
            <Carousel fade>

                <Carousel.Item>
                    <img
                        className="d-block w-100 height-slider"
                        src={imgC}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">H E L L O &nbsp; C O D E R S</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 height-slider"
                        src={imgJ}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">H E L L O &nbsp; C O D E R S</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 height-slider"
                        src={imgP}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">H E L L O &nbsp; C O D E R S</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;