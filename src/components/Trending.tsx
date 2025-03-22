import React from 'react';
import flag from '../assets/flag.png';
import chair from '../assets/chair.png';
import mobile from '../assets/mobile.png';
import bottle from '../assets/bottle.png';
import mask from '../assets/mask.png';

const Trending = () => {
  // Dummy data for trending products
  const trendingProducts = [
    {
      name: "Harwick Extra Tall Ergonomic Leather Drafting Chair",
      price: "$333.00 USD",
      image: chair,
    },
    {
      name: "Naztech MagBuddy Elite Cup Holder Mount Black",
      price: "$34.00 USD",
      image: mobile,
    },
    {
      name: "Liquid Motion Bubbler (Black Purple)",
      price: "$16.94 USD",
      image: bottle,
    },
    {
      name: "3D Illusion Grow LED Alien Shapes Lamp 7 Colors USB Power",
      price: "$26.33 USD",
      image: mask,
    },
  ];

  return (
    <div
      className="p-8 bg-cover bg-center min-h-screen z-10"
      style={{ backgroundImage: `url(${flag})` }}
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-white">TRENDING</h1>
      <h2 className="text-xl text-gray-200 text-center mb-12">Top oven in this week</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {trendingProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-white border-opacity-20"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain rounded-md mb-4 "
            />
            {/* Product Name */}
            <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
            {/* Product Price */}
            <p className="text-gray-200">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Trending;