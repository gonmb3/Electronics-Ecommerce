import React from "react";
import { Link } from "react-router-dom";

const ProductTypes = () => {
  
  const productTypeData = [
    {
      img: "/img/Mobile Phone.png",
      text: "Celulares",
    },
    {
      img: "/img/headphone.png",
      text: "Auriculares",
    },
    {
      img: "/img/smart watch.png",
      text: "Relojes",
    },
    {
      img: "/img/cpu heat.jpg",
      text: "Procesadores",
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 py-10 px-10 ">
      {productTypeData.map((product, i) => (
        <div key={i} className="px-5 flex-colo gap-y-5 m-2">
         <Link to ="/productos">
         <div className=" w-[140px] h-[140px] md:w-[200px]  md:h-[200px] rounded-full bg-dryGray flex-colo shadow-lg">
            <img
              src={product.img}
              alt={product.text + "img"}
              className=" object-cover  hover:scale-110 transitions cursor-pointer"
            />
          </div>
         </Link>
          <div className=" ">
            <p className=" py-2 md:py-5 font-bold md:font-normal text-sm md:text-2xl text-main/90"> {product.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTypes;
