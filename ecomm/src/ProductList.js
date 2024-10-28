import React, { useEffect, useState } from 'react';
import './ProductList.css';

function Products() {
  const [products, setProducts] = useState([]);

  // Fetching product data from an API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    
    <div className="product">
      <div className='product-container'>
      {products.map(product => (
        <div className="content-container">
          <h4>{product.title}</h4>
          <h7>{product.description}</h7>
          <br></br>
          <br></br>
          <img src={product.image} alt="alt tag" width="200"></img>
          <hr></hr>
          <div className='button'>
            <div className='cart'>
              <button type="button" class="btn btn-dark">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
    
  );
}
export default Products