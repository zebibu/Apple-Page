import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <>
      {/* Floating Button */}
      <button className="cart-toggle" onClick={() => setOpen(!open)}>
        Cart ({cartItems.length})
      </button>

      {/* Cart Panel */}
      {open && (
        <div className="cart-wrapper">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul className="cart-list">
              {cartItems.map((item, index) => (
                <li key={index}>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <p className="total">
            Total: $
            {cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </p>
        </div>
      )}
    </>
  );
}

export default Cart;
