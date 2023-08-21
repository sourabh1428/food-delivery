import React from 'react'
import NavBar from './Nav-bar'
import '../app.css'
import Herosection from './Herosection'
import About from './About';
import Howitworks from './Howitworks';



export default function Overall() {
  return (
    <div className='mainbg'>
    <NavBar/>   
    <Herosection/>  
    <About/> 
    <Howitworks/>
    </div>

  )
}
