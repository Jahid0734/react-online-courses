import React from 'react';
import  './Footer.css'

const Footer = () => {
    return (
        <footer className="">
            <div className="jumbotron footer-section container">
            <div  className="row content-section " >
          
             <div className="col-md-3">
            <h4>Gallery</h4>
          
                <li>Community</li>
                <li>Trending</li>
                <li>Picks</li>
            
              </div>
            <div className="col-md-3">
            <h4>Marketplace</h4>
            
                <li>Trending</li>
                <li>Best selling</li>
                <li>Latest</li>
           
             </div>
            <div className="col-md-3">
            <h4>Magazine</h4>
       
                <li>Art Skll</li>
                <li>Career</li>
                <li>Ispiration</li>
                <li>News</li>
          
            </div>
            <div className="col-md-3">
            <h4>Newsletter</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet officia ducimus laborum perspiciatis error.</p>
          <input placeholder="Enter Your Email Address" type="text"/>
           <button className="subBtn">Subscribe</button>
            </div>
            </div>
            </div>
            <div className="footer-section text-center">
                ©copyright || React Ecommerce
            </div>
        </footer>
    );
};

export default Footer;