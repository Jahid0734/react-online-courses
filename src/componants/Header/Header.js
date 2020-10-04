import React from 'react';
import './Header.css';
import logo from '../images/logo/logo.png';
import Cart from '../Cart/Cart';


const Header = (props) => {
const cart = props.cart;
const demoCourse = props.demoCourse;
    return (
        <div>
      <header>  
      <nav className="navbar navbar-light bg-light">
        <div className="logo-section">
            <a className="navbar-brand" href="d">
              <img className="logo" src={logo} alt=""/>
              React Ecommerce
            </a>
        </div>
        <Cart cart={cart} demoCourse={demoCourse}></Cart>

       </nav> 
      </header>
        </div>
    );
};

export default Header;