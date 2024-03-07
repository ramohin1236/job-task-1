import './HeadItems.css';
import { FaAngleDown } from "react-icons/fa";

const HeadItems = () => {
    return (
       <div>
         <div className=' w-[1119px] h-[193px] bg-white rounded-md mx-auto mt-16	 '>
           
           </div>
            <div className=' w-[1014px] h-[99px]  mx-auto -mt-36'>
               {/* small box group */}
               <div className='flex justify-between'>
          {/* first element */}
               <div className='flex gap-6'>
                     <div className='flex bg-slate-100 w-28 h-10 items-center gap-2 rounded-md'>
                          <div className='ml-2 h-4 w-4 rounded-full border-2 border-indigo-300'></div>
                          <div>
                            <p className='font-medium text-[13px]'>One Way</p>
                          </div>
                     </div>


                     <div className='flex bg-blue-600 w-28 h-10 items-center gap-2 rounded-md'>
                          <div className='ml-2 h-6 w-6 rounded-full border-2 border-indigo-300'>
                            <div className='ml-1 mt-1 h-3 w-3 rounded-full border-2 bg-white'></div>
                          </div>
                          <div>
                            <p className='font-medium text-[13px] text-white'>Round Trip</p>
                          </div>
                     </div>
               </div>

                {/* last elemeent */}

                <div className='flex gap-5 mr-6'>
                         {/* small box */}
                  <div className='flex bg-slate-100 w-28 h-10 items-center gap-2 rounded-md'>
                          
                          <div className=' text-center w-full items-center flex flex-row-reverse gap-3'>
                          <FaAngleDown className='text-[#006CE4] mr-2'/>
                            <p className='font-medium text-[13px] text-[#006CE4]'>
                                1 Traveller 
                                
                                </p>
                                
                          </div>

                     </div>


                     <div className='flex bg-slate-100 w-28 h-10 items-center gap-2 rounded-md'>
                          
                          <div className=' text-center w-full items-center flex flex-row-reverse gap-3'>
                          <FaAngleDown className='text-[#006CE4] mr-2'/>
                            <p className='font-medium text-[13px] text-[#006CE4]'>
                                Economy
                                
                                </p>
                                
                          </div>

                          
                         
                     </div>

                </div>

               </div>
   
            </div>
       </div>
    );
};

export default HeadItems;