import React from 'react';
import './Home.css';

function Home(){
  return (
    <div className="home">
      <header className='App-header'>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
        </head>
        <h1>E-commerce website</h1>
        <nav>
          <button button type="button" class="btn btn-outline-warning" onClick={() => document.getElementById('product').scrollIntoView({ behavior: 'smooth' })}>
            <b>
              Products
            </b>
          </button>
          <button button type="button" class="btn btn-outline-warning" onClick={() => document.getElementById('cart').scrollIntoView({ behavior: 'smooth' })}><b>Go to Cart</b></button>
        </nav>      
      </header>
    </div>
  );
};

export default Home;
