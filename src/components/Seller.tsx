import boat from "../assets/boat.png";
import redirPod from "../assets/redAirPod.png";

const Seller = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center text-4xl items-center gap-6 px-6 md:px-10">
      <div className="relative bg-[#C52A2E] w-full md:w-[600px] h-[322px] flex justify-center items-center rounded-lg p-6 md:ml-10">
        <div className="absolute  right-10 top-4 text-white  font-bold">GAMES</div>
        <img src={boat} className="max-w-full md:absolute left-24 top-16 h-auto" alt="Boat" />
        <div className="absolute left-12 bottom-4 text-white  font-bold flex flex-col items-center">
          <div>TOYS</div>
          <div>&</div>
        </div>
      </div>

      <div className="relative bg-[#C52A2E] w-full md:w-[600px] h-[322px]   flex justify-center items-center rounded-lg p-6 md:mr-10">
        <div className="absolute left-6 top-56  text-white  font-bold">BEST</div>
        <div className="absolute left-4 top-66 text-white  font-bold">SELLER</div>
        <img src={redirPod} className="max-w- absolute bottom-7 h-auto" alt="Red AirPod" />
      </div>
    </section>
  );
};

export default Seller;
