import { Grid } from '@mui/material';
import React from 'react';
import moreImg from '../../../images/more.jpg';
import './Learnmore.css';

const Learnmore = () => {
    return (
        <div className='marginL'>
            <img className="img-fluid " src={moreImg} alt="" />

            <Grid container spacing={3}  className='style-text-lm'>

                <Grid item xs={12} md={6} style={{display:'flex', justifyContent:'center', paddingLeft:'150px'}}>
                    <img className="img-fluid mt-5" src="https://i.ibb.co/nQwB0wz/isometric-job-search-recruitment-color-background-with-editable-text-learn-more-button-people-applic.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6}  >
                    <h4 className='mt-5'>Hello Coders ?</h4>
                    <h5 className='mt-5'>Hello coders provide you all kind of software solution with highest priority for the client.We are a software development company based in Dhaka. Founded in 2021, we have a team of devlopers that helps serving products for clients also provide eduaction for being a developer. We provide product strategy, UX/UI design, web app, and IoT development services to various clients including startups, corporations.</h5>
                </Grid>

            </Grid>
        </div>
    );
};

export default Learnmore;