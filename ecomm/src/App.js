// import logo from './logo.svg';
import './App.css';
import Products from'./ProductList.js'

function App() {
  return (
    <div className="App">  
      <header className='App-header'>
        <h1>E-commerce website</h1>
        <nav>
          <button onClick={() => document.getElementById('product').scrollIntoView({ behavior: 'smooth' })}>Our Products</button>
          <button>About Us</button>
          <button>Contact</button>
        </nav>       
      </header> 
      <main>
        <section id="product">
          <Products />
        </section>
      </main>
    </div>
  );
}

export default App;
