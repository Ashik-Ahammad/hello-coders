import { Grid } from '@mui/material';
import * as React from 'react';
import MyOrders from '../../MyOrders/MyOrders';

const DashHome = () => {
    return (
        <div container>
          <Grid size={{ xs: 5, sm: 7 }} >
          <MyOrders></MyOrders>
          </Grid>
        </div>
    );
};

export default DashHome;