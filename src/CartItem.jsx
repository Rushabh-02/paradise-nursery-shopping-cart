import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="cart-page" id="cart">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="#plants">Plants</a>
        <a href="#cart">Cart ({cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        )})</a>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <a href="#plants">Continue Shopping</a>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ₹{item.price}</p>
                  <p>
                    Item Total: ₹{item.price * item.quantity}
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2>Total Amount: ₹{totalAmount}</h2>

          <button
            type="button"
            onClick={() => alert('Coming Soon!')}
          >
            Checkout
          </button>

          <a href="#plants" className="continue-shopping">
            <button type="button">Continue Shopping</button>
          </a>
        </>
      )}
    </div>
  );
}

export default CartItem;
