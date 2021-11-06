import React from "react";
import "./home.css";
import image from "./photos/Union-Street-banners.jpeg";
import { dialogClasses } from "@mui/material";
import Product from "./product";

function home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={image} alt="" />
      </div>
      <div className="home_row">
        {/* 2 products*/}
        <Product
          id="12321341"
          title="IPAD PRO 64GB"
          price="199.99"
          image={"https://m.media-amazon.com/images/I/71SAHzzQqkL._SL1500_.jpg"}
          rating={5}
        />
        <Product
          id="12321343"
          title="Pebble Cosmos, Bluetooth Calling smartwatch"
          price="29.99"
          image={"https://m.media-amazon.com/images/I/61a4NafL8HS._SL1500_.jpg"}
          rating={5}
        />
      </div>

      <div className="home_row">
        {/* 3 products*/}
        <Product
          id="123213321"
          title="Samsung Galaxy Z Flip3 5G (Cream, 8GB RAM, 128GB Storage)"
          price="1199.99"
          image={"https://m.media-amazon.com/images/I/71f2I8cltBL._SL1500_.jpg"}
          rating={1}
        />
        <Product
          id="1232133214"
          title="Captain Gogo Paper Gocone PreRolled (UnBleached Brown)"
          price="4.99"
          image={"https://m.media-amazon.com/images/I/71SAHzzQqkL._SL1500_.jpg"}
          rating={2}
        />
        <Product
          id="12321311"
          title="Pebble Cosmos, Bluetooth Calling smartwatch Black"
          price="29.99"
          image={"https://m.media-amazon.com/images/I/81xNoD9VbuL._SL1500_.jpg"}
          rating={5}
        />
      </div>

      <div className="home_row">
        {/* 1 products*/}
        <Product
          id="123213419"
          title="Pebble Cosmos, Bluetooth Calling smartwatch Black"
          price="29.99"
          image={"https://m.media-amazon.com/images/I/91wTY-X240L._SL1500_.jpg"}
          rating={5}
        />
      </div>
    </div>
  );
}

export default home;
