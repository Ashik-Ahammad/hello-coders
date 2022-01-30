import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import { Button, Grid, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Contact.css';

const Contact = () => {

    const [feedback,setFeedback] = useState({}); 

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...feedback};
        newInfo[field] = value;
        setFeedback(newInfo);
        console.log(newInfo)
    }

    const handleFeedbackSubmit = e => {

        // collect data
        const feedbacks = {
            ...feedback
        }

        // send to the server
        fetch('https://frozen-forest-00333.herokuapp.com/feedbacks',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(feedbacks)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Message sent!')
                e.preventDefault();
            }
        })
    }

    return (

        <div>
            <div class="context">
                <h1 className="mb-5">HELLO CODERS BANGLADESH</h1>
                <Container>
                <Grid container spacing={4} style={{ marginTop: '15px', marginBottom: '20px',alignItems:'center' }} >
                    <Grid item xs={12} md={6} className="text-dark " style={{ marginTop: '65px', }}>
                       
                            At Hello Coders BD, we develop innovative ideas that provide all application solution. Among a plethora of products and services, web design and development, E-commerce solutions, Business-to-Client applications, are a few that we offer.We also provide high-level language learning course. Our business philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions, and the best quality/price ratio found in the industry.
                        
                        </Grid>
                    <Grid item xs={12} md={6} className="text-white mt-4">
                        
                            <h4 className="text-primary">Contact us for any information</h4>

                            <div className="bg-dsgn py-3 mb-2">
                                <p className="text-black">
                                    <a href="https://mail.google.com/" target="_blank" rel="noreferrer"><i class="fas fa-envelope text-white"></i>
                                    </a> hellocoders.info<i class="fas fa-at text-dark"></i>gmail.com
                                </p>
                            </div>
                            <div className="bg-dsgn py-3 mb-2">
                                <p className="text-danger"><a href="/contact"><i class="fas fa-phone-alt text-white"></i></a> <small className="text-black"> +8801307-450-464</small><span className='text-warning'> (9AM - 8PM)</span></p>
                            </div>

                            <div className="bg-dsgn py-3 mb-2">
                                <p className="text-secondary"><a href="https://www.google.com/maps/place/Hello+Coders/@23.9088763,90.2197225,17.5z/data=!4m12!1m6!3m5!1s0x3755ef9387f6a067:0x885cadeb8c3c50eb!2sHello+Coders!8m2!3d23.9095002!4d90.2203552!3m4!1s0x3755ef9387f6a067:0x885cadeb8c3c50eb!8m2!3d23.9095002!4d90.2203552" target="_blank" rel="noreferrer"><i class="fas fa-map-marker-alt text-white" ></i></a> <span className="text-black">Dhamrai, Dhaka, Bangladesh</span></p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>


            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


            <Grid container spacing={3} >

                <Grid item xs={12} md={6} container >

                    <iframe style={{ margin: '30px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.4371018139136!2d90.2181580153646!3d23.909571288593096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ef9387f6a067%3A0x885cadeb8c3c50eb!2sHello%20Coders!5e0!3m2!1sen!2sbd!4v1637403641925!5m2!1sen!2sbd" width="480" height="300" className="border border-3 border-success rounded-3 mt-5 fluid" allowfullscreen="" loading="lazy" title="gmapHC"></iframe>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography style={{ marginBottom: '5PX', color: 'blue', marginTop: '20px' }}>
                        SEND FEEDBACK
                    </Typography>
                    
                    <form onSubmit={handleFeedbackSubmit} style={{ color: 'white' }}>
                        <TextField
                            sx={{ mx: 1, width: '30%', color: 'primary.main' }}
                            id="outlined-multiline-flexible"
                            label="Name"
                            name="name"
                            type="text"
                            multiline
                            required
                            maxRows={4}
                            onBlur={handleOnBlur}

                        />
                        <TextField
                            sx={{ mx: 1, width: '30%' }}
                            id="outlined-multiline-flexible"
                            label="Email"
                            name="email"
                            type="email"
                            multiline
                            required
                            maxRows={4}
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="outlined-multiline-flexible"
                            label="Subject"
                            type="text"
                            name="subject"
                            multiline
                            maxRows={4}
                            onBlur={handleOnBlur}
                        />
                        <br />

                        <TextField
                            sx={{ mx: 1, width: '62%' }}
                            id="outlined-multiline-static"
                            label="Message"
                            type="text"
                            name="message"
                            multiline
                            rows={4}
                            onBlur={handleOnBlur}    
                        />
                        
                        <Button sx={{ width: '62%', m: 1, color: 'black', background: "transparent" }} type="submit" variant="contained" endIcon={<SendIcon />}>
                            SEND
                        </Button>
                    </form>
                </Grid>
            </Grid>

        </div>
    );
};

export default Contact;