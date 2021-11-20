import React from 'react';
import './Data.css'



const Data = (props) => {
    const { id, name, img, description } = props.services;
    return (
        <div className="container">

            <div data-aos="flip-up">

                <div className="card shadow-lg card-style">
                    <img className="body-img img-fluid mx-5" src={img} alt="img" />
                    <div className="card-body ">
                        <h5 className={id}><span>{name}</span></h5>
                        <p className="card-text">{description}</p>
                        <button type="button" class="btn btn-dark btn-style">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;