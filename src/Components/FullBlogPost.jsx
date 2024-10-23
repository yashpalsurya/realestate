import React from 'react';

const FullBlogPost = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Benefits of Property Investment
      </h1>

      <img
        src="https://images.unsplash.com/photo-1719299225324-301bad5c333c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Property Investment"
        className="w-full h-80 object-cover rounded-lg mb-8"
      />

      <p className="text-lg text-gray-700 leading-relaxed">
        Investing in property is one of the safest ways to grow wealth and
        secure financial stability for the future. From tax benefits to
        long-term appreciation, property investment offers numerous advantages.
        Unlike stocks or bonds, real estate provides a tangible asset that can
        be lived in, rented out, or sold when the market is favorable.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Whether you are looking at houses, villas, farmhouses, or bungalows,
        each type of property has its own unique advantages. By making informed
        decisions and investing in growing areas, you can reap both financial
        rewards and personal enjoyment.
      </p>
    </div>
  );
};

export default FullBlogPost;
