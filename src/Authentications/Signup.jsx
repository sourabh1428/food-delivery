import React from 'react'
import { useState } from "react";
import '../app.css';
import './formstyle.css';
import { Link ,useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../firebase.js';

export default function Signup() {
  const navigate=useNavigate();
  const [state, setState] = useState({
    name:'',
    email:'',
    password:''
  });
  const [err1, setErr1] = useState("");
  const [submitBtndis,submitBtnset]=useState(false);
  const handleSubmit = event =>{
    event.preventDefault();
    console.log('form submitted ✅');
    console.log(state);

    submitBtnset(true);
    createUserWithEmailAndPassword(auth,state.email,state.password)
    .then(async(res)=>{
      submitBtnset(false);
      console.log(res);
      const user =res.user;
      await updateProfile(user,{displayName:state.name});
      navigate("/");
  }
    
    )
    .catch((err)=>{
      submitBtnset(false);
      alert(err);
      setErr1("err");
      console.log("errror",err);
      });
    }
    return(
      <div>
        <div className="styles.background">
        <div className="styles.shape"></div>
        <div className="styles.shape"></div>
    </div>
    <form>
        <h3>Sign up!</h3>

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
        <p>already have an account ? please {" "} <span><a href="login">login</a></span></p>
        <p style={"background-color:red"}>{err1}</p>
        <button onClick={handleSubmit} disable={submitBtndis}>Signup</button>
        <div className="styles.social">
          <div className="styles.go"><i class="fab fa-google"></i>  Google</div>
          <div className="styles.fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    </div>
    );
      }
