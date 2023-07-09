import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppProvider'

import {  AiOutlineCloseCircle } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {

    const {productDetails, setCloseDetails, closeDetails, addToCart} = useAppContext();

    // Close details modal
    const {id} = useLocation();
    useEffect(() => {
        setCloseDetails(false); 
    }, [ id ]);

  return (
    <div
    >
        <div 
        
        className="w-full   flex justify-center ">
            {
                closeDetails ? (
                    productDetails.map(product => (
                        <div 
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="10"
                        data-aos-offset="200"
                        className="fixed  flex top-[22%] justify-center md:h-[560px] w-[90%] md:w-[80%] lg:w-[75%] xl:w-[57%] z-50 rounded-lg shadow-2xl border border-gray-300 bg-white">
                            {/* close modal btn */}
                           <button className='p-5 absolute -left-3 -top-3' onClick={() => setCloseDetails(false) }> 
                           <AiOutlineCloseCircle size={25} />
                           </button>
                            {/*image */}
                           <div className="md:flex items-center ">
                           <div className="flex justify-center">
                                <img src={product.Img} alt={product.Title}  className=' md:w-[450px] object-cover'/>
                            </div>
                                   
                            <div className="flex flex-col gap-2 md:gap-5 justify-start p-5">
                                {/*category */}
                                    <h4 className='text-[15px] lg:text-xl font-bold text-text'>{product.Cat} </h4>
                                      {/*title */}
                                    <h3 className='text-[15px] font-bold md:text-xl text-main '>{product.Title}</h3>
                                    <p className='text-gray-600 text-start text-sm   md:text-[17px] pr-5'>Lorem ipsum dolor sit amet consectetur, adipisicing 
                                     doluta ipsum rerum ddoluta ipsu.</p>
                                       {/*price */}
                                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>${product.Price}.00 </h3>
                                    {/* add to cart */}
                                    <button
                                    onClick={() => addToCart(product)}
                                     className='btn mt-5'>Comprar</button>
                            </div>
                           </div>
                        </div>
                    ))
                ) : null
            }
        </div>
    </div>
  )
}

export default ProductDetails