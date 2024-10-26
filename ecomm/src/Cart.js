import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (name, price) => {
    const newCart = [...cart, { name, price }];
    setCart(newCart);
    updateTotalPrice(newCart);
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    updateTotalPrice(newCart);
  };

  const updateTotalPrice = (newCart) => {
    const newTotalPrice = newCart.reduce((total, item) => total + item.price, 0);
    setTotalPrice(newTotalPrice.toFixed(2));
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Rs.{item.price.toFixed(2)}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: Rs.{totalPrice}</p>
      <button onClick={() => addItem('Product A', 25)}>Add Product A - Rs.25</button>
      <button onClick={() => addItem('Product B', 75)}>Add Product B - Rs.75</button>
    </div>
  );
};

export default Cart;
