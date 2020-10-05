import React from 'react';
import './Bannar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import image from '../images/Bannar/Bannar-1.png'



const Bannar = () => {
    return (
        <div className='bannar jumbotron row'>
            <div className="course-content col-md-6">
            <p><small>DON'T MISS OUR LATEST COURSE</small></p>
           <h1>Our New <span className="title">Web Development</span> Course</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate et eum quod neque commodi!</p>
           <button className="btn btn-warning"><FontAwesomeIcon icon={faShoppingCart}/> Add Course</button>
            </div>
            <div className="col-md-6">
                <img className="bannar-img" src={image} alt=""/>
            </div>

        </div>
    );
};

export default Bannar;