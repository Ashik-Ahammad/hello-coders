import React from 'react';

const Cart = (props) => {

    const {cart} = props;

    let totalQuantity = 0;
    let total = 0;
    for(const courses of cart){
        if(!courses.quantity){
            courses.quantity = 1;
        }
        total = total + courses.price * courses.quantity;
        
        totalQuantity = totalQuantity + courses.quantity;
    }
    return (
        <div className='p-3'>
            <h4>Total item in the cart : {totalQuantity}</h4>
            <p>Total Bill: <span className='text-danger'>{total}.00</span> BDT</p>
            <span>Wishlist :</span>
        </div>
    );
};

export default Cart;