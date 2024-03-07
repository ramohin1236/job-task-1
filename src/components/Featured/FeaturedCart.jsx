/* eslint-disable react/prop-types */


const FeaturedCart = ({image, title}) => {
    return (
        <div className="w-[360px]  h-[403px] shadow-lg mt-10">

            <div className="w-[340px] h-[372.28px]   ml-[10px] ">
                  <img className='w-[340px] h-[240px] rounded-md object-cover ' src={image} alt="" />

                  <h1 className='font-bold text-[18px] mt-2 h-11'>{title}</h1>
                 
                 <div className=' w-full  text-center mt-10'>
                 <button className='text-[18px] font-medium w-[201px] h-[44px] bg-[#FFB700] rounded-[10px]'>View More</button>
                 </div>
            </div>
              
        </div>
    );
};

export default FeaturedCart;