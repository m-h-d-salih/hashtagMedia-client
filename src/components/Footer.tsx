import { ChevronDown, Facebook, Instagram} from 'lucide-react';
import p from '../assets/p.png'
import x from '../assets/x.png'
const Footer = () => {
  return (
    <footer className="w-full bg-[#2C3B7C] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-0">
            <div>
              <h3 className="text-sm font-medium mb-2">Country/Region</h3>
              <div className="relative inline-block">
                <select className="appearance-none bg-white text-black px-4 py-2 pr-8 rounded-sm font-medium text-sm focus:outline-none cursor-pointer">
                  <option>United States | $ USD</option>
                  <option>Canada | $ CAD</option>
                  <option>United Kingdom | £ GBP</option>
                  <option>Australia | $ AUD</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <ChevronDown className="h-4 w-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Follow Us On</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-300">
                <img src={x} className='h-5'/> 
                </a>
                <a href="#" className="hover:text-gray-300">
                 <img src={p} className='h-5'/> 
                </a>
              </div>
            </div>
          </div>
          
        </div>

        <div className="text-xs border-t border-purple-800 pt-4 flex flex-wrap justify-center md:justify-start gap-x-4">
          <span>© 2025, <a href="#" className="hover:underline">US Stores</a> Powered By Shopify</span>
          <a href="#" className="hover:underline">Refund Policy</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms Of Service</a>
          <a href="#" className="hover:underline">Shipping Policy</a>
          <a href="#" className="hover:underline">Contact Information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
