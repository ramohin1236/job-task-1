/* eslint-disable react/no-unescaped-entities */
import man from '/public/Rectangle 32.png';
import man1 from '/public/Rectangle 30.png';
import man2 from '/public/Rectangle 33.png';
import { IoMdStar } from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const Testimonial = () => {
    return (
        <div>
             <div className=" 2xl:ml-64  ">
             <p className="text-[32px] font-semibold">Testimonials</p>

             </div>
            

             <div className="flex justify-center items-center 2xl:w-[1465px] h-[447px] bg-[#006CE4] 2xl:mx-auto mt-12 ">
                         <div className='relative mr-6 opacity-40 '>
                               <img src={man1} alt="" ></img>
                            </div>
                            <div className='absolute mr-[970px] text-white text-3xl'>
                            <FaArrowLeftLong />
                           </div>
                <div className="w-[766px] h-[283px] bg-white">


                             
                       <div className='flex gap-6 items-center justify-center'>
                          <div>
                          <img className='object-cover w-72 rounded-lg h-[283px]' src={man} alt="" />
                          </div>
                        
                                             {/* middle */}
                          <div className='p-16'>
                            <p className='text-[14px] font-medium'>"Unforgettable journeys with John and Sarah! Their travel expertise turned our dreams into reality. Can't wait to explore with them again!"</p>
                            <p className='text-[18px] font-semibold mt-6'>Emily</p>
                            <p  className='text-[12px]'>Adventure Enthusiast</p>

                            <div className='flex  text-[#FFB700]'>
                                   <IoMdStar/>
                                   <IoMdStar/>
                                   <IoMdStar/>
                                   <IoMdStar/>
                                
                            </div>
                          </div>
                        
                          
                       </div>
                </div>
                <div className='ml-6 opacity-40'>
                               <img src={man2} alt="" ></img>
                            </div>
                            <div className='absolute ml-[970px] text-white text-3xl'>
                            <FaArrowRightLong />
                           </div>
                            
</div>
        </div>
    );
};

export default Testimonial;