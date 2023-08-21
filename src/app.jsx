import React from 'react';
import Signup from './Authentications/Signup';
import Overall from './Components/Overall';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Loginpage from './Authentications/Loginpage';

export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Overall/>}/>
          <Route path="/login" element={<Loginpage/>}/>

        </Routes>
      </Router>
      
      
    </div>
  )
}
