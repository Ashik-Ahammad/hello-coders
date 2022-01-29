import React from 'react';
import './Shipping.css';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import { Alert, Grid } from '@mui/material';
import { useState } from 'react';

const Shipping = () => {

    const { register, handleSubmit, reset} = useForm();
    const { user } = useAuth();
    
    const [bookingSuccess,SetBookingSuccess] = useState(false);

    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        
        fetch('https://frozen-forest-00333.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    SetBookingSuccess(true)
                    clearTheCart();
                    reset();
                }
            })
    };

    return (
        <Grid container  className='shipping-container' sx={{marginTop:'350px'}}>
            <Grid item xs={12} md={6} >
           
            
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-info'>Shopping details <i class="far fa-file-alt"></i></h4>
                <input style={{border:'1px solid #0FA6C7 '}} defaultValue={user.displayName} {...register("name")} placeholder="Name" required/>

                <input style={{border:'1px solid #0FA6C7 '}} defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" required/>

                <input style={{border:'1px solid #0FA6C7 '}} placeholder="Address" defaultValue="" {...register("address")} required/>

                <input style={{border:'1px solid #0FA6C7 '}} placeholder="City" defaultValue="" {...register("city")} required/>

                <input style={{border:'1px solid #0FA6C7 '}} placeholder="Bkash No." defaultValue=" Our bkash number : 01307450464" disabled/>

                <input style={{border:'1px solid #0FA6C7 '}} placeholder="Payment Bkash No." defaultValue="" {...register("phone")} required/>

                <input style={{border:'1px solid #0FA6C7 '}} placeholder="TrxID" defaultValue="" {...register("TrxID")} required/>

                <input style={{backgroundColor:'#0FA6C7',color:'white', border:'1px solid #0FA6C7 '}} type="submit" value="Confirm Order"/>
            </form>

            {bookingSuccess && <Alert severity="success" className='mx-2'>Order Successful. Please wait we will sent you a confirm email. Thank you! For any information mail us at <small className='text-primary'>hellocoders.info@gmail.com</small></Alert>}
        
            </Grid>
            <Grid item xs={12} md={6}>
                <img className='img-fluid p-2' src="https://i.ibb.co/C0ThLQ4/More-Than-I-Should.png" alt="" />
            </Grid>
        </Grid>
    );
};

export default Shipping;