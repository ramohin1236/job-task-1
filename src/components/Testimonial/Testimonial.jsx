/* eslint-disable react/no-unescaped-entities */
import man from '/public/Rectangle 32.png';
import man1 from '/public/Rectangle 30.png';
import man2 from '/public/Rectangle 33.png';
import { IoMdStar } from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const Testimonial = () => {
    return (
        <div>
             <div className=" 2xl:ml-64  mb-16">
             <p className="text-[32px] font-semibold ">Testimonials</p>

             </div>
            

             <div className="flex justify-center items-center 2xl:w-[1465px] h-[447px]  xl:bg-[#006CE4] 2xl:bg-[#006CE4] 2xl:mx-auto mt-20 ">
                         <div className='relative  mr-6 opacity-40 max-sm:hidden max-md:hidden'>
                               <img src={man1} alt="" ></img>
                            </div>
                            <div className='absolute mr-[970px] text-white text-3xl max-md:hidden max-sm:hidden'>
                            <FaArrowLeftLong />
                           </div>
                <div className="md:w-[766px] md:h-[283px] bg-white">


                             
                       <div className='flex max-sm:flex-wrap gap-6 md:items-center md:justify-center'>
                          <div className='max-sm:ml-20'>
                          <img className='object-cover md:w-72 rounded-lg md:h-[283px]' src={man} alt="" />
                          </div>
                        
                                             {/* middle */}
                          <div className=''>
                            <p className=' md:text-[14px] font-medium'>"Unforgettable journeys with John and Sarah! Their travel expertise turned our dreams into reality. Can't wait to explore with them again!"</p>
                            <p className='md:text-[18px] font-semibold mt-6'>Emily</p>
                            <p  className='md:text-[12px]'>Adventure Enthusiast</p>

                            <div className='flex  text-[#FFB700]'>
                                   <IoMdStar/>
                                   <IoMdStar/>
                                   <IoMdStar/>
                                   <IoMdStar/>
                                
                            </div>
                          </div>
                        
                          
                       </div>
                </div>
                <div className='ml-6 opacity-40 max-md:hidden max-sm:hidden'>
                               <img src={man2} alt="" ></img>
                            </div>
                            <div className='absolute ml-[970px] text-white text-3xl max-sm:hidden max-md:hidden'>
                            <FaArrowRightLong />
                           </div>
                            
</div>
        </div>
    );
};

export default Testimonial;