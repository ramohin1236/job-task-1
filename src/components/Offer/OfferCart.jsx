/* eslint-disable react/prop-types */

const OfferCart = ({img}) => {
    return ( 
        <div className="w-[358px] h-[176px]  shadow-md flex gap-8  justify-center items-center mt-6">

         <div>
            <img className='w-[198px] h-[176px]' src={img} alt="" />
         </div>

         <div>
              <p className='text-[14px] font-medium'>With bkash payment only</p>
              <p className='text-[16px] font-semibold text-[#006CE4]'>up to 14% discount on the base fare of domestic flights</p>
         </div>
            
        </div>
    );
};

export default OfferCart;