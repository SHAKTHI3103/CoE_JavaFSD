import React from "react";

const testimonials = [
  { name: "Alice Johnson", review: "Great quality and fast delivery!" },
  { name: "Mark Smith", review: "Loved the designs, will shop again!" },
  { name: "Emma Brown", review: "Affordable prices with top-notch service!" }
];

const Testimonials = () => {
  return (
    <div className="mt-10 p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-purple-300">What Our Customers Say</h2>
      <div className="mt-4 space-y-4">
        {testimonials.map((t, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded-lg">
            <p className="text-gray-300">"{t.review}"</p>
            <h4 className="text-purple-400 font-semibold">- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
