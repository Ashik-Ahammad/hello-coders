import * as React from 'react';
import { Grid } from '@mui/material';
import MyOrders from '../../MyOrders/MyOrders';

const DashHome = () => {
    return (
        <div>
        
        <Grid container spacing={2}>

        <Grid item xs={12} sm={5}>
          <img src="https://i.ibb.co/bWcbKCY/Hello-Coders.png" alt="" />
        </Grid>  

        <Grid item xs={10} sm={7}>
          <MyOrders></MyOrders> 
        </Grid>   

        </Grid> 

        </div>
    );
};

export default DashHome;