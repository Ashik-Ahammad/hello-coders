import React from 'react';
import './Data.css';
import { NavLink } from 'react-router-dom';



const Data = ({ services }) => {
    const { id, name, img, description } = services;

    return (
        <>
            <div className="container">

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">


                    <div className="card shadow-lg card-style">
                        <div data-aos="zoom-in-up">
                            <img className="body-img img-fluid mx-auto mt-3 w-25 marg-pic" src={img} alt="img" />
                        </div>
                        <div className="card-body ">
                            <h5 className={id}><span>{name}</span></h5>
                            <hr className="pt-1"></hr>
                            <p className="card-text">{description}</p>
                            <div data-aos="zoom-in">

                             <NavLink to="/moredetails" target="_blank" rel="noreferrer">
                                <button type="button" class="btn btn-info btn-style">More Details</button>
                             </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default Data;