import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Member = ({ member }) => {

    const { name, position, description, img } = member;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, p: 2, boxShadow: 3 }}  >
                <CardMedia
                    component="img"
                    height="140"
                    sx={{ borderRadius: 1 }}
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt=""
                />
                <CardContent>
                    <Typography sx={{ color: 'blue', backgroundColor: '#d1c4e9', margin: '2px' }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'info.main', backgroundColor: '#b39ddb', margin: '2px' }} component="div">
                        {position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ backgroundColor: '#9575cd', margin: '2px' }}>
                        {description}
                    </Typography>

                </CardContent>

            </Card>
        </Grid >
    );
};

export default Member;