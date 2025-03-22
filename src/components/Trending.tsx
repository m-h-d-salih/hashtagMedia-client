import flag from "../assets/flag.png";
import chair from "../assets/chair.png";
import mobile from "../assets/mobile.png";
import bottle from "../assets/bottle.png";
import mask from "../assets/mask.png";
import TrendingCard from "./ui/TrendingCard";
import LoadMoreButton from "./ui/LoadMoreButton";

const Trending = () => {
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
    <div className="py-20 px-4 w-full text-center bg-gray-100">
      <div className="flex items-center justify-center mb-2">
                    <div className="h-px bg-gray-400 w-24"></div>
                    <h2 className="text-2xl font-bold mx-4">TRENDING</h2>
                    <div className="h-px bg-gray-400 w-24"></div>
                </div>
                <p className="text-gray-600 text-sm mb-12">Top oven in this week</p>
    <div
      className="p-8 bg-cover bg-center min-h-screen z-20"
      style={{ backgroundImage: `url(${flag})` }}
    >
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product, index) => (
          <TrendingCard key={index} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
      <LoadMoreButton/>
      </div>
    </div>
    </div>
  );
};

export default Trending;
