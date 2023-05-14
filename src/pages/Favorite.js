import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../products";
import { FavoriteItem } from "../pages/Favorite-item";
import { Link } from "react-router-dom";


export const Favorite = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Favorite Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <FavoriteItem data={product} />;
          }
        })}
      </div>

     
        <div className="d-flex-block">
          
          <Link to="/shop" className='btn btn-outline-danger text-dark  text-decoration-none fw-bolder fs-3 mb-4'> Continue Shopping </Link>
          
        </div>
      
        <h1> You don't have any favorite item yet!</h1>
      
    </div>
  );
};