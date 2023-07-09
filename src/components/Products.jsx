import React, { useState } from "react";

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsCaretLeftFill, BsCaretRightFill, } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { homeProductsData } from "../ProductsData";
import { useAppContext } from "../context/AppProvider";
import ProductDetails from "../pages/ProductDetails";


import { useAuth0 } from '@auth0/auth0-react';


const Products = () => {

  
  const [homeProducts, setHomeProducts] = useState(homeProductsData);

  const {viewProduct, addToCart} = useAppContext();
  const {loginWithRedirect ,isAuthenticated} = useAuth0();

  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);

    // className for buttons swiper slides
    const classNames = "hover:bg-subMain transitions text-sm rounded-full w-8 h-8 flex-colo bg-main text-white"

  return (
    <>
    <ProductDetails/>
     <div className="">
     
      <div className="container mx-auto ">
        
      <h2 className="my-10 h2">Lo Más Vendido</h2>
      
                {/* swiper */}
                <Swiper
        breakpoints={{
          200:{
            slidesPerView:1,
          },
          639:{
            slidesPerView:2,
          },
          1024:{
            slidesPerView:3,
          },
          1440:{
            slidesPerView:5,
          },
        }}

        navigation={{ nextEl, prevEl }}
        slidesPerView={4}
        autoplay={false}
        loop={true}
       modules={[Navigation, Autoplay]}

        >
          
        {homeProducts.map((product) => (
          
          <SwiperSlide key={product.id} className="px-5">
            <div  key={product.id}className="w-[280px] h-[350px] mx-auto overflow-hidden img-product  cursor-pointer relative py-2 px-3 border border-dryGray rounded shadow-2xl transitions hover:border-border flex-colo" >
              <div className="">
                {/* img */}
                <img src={product.Img} alt={product.Title} className="w-[80%] mx-auto" />
                {/* icons */}
                <div className="box-icon shadow-x2l  bg-dryGray ">
                  {
                    isAuthenticated ? (
                      <AiOutlineShoppingCart
                      onClick={() => addToCart(product)}
                       size={38}  className="hover:bg-main/50 transitions  text-border p-[7px] icon" />
                    ) : (
                      <AiOutlineShoppingCart
                      onClick={() => loginWithRedirect()}
                       size={38}  className="hover:bg-main/50 transitions  text-border p-[7px] icon" />
                    )
                    
                  }
                  {/*ADD TO CART */}
               
                  {/*view details product */}
                  <BsEye 
                  onClick={() => viewProduct(product)}
                  size={38}  className="hover:bg-main/50 transitions  text-border  p-[7px] icon" />

                  <AiOutlineHeart size={38} className="hover:bg-main/50 transitions text-border  p-[7px] icon"  />
                </div>
              </div>
              {/* category */}
              <div className="text-center">
                <p className="text-xs md:text-[15px] text-gray-400 font-bold text-start">{product.Cat} </p>
                <h3 className="text-gray-600 font-semibold my-1">{product.Title.slice(0,25)}... </h3>
                <h5 className="font-bold text-2xl text-main drop-shadow-md">${product.Price}.00</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
            </Swiper>
            <div className="w-full px-1 flex-rows gap-6 pt-12">
            
          {/* buttons right & left slider */}
              <button className={classNames} ref={(node) => setPrevEl(node)}>
                <BsCaretLeftFill/>
              </button>

              <button className={classNames} ref={(node) => setNextEl(node)}>
                <BsCaretRightFill />
              </button>
        </div>
       
        
      </div>
      
    </div>
    </>
   
    
  );
};

export default Products;
