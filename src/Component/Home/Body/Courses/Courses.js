import React from 'react';
import { Placeholder } from 'react-bootstrap';
import './Courses.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Courses = (props) => {

    const { name, description, img } = props.courses;
    return (


        <Grid item xs={4} sm={4} md={4}>
            <>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
            </>
            <div data-aos="zoom-in-down">

                <Card sx={{ minWidth: 275, border: 1, borderColor: 'grey.500', p: 2, boxShadow: 0, color: 'blue' }}>

                    <CardActionArea>
                        <div data-aos="zoom-in">
                            <CardMedia
                                component="img"
                                height="140"
                                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                                image={img}
                                alt="icon"
                            />
                        </div>
                        <CardContent>
                            <div data-aos="flip-up">
                                <Typography variant="h5" component="div">
                                    {name}
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div data-aos="flip-left">
                            <Button size="small" color="warning">
                                $ubscription
                            </Button>
                        </div>
                    </CardActions>
                </Card>
            </div>
        </Grid>

    );
};

export default Courses;