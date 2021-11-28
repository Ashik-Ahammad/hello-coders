import React from 'react';
import './Data.css'
import MoreModal from './Modal/MoreModal';



const Data = ({ services }) => {
    const { id, name, img, description } = services;

    const [openDetail, setOpenDetail] = React.useState(false);
    const handleDetailOpen = () => setOpenDetail(true);
    const handleDetailClose = () => setOpenDetail(false);

    return (
        <>
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
                            <button onClick={handleDetailOpen} type="button" class="btn btn-dark btn-style">More Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <MoreModal>
                services={services}
                handleClose={handleDetailClose}
                openDetail={openDetail}
            </MoreModal>
        </>

    );
};

export default Data;