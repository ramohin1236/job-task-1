import { FaSearch } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import HeadCart from '../Sharred/HeadCart';
import HeadItems from './HeadItems';
import coverphoto from '/public/sss.png';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className='absolute flex  items-center justify-center xl:ms-44 2xl:ml-44'>
             <img className='object-cover ' src={coverphoto} alt="" />
            </div>

               <div className='relative lg:w-full xl:w-full 2xl:w-full  mt-0'>
                   <Navbar/>
                </div> 
               <div className='relative flex lg:ml-[421px] lg:mt-[44px] ml-16 mt-16'>
                  <p className='text-white text-[40px] font-medium'>Welcome to <span className='text-blue-900 font-bold'>AirBook</span></p>
                </div> 

                <div className='relative  mt-0 '>
                   <HeadItems/>
                </div> 

                <div className='relative ml-[392px] -mt-8 flex gap-4'>
                    <HeadCart title={"DAC"} subtitle={"Dhaka"} extrasubtitle={"Hazrat Shahjalal"}/>
                    <HeadCart title={"CXB"} subtitle={"Cox'x Bazar"} extrasubtitle={"Cox’s  international"}/>
                    <HeadCart title={"03"} subtitle={"October"} extrasubtitle={"tuesday, 2023"}/>
                    <HeadCart title={"05"} subtitle={"October"} extrasubtitle={"tuesday, 2023"}/>
                    <div className='w-[74px] h-[55px] bg-[#FFB700] rounded-md'>
                    <FaSearch className='ml-7 mt-4 text-2xl text-white'/>
                    </div>
                </div>

        </div>
    );
};

export default Header;