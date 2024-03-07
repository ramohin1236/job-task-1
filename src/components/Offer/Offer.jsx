import OfferCart from "./OfferCart";
import offer1 from '/public/sliderUp_to_14__discount_on_Domestic_flights 2.png'
import offer2 from '/public/sliderUp_to_14__discount_on_Domestic_flights 2-1.png'
import offer3 from '/public/sliderUp_to_14__discount_on_Domestic_flights 2-2.png'

const Offer = () => {
    return (
        <div>
            <p className="text-[32px] font-semibold">Deals and Offers</p>

            <div className="2xl:w-[1276px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <OfferCart img={offer1}/>
                <OfferCart img={offer2}/>
                <OfferCart img={offer3}/>
            </div>
        </div>
    );
};

export default Offer;