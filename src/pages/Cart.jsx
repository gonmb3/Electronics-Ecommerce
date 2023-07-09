import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAppContext } from '../context/AppProvider'
import {  AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {    

    const {loginWithRedirect ,isAuthenticated} = useAuth0();

    const {cart, setCart} = useAppContext();

    //increase qty
    const incQty = (product) => {
        const exist = cart.find(x => x.id === product.id)

       setCart(cart.map(item => {
        return item.id === product.id ? {...exist, qty: exist.qty+1} : item
       }))
    }

     //decrease qty
     const decQty = (product) => {
        const exist = cart.find(x => x.id === product.id)

       setCart(cart.map(item => {
        return item.id === product.id ? {...exist, qty: exist.qty-1} : item
       }))
       if(product.qty < 1){
        removeProduct(product)
      }
    }

    //remove from cart
    const removeProduct = (product) => {
        const exist = cart.find(x => x.id === product.id)
        if(exist.qty  <= 1){
            setCart(cart.filter(x => x.id !== product.id))
        }
    }


    //total price
    const totalPrice = cart.reduce((price, item) => price + item.qty * item.Price,0)


  return (
    <Layout>
        <div className="container mx-auto">
            {
                cart.length === 0 && (
                    <div className="w-full h-[600px] flex-colo justify-center items-center">
                        <h2 className='text-xl md:text-2xl uppercase text-center'> Hay Productos En Tu Carrito</h2>
                        <Link to ="/productos" className='mt-5 bg-main text-white py-3 px-5 rounded-md shadow-lg transitions border hover:text-main border-main hover:bg-transparent'>
                            Seguir Comprando
                        </Link>
                    </div>
                )
            }
            <div className="p-5 flex flex-col justify-center items-center">
                {cart.map(product => (
                    <div className="w-[90%] md:w-[750px] lg:w-[1000px] xl:[1200px] cursor-pointer flex gap-x-12 items-center py-5 shadow-xl border border-text/40 rounded-md  my-5  relative " key={product.id}>
                        <div className="">
                             {/*image */}
                            <img src={product.Img} alt={product.Title} className='w-[200px]' />
                        </div>
                            <div className="flex flex-col gap-y-2 ">
                                {/*category */}
                                <h4 className='text-text text-sm md:text-2xl'>{product.Cat} </h4>
                                 {/*title */}
                                <h3 className='text-[16px] md:text-2xl'>{product.Title}</h3>
                                 {/*price */}
                                <p className='text-xl0  md:text-2xl font-bold tracking-wider'>${product.Price}.00</p>
                                 {/*quantity */}
                                <div className="flex gap-5 ">
                                    {/* INCREASE QTY */}
                                        <button className='text-2xl md:text-4xl font-black text-main ' onClick={() => incQty(product)}>+</button>
                                        <input type="text" value={product.qty} className='px-2 font-semibold w-12 bg-text/30 text-center' />
                                        {/** DECREASE QTY */}
                                        <button className='text-2xl md:text-4xl font-black text-main ' onClick={() => decQty(product)}>-</button>
                                </div>
                                <p className='text-sm font-semibold'>Subtotal: <span className='font-bold'>${product.Price * product.qty} </span> </p>
                                {/* remove from cart */}
                                <button
                                className='absolute top-5 right-5 text-subMain'
                                onClick={() => removeProduct(product)}
                                ><AiOutlineCloseCircle size={25} /> </button>
                            </div>
                        
                    </div>
                ))}
                
            </div>
        </div>
        {/*SUBTOTAL */}
        {
            cart.length > 0 &&  (
                <div className='w-full flex justify-center flex-colo gap-y-5'>
                    <h2 className='text-3xl uppercase tracking-widest font-bold'>Total: ${totalPrice} </h2>
                    <button className='btn'>Checkout</button>
                </div>
            )
        }
       
    </Layout>
  )
}

export default Cart