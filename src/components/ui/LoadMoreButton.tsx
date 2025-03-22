
const LoadMoreButton = () => {
  return (
    <button className="relative px-8 py-3 text-white text-lg font-semibold rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md overflow-hidden">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="relative z-10">Load More</span>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-white opacity-10 blur-xl rounded-full transition-all duration-500 group-hover:scale-150"></div>
      </div>
    </button>
  );
};

export default LoadMoreButton;
