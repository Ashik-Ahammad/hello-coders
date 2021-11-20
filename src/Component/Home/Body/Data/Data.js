import React from 'react';
import './Data.css'



const Data = (props) => {
    const { id, name, img, description } = props.services;
    return (
        <div className="container">

            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">


                <div className="card shadow-lg card-style">
                    <img className="body-img img-fluid mx-5" src={img} alt="img" />

                    <div className="card-body ">
                        <h5 className={id}><span>{name}</span></h5>
                        <hr className="pt-1"></hr>
                        <p className="card-text">{description}</p>
                        <button type="button" class="btn btn-dark btn-style">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;