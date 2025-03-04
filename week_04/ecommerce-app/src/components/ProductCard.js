import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-lg shadow-lg text-center bg-gray-800 hover:bg-gray-700 transition duration-300">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2 text-purple-300">{product.name}</h2>
      <p className="text-gray-400">${product.price}</p>
      <button
        onClick={addToCart}
        className="bg-purple-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-purple-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;