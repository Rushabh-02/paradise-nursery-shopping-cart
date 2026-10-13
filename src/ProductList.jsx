import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying',
    price: 299,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b3a',
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Air Purifying',
    price: 399,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee',
  },
  {
    id: 3,
    name: 'Spider Plant',
    category: 'Air Purifying',
    price: 249,
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333',
  },
  {
    id: 4,
    name: 'Areca Palm',
    category: 'Air Purifying',
    price: 499,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78',
  },
  {
    id: 5,
    name: 'Rubber Plant',
    category: 'Air Purifying',
    price: 449,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09',
  },
  {
    id: 6,
    name: 'Boston Fern',
    category: 'Air Purifying',
    price: 349,
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115',
  },
  {
    id: 7,
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 199,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09',
  },
  {
    id: 8,
    name: 'Echeveria',
    category: 'Succulents',
    price: 249,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78',
  },
  {
    id: 9,
    name: 'Jade Plant',
    category: 'Succulents',
    price: 299,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
  },
  {
    id: 10,
    name: 'Haworthia',
    category: 'Succulents',
    price: 229,
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115',
  },
  {
    id: 11,
    name: 'String of Pearls',
    category: 'Succulents',
    price: 349,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09',
  },
  {
    id: 12,
    name: 'Zebra Cactus',
    category: 'Succulents',
    price: 279,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
  },
  {
    id: 13,
    name: 'Monstera',
    category: 'Decorative Plants',
    price: 599,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b',
  },
  {
    id: 14,
    name: 'Fiddle Leaf Fig',
    category: 'Decorative Plants',
    price: 699,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09',
  },
  {
    id: 15,
    name: 'Pothos',
    category: 'Decorative Plants',
    price: 299,
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e',
  },
  {
    id: 16,
    name: 'ZZ Plant',
    category: 'Decorative Plants',
    price: 449,
    image: 'https://images.unsplash.com/photo-1597055181300-a8b4be6d9b77',
  },
  {
    id: 17,
    name: 'Calathea',
    category: 'Decorative Plants',
    price: 499,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
  },
  {
    id: 18,
    name: 'Dracaena',
    category: 'Decorative Plants',
    price: 399,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78',
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState([]);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page" id="plants">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="#plants">Plants</a>
        <a href="#cart">Cart ({cartCount})</a>
      </nav>

      <header className="product-header">
        <h1>Paradise Nursery Plants</h1>
        <p>Find the perfect plants for your home.</p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = addedItems.includes(plant.id);

                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />
                    <h3>{plant.name}</h3>
                    <p>₹{plant.price}</p>
                    <button
                      type="button"
                      disabled={isAdded}
                      onClick={() => {
                        dispatch(addItem(plant));
                        setAddedItems((previous) => [
                          ...previous,
                          plant.id,
                        ]);
                      }}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
