import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { Link } from "react-router-dom";


import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="d-flex-block">
          <p className="fw-bolder fs-4"> Subtotal: ₱ {totalAmount} </p>
          <Link to="/shop" className='btn btn-outline-danger text-dark w-75 text-decoration-none fw-bolder fs-3 mb-4'> Continue Shopping </Link>
          <Link to="/shop" className='btn btn-outline-danger text-dark w-75 text-decoration-none fw-bolder fs-3'
          >
            {" "}
            Checkout{" "}
          </Link>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};