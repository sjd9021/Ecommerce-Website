import React from "react";
import "./product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is in the basker", basket);
  const addtobasket = () => {
    //dispatch items to the datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="proct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />

      <button className="button" onClick={addtobasket}>
        <strong>ADD TO BASKET</strong>
        <ShoppingCartIcon className="button_cart" />
      </button>
    </div>
  );
}

export default Product;
