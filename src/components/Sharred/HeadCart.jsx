/* eslint-disable react/prop-types */


const HeadCart = ({title, subtitle, extrasubtitle}) => {
    return (
        <div className="w-[221px] h-[55px] border-2 rounded-xl  ">
           <div className="flex  h-full justify-evenly w-full ">
           <div style={{"border-right": "2px solid gray","padding":"2px"}}>
                <p className="text-[16px] font-semibold p-3">{title}</p>
            </div>
            <div className="pt-0">
                <p className="text-[14px] font-medium p-2 h-[15px]">{subtitle}</p>
                <p className="h-[15px] mt-2">{extrasubtitle} </p>
            </div>
           </div>
            
        </div>
    );
};

export default HeadCart;