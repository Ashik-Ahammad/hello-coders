import React from 'react';
import './Body.css';
import banner from '../../../images/banner.jpg'
import { Grid } from '@mui/material';



const Body = (props) => {


    return (
        <div>
            <section className="bg-design mb-5">
                <Grid container spacing={3} style={{ marginTop: '15px', marginBottom: '20px' }} >

                    <Grid item xs={12} md={6}>
                        <div data-aos="fade-right">

                            <div style={{ marginTop: '15px' }}>

                                <div className="d-flex justify-content-center ms-5">
                                    <h1 >
                                        <span>h</span>
                                        <span>e</span>
                                        <span>l</span>
                                        <span>l</span>
                                        <span>o</span>
                                        <br />
                                        <span>c</span>
                                        <span>o</span>
                                        <span>d</span>
                                        <span>e</span>
                                        <span>r</span>
                                        <span>s</span>
                                    </h1>
                                </div>
                                <p className="mt-3">Hello Coders for all kind of software solution.</p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn mt-3 btn-outline-secondary" type="button">Learn More</button>
                                </div>

                            </div>
                        </div>
                    </Grid>


                    <Grid item xs={12} md={6}>

                        <div data-aos="fade-left" style={{ marginTop: '15px' }}>
                            <img className="img-fluid banner" src={banner} alt="" />
                        </div>
                    </Grid >

                </Grid>
            </section>
        </div>

    );
};

export default Body;