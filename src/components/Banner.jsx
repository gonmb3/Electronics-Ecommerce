import {IoMdArrowRoundForward} from "react-icons/io"
import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <div className='mx-2 '>
        <div className="container mx-auto p-10 sm:flex-colo md:flex  items-center   justify-evenly md:justify-between shadow-2xl rounded-lg linear-bg mt-10" >
            <div className="md:mb-52">
                <h2 className='text-xl md:text-2xl text-white font-semibold tracking-widest'>LAPTOP ULTIMA TECNOLOGIA</h2>
                <h3 className=' text-2xl md:text-4xl font-bold my-5 tracking-wider' >Alienware m15 R4 2021 de 15,6 pulgadas, Intel Core i9 - 2023 </h3>
                <span className='text-2xl md:text-4xl text-white  font-bold '>$ 1799 </span>

                <Link to="/productos"  className="btn px-1  mt-10 " >Comprar </Link>
            </div>
            <div className="">
                <img src="/img/banner-img.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner