import React from "react";

const categories = ["Shoes", "Dresses", "Handbags", "Glasses", "Makeup", "Watches"];

const Categories = () => {
  return (
    <div className="mt-10 p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-purple-300">Shop by Category</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        {categories.map(category => (
          <button
            key={category}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
