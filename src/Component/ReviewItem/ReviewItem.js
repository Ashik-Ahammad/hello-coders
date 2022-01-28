import { Button } from '@mui/material';
import React from 'react';

const ReviewItem = (props) => {
    
    const { cName, price, quantity, img, key } = props.course;
    const {handleRemove} = props;

    return (
        <div className='border border-1 rounded-3 m-5'>
            <img src={img} alt="" style={{ width: 'auto', height: '50px', marginTop: '5px' }} />
            <h4 className='text-info'>{cName}</h4>
            <p>Price: {price} BDT</p>
            <p>Quantity: {quantity}</p>

            <Button onClick={() => handleRemove(key)} className='mb-2' variant="contained" sx={{color:'white',background:'tomato'}}>Remove</Button>
        </div>
    );
};

export default ReviewItem;