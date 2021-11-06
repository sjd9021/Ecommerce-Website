import React from "react";
import "./login.css";
import image from "./photos/logo-ashoka.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={image} />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button type="submit" className="login_signinbutton">
            Sign In
          </button>
        </form>

        <p>
          By Signing in you are agreeing to forego all your private data to
          Samvit Jatia for his discrepancy.
        </p>

        <button className="login_registerbutton">Create your account</button>
      </div>
    </div>
  );
}

export default Login;
