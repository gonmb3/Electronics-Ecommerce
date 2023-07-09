import React from 'react'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
        <div className="container mx-auto ">
        <h2 className=' px-5 text-2xl tracking-widest md:text-4xl uppercase my-10'>Contacto</h2>
            <div className="flex justify-center">
           
                <div className="flex justify-center gap-y-5 items-center shadow-xl border border-text/50 rounded-md w-[80%] py-20 ">
                    <form className="flex flex-col w-[500px] gap-y-5 px-8">
                        <input className='  border-b-2 border-gray-600  outline-none' type="text" name='name'  placeholder='Nombre...' required />
                        <input className= ' border-b-2 border-gray-600 outline-none ' type="email" name='email'  placeholder='Email...' required />
                        <textarea className='  border-b-2 border-gray-600 outline-none ' name="message"  placeholder='Mensaje...' required ></textarea>

                     <button type='submit' className='btn'>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Contact