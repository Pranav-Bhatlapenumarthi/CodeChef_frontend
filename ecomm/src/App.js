import './App.css';
import Home from './Home.js'
import Product from './ProductList.js'
import Cart from './Cart.js';

function App() {
  return (
    <div className="App">  
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="product">
          <Product />
        </section>
        <section id="cart">
          <Cart />
        </section>
      </main>
    </div>
  );
}

export default App;
