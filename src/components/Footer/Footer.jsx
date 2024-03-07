import { CiLocationOn } from "react-icons/ci";
import logo from '/public/LOGO.png';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-[100%] 2xl:w-[1440px] mx-auto h-[446px] bg-gradient-to-r from-blue-700 via-blue-700 to-blue-700 ">
             <div className="mb-8 ml-10 text-white grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 justify-evenly items-center ">
                  <div>
                    <p className="text-[18px] font-medium ">Address</p>
                    <p className="text-[16px]">House- 75 Ka, Main Rd,<br /> Dhaka 1216</p>
                    <p className="text-16px flex items-center gap-1"> 
                    <CiLocationOn />
                    View on Maps</p>
                  </div>


                  <div className="mt-10">
                    <p className="text-18px font-medium  leading-10">About us</p>
                    <p className="text-18px font-medium  leading-10">Stories</p>
                    <p className="text-18px font-medium  leading-10">Blog</p>
                    <p className="text-18px font-medium  leading-10">Airlines</p>
                    <p className="text-18px font-medium  leading-10">Testimonials</p>
                  </div>


                  <div>
                  <p className="text-18px font-medium  leading-10">Join us</p>
                  <p className="text-18px font-medium  leading-10">Terms of Service</p>
                  <p className="text-18px font-medium  leading-10">Privacy Policy</p>
                  <p className="text-18px font-medium  leading-10">Support</p>
                  </div>


                  <div>
                  <p className="text-18px font-medium  leading-10">Contact</p>
                  <p className="text-18px  ">+45545454654</p>
                  <p className="text-18px  ">+56465454564</p>
                  <p className="text-18px  ">+56456454564</p>
                  <p className="text-18px  ">awalmohin0@gmail.com</p>
                  </div>
             </div>
             <hr />

             <div className="flex max-sm:flex-col items-center justify-around">
                  <div className="ml-10 mt-6">
                      <img  src={logo} alt="" />
                  </div>
                  <div className="text-[12px] font-bold text-white mt-8">© Copyright  AIRBOOK</div>

                  <div className="flex gap-6 text-3xl text-white">
                  <FaYoutube />
                  <FaFacebookSquare />
                  <FaLinkedin />

                  </div>
             </div>
        </div>
    );
};

export default Footer;