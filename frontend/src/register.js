// needs back-end work to be functional

import React, { Component } from "react";
import "./register.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./photos/Artkart-logo.png";
import axios from "axios";
import { keyword } from "color-convert";
import ky from "ky";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios({
      method: "POST",
      data: {
        username: name,
        email: email,
        mobile: phone,
        address: address,
        password: password,
      },
      withCredentials: true,
      url: "http://127.0.0.1:4000/app/signup",
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div className="register">
      <Link to="/">
        <img className="register_logo" src={image} />
      </Link>

      <div className="register_container">
        <h1>Create New Account</h1>
        <form>
          <h5>Your Name</h5>
          <input type="text" onChange={(e) => setName(e.target.value)} />

          <h5>Your E-mail</h5>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />

          <h5>Your Mobile Number</h5>
          <input type="text" onChange={(e) => setPhone(e.target.value)} />

          <h5>Your Address</h5>
          <input type="text" onChange={(e) => setAddress(e.target.value)} />

          <h5>Create Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={register}
            className="createaccount_button"
          >
            <strong>Create Account</strong>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
