import React from 'react';
import './Data.css'

const Data = (props) => {
    const { id, name, img, description } = props.services;
    return (
        <div className="mt-5 pt-5">
            <div className="card shadow-lg ">
                <img className="body-img" src={img} alt="img" />
                <div className="card-body text-primary">
                    <h5 className={id}><span>{name}</span></h5>
                    <p className="card-text">{description}</p>
                    <button type="button" class="btn btn-outline-secondary">More Details</button>
                </div> </div>
        </div>
    );
};

export default Data;