/* eslint-disable react/prop-types */
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const TraveCart = ({name,img,image,title,category,date}) => {
    return (
        <div className="w-[360px]  h-[403px] shadow-lg mt-10">

            <div className="w-[340px] h-[372.28px]   ml-[10px] ">
                  <img className='w-[340px] h-[240px] rounded-md object-cover ' src={image} alt="" />
                  <div className="flex gap-12 mt-3">
                      <p className="ml-2 text-[#FFB700] text-[14px] font-semibold">{category}</p>
                      <p className="text-[14px]">{date}</p>
                  </div>
                  <h1 className='font-bold text-[18px] mb-6 mt-4 h-11'>{title}</h1>

                  <hr />
                 
                 <div className='flex justify-between '>
                         <div className="flex gap-2 items-center justify-center mt-2">
                         <img className="w-8 h-8 rounded-full " src={img} alt="" />
                         <p className="text-14px">{name}</p>
                         </div>

                         <div>
                             <p className="text-[#FFB700] flex items-center gap-2">Read More <MdKeyboardDoubleArrowRight /> </p>
                         </div>
                 </div>
            </div>
              
        </div>
    );
};

export default TraveCart;