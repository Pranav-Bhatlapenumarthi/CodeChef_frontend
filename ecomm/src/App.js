// import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Product from './ProductList.js'

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
      </main>
    </div>
  );
}

export default App;
