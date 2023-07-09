import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'

const Hero = () => {
  return (
    <div className="bg-dryGray py-10  px-5 md:px-0 ">
    <div className="container mx-auto flex justify-between items-center">
        <div className="">
                <h2 className='font-bold text-3xl  md:text-4x lg:text-5xl my-3 '>Las Mejores Notebooks 2023</h2>
                <p className='my-3 text-border text-start text-[13px] md:text-[18px]'>Lorem ipsum dolor sit amet consec elitos harum</p>  
                <Link to="/productos" className='btn'>
                    Ver <IoMdArrowRoundForward className='ml-2 font-black' />
                </Link>
        </div>
            {/* img  */}
        <div className="">
                <img src="/public/img/slider-img.png" alt="img-banner" className='w-[500px] h-full' />
        </div>
    </div>
   </div>
  )
}

export default Hero