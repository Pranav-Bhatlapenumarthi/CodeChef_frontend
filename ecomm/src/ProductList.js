import React, { useEffect, useState } from 'react';
import './ProductList.css';

// const Products = () => {
//   return (
//     <div className="products-container">
//       <div className="content-container">
//         <h1>EComm</h1>
//         <p>this is a dummy paragraph</p>
//       </div>
//     </div>
//   );
// };

// Importing necessary libraries and components


// Defining the Product component
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
          <hr></hr>
          <div className='button'>
            <button type="button" class="btn btn-dark">Know more</button>
            <button type="button" class="btn btn-dark">Add to Cart</button>
          </div>
          {/* <p class="card-text">{product.description}</p> */}
        </div>
      ))}
      </div>
    </div>
  );
}
export default Products