/* eslint-disable react/prop-types */

import { IoMdStar } from "react-icons/io";



const AirlinesCart = ({review,image, title}) => {
    return (
        <div className="w-[231px] h-[51px] flex items-center mb-8 gap-3">
             <div>
                <img src={image} alt="" />
             </div>
             <div>
                <p className=' text-[14px] text-[#006CE4]'>{title}</p>

               <div className='flex gap-2 items-center'>
                <div> <p><IoMdStar className='text-yellow-500 w-[14px] h-[14px]'/></p></div>
                <div> <p className='text-[13px]'>{review}( 783 review )</p></div>
               </div>
             </div>
        </div>
    );
};

export default AirlinesCart;