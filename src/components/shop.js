import React from "react";
import watch from "../images/6505894.jpg"

const FleaMarket = () => {
  const products = [
    {
      id: 1,
      name: "item 1",
      price: 50,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "item 2",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "item3",
      price: 75,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "item4",
      price: 30,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flea-market">
      <header>
        <h1>Welcome to our store</h1>

      </header>
      <p>Here we provide you with all your necessities at a reasonable price enjoy shopping</p>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{`RS${product.price}`}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleaMarket;
