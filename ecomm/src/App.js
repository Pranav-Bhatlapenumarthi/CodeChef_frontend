import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './Home.js'
import Product from './ProductList.js'
import Cart from './Cart.js';

function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const addToCart = (productId) => {
    setCartItems([...cartItems, productId]);
  }

  const removeFromCart = (productId) => {
    const newCartItems = cartItems.filter(id => id !== productId);
    setCartItems(newCartItems);
  }

  return (
    <div className="App">  
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="product">
          <Product products={products} addToCart={addToCart} />
        </section>
        <section id="cart">
          <Cart cartItems={cartItems} products={products} removeFromCart={removeFromCart} />
        </section>
      </main>
    </div>
  );
}

export default App;
