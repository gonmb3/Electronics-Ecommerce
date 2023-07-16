import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { productDetailsData } from "../ProductsData";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { useAppContext } from "../context/AppProvider";
import ProductDetails from "./ProductDetails";

const Product = () => {
  {
    /* react- context */
  }
  const { setProduct, product, viewProduct, addToCart} = useAppContext();

  {
    /* filter by category */
  }
  const filterProduct = (product) => {
    const update = productDetailsData.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  {
    /*filter all products */
  }
  const allProducts = () => {
    setProduct(productDetailsData);
  };

  const categoryData = [
    { text: "Tablet" },
    { text: "Smart Watch" },
    { text: "Auriculares" },
    { text: "Camara" },
    { text: "Gaming" },
  ];

  return (
    <Layout>
      <h2 className="h2 my-8">Productos</h2>
      <div className="">
        {/*Productdetails component */}
      <ProductDetails/>
        <div className="container mx-auto md:flex justify-evenly gap-4 ">
          {/*filters */}
          <div className="mx-10">
            <h2 className="text-2xl md:text-3xl text-main uppercase font-bold ">
              Categorias
            </h2>
            <div className="">
              <ul className="flex md:flex-col flex-wrap  gap-5 my-5 text-sm md:text-[17px] font-bold md:font-semibold  ">
                <li
                  className="cursor-pointer hover:text-main transitions"
                  onClick={() => allProducts()}
                >
                  Todos los Productos
                </li>
                {categoryData.map((cat, i) => (
                  <li
                    onClick={() => filterProduct(cat.text)}
                    key={i}
                    className="hover:text-main transitions cursor-pointer"
                  >
                    {cat.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 mx-auto ">
             
              {product.length === 0 ? (
                <>
                  <h2 className="text-center font-bold text-[16px] md:w-[500px] mt-10 md:mt-0  md:text-[18px] text-main px-5">
                    Producto No Encontrado...{" "}
                  </h2>
                </>
              ) : (
                product.map((product) => (
                  <div className="w-[80%] md:w-[240px] h-[350px] mx-auto overflow-hidden img-product relative cursor-pointer   py-2 px-3 border border-dryGray rounded shadow-2xl transitions hover:border-border flex-colo">
                    <div className="">
                      {/* img */}
                      <img
                        src={product.Img}
                        alt={product.Title}
                        className="w-[80%] mx-auto"
                      />
                      {/* icons */}
                      <div className="box-icon shadow-x2l  bg-dryGray ">
                        <AiOutlineShoppingCart
                            onClick={() => addToCart(product)}
                          size={38}
                          className="hover:bg-main/50 transitions  text-border p-[7px] icon"
                        />
                        <BsEye
                          onClick={() => viewProduct(product)}
                          size={38}
                          className="hover:bg-main/50 transitions  text-border  p-[7px] icon"
                        />
                        <AiOutlineHeart
                          size={38}
                          className="hover:bg-main/50 transitions text-border  p-[7px] icon"
                        />
                      </div>
                    </div>
                    {/* category */}
                    <div className="text-center">
                      <p className="text-xs md:text-[15px] text-gray-400 font-bold text-start">
                        {product.Cat}{" "}
                      </p>
                      <h3 className="text-gray-600 font-semibold my-1">
                        {product.Title.slice(0, 25)}...{" "}
                      </h3>
                      <h5 className="font-bold text-2xl text-main drop-shadow-md">
                        ${product.Price}.00
                      </h5>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
