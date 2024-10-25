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
        {/* //  <h2>{product.title}</h2>
        //   <p>{product.description}</p>
        //   <button>Add to cart</button>

        // </div> */}
          <div class="card-body">
            <h4>{product.title}</h4>
              <button type="button" class="btn btn-dark">Click to know more</button>
              <button type="button" class="btn btn-dark">Add to Cart</button>
            {/* <p class="card-text">{product.description}</p> */}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
export default Products