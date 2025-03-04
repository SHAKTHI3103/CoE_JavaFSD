import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-purple-300">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between border-b border-gray-700 p-2 items-center">
              <img src={item.image} alt={item.name} className="h-12 w-12 rounded" />
              <span className="text-gray-300">{item.name} - ${item.price}</span>
              <button
                className="text-red-400 hover:text-red-600"
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-lg font-bold mt-4 text-purple-300">Total: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
