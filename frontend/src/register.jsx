// needs back-end work to be functional

import React, { Component } from "react";
import "./register.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./photos/Artkart-logo.png";
import axios from "axios";
import ky from 'ky';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      mobile: "",
      address: "",
      password: "",
    };
    this.changeusername = this.changeusername.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changemobile = this.changemobile.bind(this);
    this.changeaddress = this.changeaddress.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.send = this.send.bind(this);
  }
  // const register = (e) => {
  //   e.preventDefault();
  //   // back-end work req. Not sure about this line
  // };

  changeusername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changemobile(event) {
    this.setState({
      mobile: event.target.value,
    });
  }
  changeaddress(event) {
    this.setState({
      address: event.target.value,
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  send(event) {
    event.preventDefault();

    const registeredForm = {
      username: this.state.username,
      email: this.state.email,
      mobile: this.state.mobile,
      address: this.state.address,
      password: this.state.password,
    };
    console.log("working");
    //    axios.post("http://localhost:4000/app/signup", registeredForm)
    //    .then((response) => console.log(response.data))
    //    .catch((error) => {
    //     console.log(error)
    // });
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:4000/app/signup',
    //   data: 'registered'
    // });
    ky.post('http://localhost:4000/app/signup', registeredForm)
  window.location = "/";
  }

  render = () => {
    return (
      <div className="register">
        <Link to="/">
          <img className="register_logo" src={image} />
        </Link>

        <div className="register_container">
          <h1>Create New Account</h1>
          <form onSubmit={this.send}>
            <h5>Your Name</h5>
            <input
              type="text"
              onChange={this.changeusername}
              defaultValue={this.state.username}
            />
            <h5>Your E-mail</h5>
            <input
              type="text"
              onChange={this.changeemail}
              defaultValue={this.state.email}
            />

            <h5>Your Mobile Number</h5>
            <input
              type="text"
              onChange={this.changemobile}
              defaultValue={this.state.mobile}
            />

            <h5>Your Address</h5>
            <input
              type="text"
              onChange={this.changeaddress}
              defaultValue={this.state.address}
            />

            <h5>Create Password</h5>
            <input
              type="password"
              onChange={this.changepassword}
              defaultValue={this.state.password}
            />

            <input
              type="Submit"
              defaultValue="Submit"
              // onClick={register}
              className="createaccount_button"
            />
          
          </form>
        </div>
      </div>
    );
  };
}

export default Register;
