import React from 'react';
import './Shipping.css';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';

const Shipping = () => {

    const { register, handleSubmit, reset} = useForm();
    const { user } = useAuth();
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
                    alert('Order has been received Successfully');
                    clearTheCart();
                    reset();
                }
            })
    };

    return (
        <div className='shipping-container border border-2 mx-5'>
            
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-info'>Shopping details <i class="far fa-file-alt"></i></h4>
                <input style={{border:'1px solid #0FA6C7 '}} defaultValue={user.displayName} {...register("name")} placeholder="Name" required/>

                <input style={{border:'1px solid #0FA6C7 '}} defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" required/>

                <input style={{border:'1px solid #0FA6C7 '}} placeholder="Address" defaultValue="" {...register("address")} required/>

                <input style={{border:'1px solid #0FA6C7 '}} placeholder="City" defaultValue="" {...register("city")} required/>

                <input style={{border:'1px solid #0FA6C7 '}} placeholder="bkash No." defaultValue="" {...register("phone")} required/>

                <input style={{border:'1px solid #0FA6C7 '}} placeholder="TrxID" defaultValue="" {...register("TrxID")} required/>

                <input style={{backgroundColor:'#0FA6C7',color:'white', border:'1px solid #0FA6C7 '}} type="submit" value="Confirm Order"/>
            </form>
        </div>
    );
};

export default Shipping;