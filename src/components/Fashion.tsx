import fashion from '../assets/fashion.png';
import toys from '../assets/toys.png';
import houseHold from '../assets/household.png';
import personalCare from '../assets/personalcare.png';
import ShopButton from './ui/ShopButton';

const Fashion = () => {
  return (
    <section className='flex flex-col md:flex-row mt-2 justify-center space-y-4 md:space-y-0 md:space-x-4 p-4'>
      <div className='relative w-full md:w-auto'>
        <img src={fashion} className='w-full md:w-[588px] h-auto md:h-[603px] object-cover' alt="Fashion" />
        <ShopButton text={'Fashion'}/>
      </div>

      <div className='flex flex-col space-y-4 w-full md:w-auto'>
        <div className='relative bg-[#FFF1D6] h-72  w-full md:w-72 flex justify-center items-center'>
          <img src={toys} className='h-48 object-contain' alt="Toys" />
          <ShopButton text={'Toys'}/>
        </div>
        <div className='relative bg-[#EFEFEF] h-74 w-full md:w-72 flex justify-center items-center'>
          <img src={houseHold} className='h-48 object-contain' alt="Household" />
          <ShopButton text={'Household'}/>
        </div>
      </div>

      <div className='relative w-full md:w-auto'>
        <div className='bg-[#FFE3CE] h-78 md:h-[603px] w-full md:w-72 flex justify-center items-center'>
          <img src={personalCare} className='h-48 md:h-auto object-contain' alt="Personal Care" />
        </div>
        <ShopButton text={'Personal Care'}/>
      </div>
    </section>
  );
};

export default Fashion;