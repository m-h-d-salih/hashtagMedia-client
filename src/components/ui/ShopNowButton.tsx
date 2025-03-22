import React from 'react'

const ShopNowButton = () => {
  return (
    <button className="relative overflow-hidden bg-red-600 text-white px-6 py-2 w-max uppercase font-medium transition-all duration-500 ease-in-out group">
    <span className="relative z-10">Shop Now</span>
    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-red-600 w-0 group-hover:w-full transition-all duration-500"></span>
  </button>
  )
}

export default ShopNowButton
