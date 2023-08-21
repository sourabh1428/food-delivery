import React from 'react'
import { useState } from "react";
import '../app.css';
import './formstyle.css'
import { Link } from "react-router-dom";



export default function Loginpage(props) {
  const [state, setState] = useState({
    name:'',
    email:'',
    password:''
  });
  const handleSubmit=()=>{
    console.log(state);
  }
  
  // return (
  //   <div>
  //     <h1>Login page</h1>
  
  //     <InputControl label="email" type="email" onChange={
  //       event=>setState(prev=>({...prev,email:event.target.value}))
  //     }/>
      
  //     <InputControl label="Name" type="text" onChange={
  //       event=>setState(prev=>({...prev,name:event.target.value}))
  //     }/>
      
  
  //     <InputControl label="password" type="password" onChange={
  //       event=>setState(prev=>({...prev,password:event.target.value}))
  //     }/>

     
     
    // </div>

    return(
      <div>
        <div className="styles.background">
        <div className="styles.shape"></div>
        <div className="styles.shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" onChange={
           (event)=>setState(prev=>({...prev,name:event.target.value}))
        }/>

        <label htmlFor="email">email</label>
        <input type="email" onChange={
            (event)=>setState(prev=>({...prev,email:event.target.value}))
        }/>

        <label for="password">Password</label>
        <input type="password" onChange={
            (event)=>setState(prev=>({...prev,password:event.target.value}))
        } />

<p>dont? have an account ? please {" "} <span><Link to="../Signup">Signup</Link></span></p>
        <button onClick={handleSubmit}>Log In</button>
        <div className="styles.social">
          <div className="styles.go"><i class="fab fa-google"></i>  Google</div>
          <div className="styles.fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
      </div>


    )
}
