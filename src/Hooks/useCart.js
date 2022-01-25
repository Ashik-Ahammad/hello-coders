import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = courses => {
    const [cart,setCart] = useState([]);

    useEffect(() => {
        if(courses.length){
            const savedCart = getStoredCart();
            const storedCart= [];
            for(const key in savedCart ){
                const addedCourse = courses.find(course => course.key === key);
                if(addedCourse){
                    // set quantity
                    const quantity = savedCart[key];
                    addedCourse.quantity = quantity;
                    storedCart.push(addedCourse);
                }
            }
            setCart(storedCart);
        }
    },[courses]);
    return[cart,setCart];
}

export default useCart;