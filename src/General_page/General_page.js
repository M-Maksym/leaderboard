import React from 'react';
import { Link } from "react-router-dom";
import './General_page.css';
import { Carousel } from "./Carousel/Carousel";
import carouselData from "./Data/carouselData.json";


export default function Dashboard() {
  const slides = carouselData.slides;
  return(
    <div className='General'>
         <div className='General_name'>
           Name of the game
         </div>

        <div className='General_head'>
            <Link to="/leaderboard" style={{ textDecoration: 'none' }}>
                <h2 className='General_head_ltext' >Global leaderboard</h2>
            </Link>

            <Link to="/account" style={{ textDecoration: 'none' }}>
                <h2 className='General_head_rtext'>Log in</h2>
            </Link>
        </div>
        
        <div className='General_body'>
          <Carousel data={slides} />
        </div>
    </div>
  );
}