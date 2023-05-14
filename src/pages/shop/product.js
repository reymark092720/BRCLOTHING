import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Button from 'react-bootstrap/Button';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, addToFavorite } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product position-relative">
      <Button variant="outline-dark position-absolute top-0 end-0"   onClick={() => addToFavorite(id)}><i class="bi bi-heart-fill " style={{fontSize: '3rem', color: 'white'}}></i></Button>
      <img className="border border-dark p-3" alt="..." src={productImage} />
      <div className="description">
        <p>
          <h4>{productName}</h4>
        </p>
        <p> ₱{price}</p>
      </div>
      <Button variant="outline-dark w-75" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </Button>
    </div>
  );
};