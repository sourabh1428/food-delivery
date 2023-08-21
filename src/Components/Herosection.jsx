import React from 'react'
import '../app.css'
import bannerImage from './hero.svg'; // Adjust the path


export default function Herosection() {
  return (
    <div>
        <div className='hero'>
            
            <div className="hero-left">
                <h1>Your Favourite Food
                Delivered Hot &
                Fresh</h1>
                <p>Healthy switcher chefs do all the prep work, like 
                        peeding, chopping & marinating, so you can cook
                        a fresh food.</p>
                <button>Order Now... </button>
              </div>
            <div className="hero-right">
                <img src={bannerImage} alt="banner is not visisble!!!!!!!!!!!!" />
            </div>
            <div className="hero-peeche">
                
                </div>
        
        </div>
       
        
        </div>
  )
}
