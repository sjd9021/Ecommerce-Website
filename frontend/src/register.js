// needs back-end work to be functional

import React from "react";
import "./register.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./photos/Artkart-logo.png";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = e => {
        e.preventDefault();
        // back-end work req. Not sure about this line 
      }
    return(
        <div className="register">
      <Link to="/">
        <img className="register_logo" src={image} />
      </Link>

    <div className="register_container">
        <h1>Create New Account</h1>
        <form>
          <h5>Your Name</h5>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />

          <h5>Your E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Your Mobile Number</h5>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)}/>

          <h5>Your Address</h5>
          <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>

          <h5>Create Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <h5>Confirm Password</h5>
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>

          <button type="submit"  onClick={register}  className="createaccount_button">
            <strong>Create Account</strong>
          </button>
        </form>
    </div>
    </div>
    )
}





export default Register;