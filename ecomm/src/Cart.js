import './Cart.css';

function Cart({cartItems, products, removeFromCart}) {

  const totalPrice = cartItems.reduce((sum, itemId) => {
    const item = products.find(product => product.id === itemId);
    return sum + item.price;
  }, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(itemId => {
          const item = products.find(product =>product.id === itemId);
          return (
            <li key={item.id}>
              {item.title} - ₹{item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>  
            </li>
          );
        })}
      </ul>
      <p>Total: ₹ {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
