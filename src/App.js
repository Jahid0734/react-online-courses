import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import demoCourse from './DemoCourse/DemoCourse.json';
import Header from './componants/Header/Header';
import Bannar from './componants/Bannar/Bannar';
import Course from './componants/Course/Course';

function App() {

const [cart, setCart] = useState([]);

const handleAddCourse = (demoCourse) => {
   const newCart = [...cart, demoCourse];
   setCart(newCart);
}


  return (
    <div className="body">
    <Header cart={cart} demoCourse={demoCourse}></Header>
    <Bannar></Bannar>
    <section className="container">
      <div className="row">
    {
      demoCourse.map(demoCourse => <Course handleAddCourse={handleAddCourse} demoCourse={demoCourse}></Course>)
    }
    </div>
    </section>
    </div>  
  );
}

export default App;
