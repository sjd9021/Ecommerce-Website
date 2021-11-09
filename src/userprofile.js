// to be able to update email, address etc. 
import React from "react";
import "./register.css";
import image from "./photos/Artkart-logo.png";

function UserProfile() {
    return (
    <div className='userprofile'>
        <Link to="/">
        <img className="userprofile_logo" src={image} />
        </Link>
    </div>
    )
}

export default UserProfile;