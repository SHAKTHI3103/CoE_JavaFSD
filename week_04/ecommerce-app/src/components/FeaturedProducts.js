import React from "react";
import ProductCard from "./ProductCard";

const featuredProducts = [
  { id: 6, name: "Smart Watch", price: 199, image: "/assets/watch.jpg" },
  { id: 7, name: "Leather Jacket", price: 350, image: "/assets/jacket.jpg" },
  { id: 8, name: "High Heels", price: 220, image: "/assets/heels.jpg" }
];

const FeaturedProducts = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-purple-300">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
