import { useState } from 'react';
import './Navbar.css';
import { ImCross } from "react-icons/im";
const Navbar = () => {
   const [isOpen, setIsOpen]=useState(false)
     
  

    return (
       <div >
            <div className='ml-6 '>
            <ImCross onClick={()=>setIsOpen(!isOpen)} className='block lg:hidden '/>
            </div>
            {
                isOpen && isOpen? <>
                <div className='bg-white w-24 rounded-md	ml-12'>
                   <nav>
                       <ul className='font-medium text-[18px]  ml-6 '>
                        <li>Blog</li>
                        <li>Offer</li>
                        <li>Airlines</li>
                        <li>About</li>
                       </ul>
                   </nav>
              </div>
                </> : <>
               
                </>
              }
         <div className=" nav-container flex justify-around items-center  max-lg:hidden">
        
             <div>
             <img className='ml-20' src="/public/LOGO.png" alt="" />
             </div>
                 
              <div className=''>
                   <nav>
                       <ul className='flex font-medium text-[18px] gap-6'>
                        <li>Blog</li>
                        <li>Offer</li>
                        <li>Airlines</li>
                        <li>About</li>
                       </ul>
                   </nav>
              </div>
              


              <div>
                 <button className='gradient-button'>Sign in</button>
              </div>
        </div>
       </div>
    );
};

export default Navbar;