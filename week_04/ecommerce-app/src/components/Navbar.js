import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center shadow-lg">
      <Link to="/" className="text-2xl font-bold text-purple-400">ShopOnline</Link>
      <Link to="/cart" className="text-lg font-semibold hover:text-purple-300">🛒 Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;
