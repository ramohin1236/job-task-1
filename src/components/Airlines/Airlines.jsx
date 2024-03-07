import AirlinesCart from "./AirlinesCart";
import img2 from '/public/BBA.png';
import img3 from '/public/Emirates.png';
import img4 from '/public/Turkish Airlines.png';
import img5 from '/public/Singapore Airlines.png';
import img6 from '/public/Malaysia-1.png';

import img8 from '/public/BBA.png'; 
const Airlines = () => {
    return (
        <div className="">
            <p className="text-[32px] font-semibold">Popular Airlines</p> 
            {/* number first */}
         

          
          <div className="2xl:w-[1270px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  2xl:grid-cols-4">
          <div className="mt-6 flex flex-col ">
                <AirlinesCart image={img8} title={"Biman Bangladesh Airlines"} review={4}/>
                <AirlinesCart image={img5} title={"Singapore Airlines"} review={5}/>
                <AirlinesCart image={img3} title={"Emirates"} review={5}/>
            </div>
            {/* number second */}
            <div className="mt-6 flex flex-col ">
            <AirlinesCart image={img3} title={"Emirates"} review={5}/>
                <AirlinesCart image={img6} title={"malaysia Airlines"} review={4}/>
                <AirlinesCart image={img8} title={"Biman Bangladesh Airlines"} review={4}/>
            </div>
            {/* number second */}
            <div className="mt-6 flex flex-col ">
                <AirlinesCart image={img4} title={"Turkish Airlines"} review={5}/>
                <AirlinesCart image={img8} title={"Biman Bangladesh Airlines"} review={4}/>
                <AirlinesCart image={img6} title={"Malayshia Airlines"} review={4}/>
            </div>
            {/* number second */}
            <div className="mt-6 flex flex-col ">
            <AirlinesCart image={img6} title={"Malayshia Airlines"} review={4}/>
                <AirlinesCart image={img8} title={"Biman Bangladesh Airlines"} review={4}/>
                <AirlinesCart image={img2} title={"Biman Bangladesh Airlines"} review={4}/>
            </div>
          </div>
        </div>
    );
};

export default Airlines;