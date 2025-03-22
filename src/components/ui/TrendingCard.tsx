const TrendingCard = ({ product }: any) => {
    return (
      <div className="bg-transparent w-76 backdrop-blur-sm p-7 text-black rounded-lg shadow-md hover:shadow-xl  transition-all duration-300 ease-in-out transform hover:scale-105 border border-[#F1E7E7] border-opacity-20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p>{product.price}</p>
      </div>
    );
  };
  
  export default TrendingCard;