import React from 'react';
import useCourses from '../../Hooks/useCourses';
import useCart from '../../Hooks/useCart';
import './OrderReview.css'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const OrderReview = () => {

    const [courses] = useCourses();
    const [cart,setCart] = useCart(courses);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(course => course.key !== key);
        setCart(newCart);
        removeFromDb(key);
        alert('Are you sure want to remove item? ');
    };

    const handlePlaceOrder = () => {
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();
        alert('Make sure your list before proceeding!!!')
    }

    return (
        <div className='style'>

            <img src="https://i.ibb.co/r66JKd5/3145827.png" alt="" className='img-fluid img-style mb-5' />

            <h2 className='bg-info text-white container p-1'>Shopping Cart</h2>

           <div className='border border-2 container'>

              <div>
                <Cart cart={cart}></Cart>
              </div>

              <div>
                {
                    cart.map(course => <ReviewItem 
                        key={course.key}
                        course={course}
                        handleRemove={handleRemove}
                        ></ReviewItem>)
                }

                <Button onClick={handlePlaceOrder} className='my-2 px-5' variant="primary" size="lg">Proceed to shipping...</Button>
              </div>

              
           </div>
        </div>
    );
};

export default OrderReview;