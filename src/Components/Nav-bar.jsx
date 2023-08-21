import React from 'react'
import { Link ,useNavigate} from "react-router-dom";
import '../app.css';


export default function () {
  return (
    <div className='nav-bar'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>Contacts</li>
            <li><Link to={"login"}><button style={"border:none;width=200px;background-color:yellow"}>Logout</button></Link></li>
        </ul>
    </div>
  )
}
