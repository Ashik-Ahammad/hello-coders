import React from 'react';
import './Data.css'
import MoreModal from './Modal/MoreModal';



const Data = ({ services }) => {
    const { id, name, img, description } = services;



    return (
        <>
            <div className="container">

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">


                    <div className="card shadow-lg card-style">
                        <img className="body-img img-fluid mx-auto mt-3 w-25 marg-pic" src={img} alt="img" />

                        <div className="card-body ">
                            <h5 className={id}><span>{name}</span></h5>
                            <hr className="pt-1"></hr>
                            <p className="card-text">{description}</p>
                            <button type="button" class="btn btn-info btn-style">More Details</button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default Data;