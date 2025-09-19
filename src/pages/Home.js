import { Button } from '@mui/material'
import React from 'react'
import{Link}from "react-router-dom";
import BannerImage from "../assets/8.jpg";
import "../styles/Home.css";


function Home() {
  return (
    <div classname="home">
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
          <h1> istanbul Pizzeria </h1>
          <p>PIZZA TO FIT ANY TASTE</p>
          <Link to={"/menu"}>
          <button>ORDER NOW</button>
         </Link>
       </div>
       
      </div>
    </div>
  )
}

export default Home
