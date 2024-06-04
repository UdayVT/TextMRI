import {React, useState} from 'react';
import './SignIn.css'
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) =>
  {
      event.preventDefault();
      if(name !== "Uday")
      {
        window.alert("Could not find account with name "+name);
        return;
      }

      if(password !== "Pulp@123")
      {
        window.alert("Incorrect password");
        return;
      }

      navigate("/main/home");
  }

  return (
    <div className="SignIn">
      <div className="signup-form">
        
        <img src={logo} alt="TextMRI Logo" className="logo" />
        
        <form onSubmit={handleSubmit}>
          <p className='label'>Name*</p>
          <input type="text" placeholder="Enter your name" required value={name}
                  onChange={(e) => setName(e.target.value)}/>
          
          <p className='label'>Password*</p>
          <input type="password" placeholder="Create a password" required minLength="8" value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
           
          <button type="submit">Get started</button>
        </form>
        
        <p id="copyright">&copy; Pulp Internet Corporation 2024</p>
      </div>
      
      <div className='chat-background'></div> 
    </div>
  );
}

export default SignIn;
