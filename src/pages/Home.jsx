import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'
import ProductTypes from '../components/ProductTypes'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <Layout>
        {/*Hero Component */}
                <Hero />
        {/*ProductTypes Component */} 
                <ProductTypes />
        {/*About component */}
        <About />

        <Products/>

        <Banner />
    
    </Layout>
  )
}

export default Home