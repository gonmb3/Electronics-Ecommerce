import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Product from '../../pages/Product'
import ScrollOnTop from '../../ScrollOnTop'
import Cart from '../../pages/Cart'
import Contact from '../../pages/Contact'


const Routing = () => {
  return (
    <>
    <ScrollOnTop>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Product />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>

    </ScrollOnTop>
           
    </>
  )
}

export default Routing