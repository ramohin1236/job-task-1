
import FeaturedCart from "./FeaturedCart";
import img1 from '/public/Rectangle 18-2.png'
import img2 from '/public/Rectangle 18-11.png'
import img3 from '/public/Rectangle 18-22.png'

const Featured = () => {
    return (
        <div>
            <p className="text-[32px] font-semibold  md:mt-[300px] ">Featured Destinations</p>

            <div className="grid sm:grid-cols-1 
            md:grid-cols-2
            max-sm:ml-0
            md:gap-14
            
            lg:ml-0
            lg:grid-cols-3
           lg:w-[1220px] ">
                <FeaturedCart image={img1} title={"Stopover opportunity in İstanbul with Turkish Airlines"}/>

                <FeaturedCart image={img2} title={"Discover the timeless city with Touristanbul of Turkish Airlines"}/>

                <FeaturedCart image={img3} title={"the best of Abu Dhabi with exclusive Etihad Airways!"}/>
            </div>
        </div>
    );
};

export default Featured;