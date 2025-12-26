import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <>
      <Navbar />

      <div className="main">
        <h1 className="shop-title">Fake Store</h1>

        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}

        <div className="product-container">
          {products.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="category">{product.category}</p>
              <p className="price">₹ {product.price}</p>
            </div>
          ))}
        </div>

        {visibleCount < products.length && !loading && (
          <button onClick={showMore} className="show-more-btn">
            Show More
          </button>
        )}
      </div>

      <Footer />
    </>
  );
};

export default App;
