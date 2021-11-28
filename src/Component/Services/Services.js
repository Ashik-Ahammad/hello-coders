import { Grid, Container } from '@mui/material';
import React from 'react';
import Calendar from './Calendar/Calendar';
import imgS from '../../images/img6.jpg';
import './Services.css';

const Services = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '500px' }} src={imgS} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Grid>
                </Grid>
            </Container>
            <div className="text-primary">
                Grab a date to communicate for any of our service.
                <h3>Available Appointments {date.toDateString()}</h3>
            </div>
        </div>
    );
};

export default Services;