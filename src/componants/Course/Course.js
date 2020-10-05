import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    const handleAddCourse = props.handleAddCourse;

    const {title, instructor, price, image} = props.demoCourse;
    return (
        <div className="col-md-4">
            <div className="card">
                <div>
               <img className="card-img-top" src={image} alt=""/>
                </div>
        <div className="card-body">
                <p className="card-title">{title}</p>
                <p>by {instructor}</p>
                <div className="d-flex justify-content-between">
                <button onClick={() => handleAddCourse(props.demoCourse)} className="buy-button"> <FontAwesomeIcon icon={faShoppingCart}/> Add Cart</button>
                <h4 className="price">${price}</h4>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Course;