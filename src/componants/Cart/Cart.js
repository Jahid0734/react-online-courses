import React from 'react';





const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((sum, course) => sum + course.price,0);
 
    
    
    return (
        <div>
        <div className="cart d-flex justify-content-between">
            <p>Total Course: {props.demoCourse.length}</p>
            <p>Potal Price: {total}</p>
           <p>Added Course: {cart.length} </p>
        </div>
     
        </div>
    );
};

export default Cart;