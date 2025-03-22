
interface IProps {
  text: string;
}

const ShopButton = ({ text }: IProps) => {
  return (
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-full shadow-lg transition-all duration-300 
    hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-300 hover:shadow-xl hover:scale-105">
      {text}
    </button>
  );
};

export default ShopButton;
