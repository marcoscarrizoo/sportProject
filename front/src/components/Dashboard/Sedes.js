import React from "react";
import Footer from "../Footer";
import LocationUX from "../Locations/LocationUX";
import './sedes.css'

const Sedes = () => {
  return (
    <div className='sedes-container'>
    <h1 className="sedes">SEDES</h1>
      <div><LocationUX /></div>
      <div><Footer/></div>
      
    </div>
  );
};

export default Sedes;
