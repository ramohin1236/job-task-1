import img1 from '/public/Rectangle 18.png';
import img2 from '/public/Rectangle 18-1.png';
import img3 from '/public/Rectangle 18-2.png';
import mohin from '/public/mohin.jpg'
import TraveCart from './TraveCart';

const Travel = () => {
    return (
        <div>
             <p className="text-[32px] font-semibold">Travel Blog</p>

             <div className='2xl:w-[1240px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
                 <TraveCart 
                 image={img1} 
                 img={ mohin}
                 title={"Embracing the Digital Nomad Lifestyle the Digital Nomad thr..."}
                 category={"Work and Travel"}
                 date={"16 septembar 23"}
                 name={"Mohin"}
                 />
                 <TraveCart 
                 image={img2} 
                 img={ mohin}
                 title={"Historical Journeys: Stepping Back in Time Through Travel"}
                 category={"Historical"}
                 date={"16 septembar 23"}
                 name={"Mohin"}
                 />
                 <TraveCart 
                 image={img3} 
                 img={ mohin}
                 title={"Sustainable Tourism: Preserving the Planet While Seeing It All"}
                 category={"Sustainable Tourism"}
                 date={"16 septembar 23"}
                 name={"Mohin"}
                 />
             </div>
        </div>
    );
};

export default Travel;