import React from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";

const products = [
  { id: 1, name: "Running Shoes", price: 120, image: "/assets/shoes.jpg" },
  { id: 2, name: "Elegant Dress", price: 250, image: "/assets/dress.jpg" },
  { id: 3, name: "Stylish Handbag", price: 180, image: "/assets/handbag.jpg" },
  { id: 4, name: "Sunglasses", price: 80, image: "/assets/glasses.jpg" },
  { id: 5, name: "Lipstick Set", price: 45, image: "/assets/lipstick.jpg" }
];

const Home = () => {
  const { dispatch } = useCart();

  return (
    <div>
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          />
        ))}
      </div>
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default Home;
