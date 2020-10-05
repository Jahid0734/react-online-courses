import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((sum, course) => sum + course.price,0);
 
    
    
    return (
        <div>
        <div className="cart d-flex justify-content-between">
            <p>Total Course: {props.demoCourse.length}</p>
            <p>Total Price: ${total}</p>
           <p> <FontAwesomeIcon icon={faShoppingCart}/> {cart.length} </p>
        </div>
     
        </div>
    );
};

export default Cart;