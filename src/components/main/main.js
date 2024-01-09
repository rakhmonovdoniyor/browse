import React from 'react'
import "./main.css"
import gmyImage from "../../assets/gym.png"
import dachaaa from "../../assets/dacha.png"
import pool from "../../assets/sea.png"
import restoran from "../../assets/restaurant.png"
import clear from "../../assets/cearrom.png"
const Main = () => {
  return (
    <div className='container'>
        <div className='text'>
        <h1>Facility</h1>
        <p className='Wewant'>
        We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
        that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
        and our modern luxury resort facilities will help you enjoy the best of all. 
        </p>
    </div>
    <div className='rasm'>
      
        <img src={gmyImage} alt='GYM_image' className='imageWrapp'/>
        <div  className='laund'>
       <h1 >THE GYM</h1>
        </div>
        
    </div>

    <div className='rasm'>
        <img src={dachaaa} alt='dacha_image' className='imageWrapp'/>
         <div  className='laund'>
       <h1 >POOLSIDE BAR</h1>
        </div>
    </div>
    <div className='rasm'>
        <img src={pool} alt='pol_image' className='imageWrapp'/>
        <div  className='laund'>
       <h1 >SWIMMING POOL</h1>
        </div>
    </div>
    <div className='rasm'>
        <img src={restoran} alt='res_image' className='imageWrapp'/>
        <div  className='laund'>
       <h1 >RESTAURANT</h1>
        </div>
    </div>
    <div className='rasm'>
        <img src={clear} alt='setak_image' className='imageWrapp'/>
        <div  className='laund'>
       <h1 >LAUNDRY</h1>
        </div>
    </div>
    <div className='rasm'>
        <img src={gmyImage} alt='GYM_image' className='imageWrapp'/>
        <div  className='laund'>
       <h1 >Laundry</h1>
        </div>
    </div>
    </div>
    
  )
};

export default Main;