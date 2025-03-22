import airpodup from '../assets/airPodup.png';
import airPodDown from '../assets/airPodDown.png';
import ShopNowButton from './ui/ShopNowButton';

const HomeContainer = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-[#E9F0FF] min-h-[500px] w-full px-6 md:px-12 py-8">
      <div className="flex flex-col space-y-4 text-center md:text-left">
        <div className="text-indigo-800">
          <p className="text-lg font-medium">SUMMER 2025</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">New Arrival Collection</h1>
        </div>
        <div className="flex justify-center md:justify-start">
          <ShopNowButton />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-8 md:mt-0">
        <img src={airPodDown} className=" w-[400px] h-[500px] md:relative left-45" />
        <img src={airpodup} className="relative md:bottom-20 w-[250px] md:w-[322px] h-auto max-w-full" />
      </div>
    </section>
  );
};

export default HomeContainer;
