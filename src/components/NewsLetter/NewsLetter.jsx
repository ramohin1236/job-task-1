import img from '/public/Isolation_Mode.png';

const NewsLetter = () => {
    return (
        <div className=" 2xl:w-[1203px] max-md:w-[300px]  2xl:h-[394px] ">
            <div className='flex max-sm:flex-col max-md:flex-col gap-32 items-center'>
                <div>
                    <img src={img} alt="" />
                </div>

                <div>
                    <p className='text-[40px] font-bold leading-10'>Subscribe to our <br />Newsletter!</p>
                    <p className='font-medium mt-6 leading-5'>Subscribe to our newsletter and stay <br />updated.</p>

                    <input style={{"border": "1px solid #006CE4"}} type="text" className='2xl:w-[550px]  2xl:h-[60px]  text-blue-500 rounded-2xl h-12 w-full mt-5 px-4 placeholder-[#006CE4]' placeholder='Your Email'/>
<br />
<br />
                    <button className='text-20px 2xl:w-[550px] h-12 w-full 2xl:h-[60px] bg-[#FFB700] rounded-2xl'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;