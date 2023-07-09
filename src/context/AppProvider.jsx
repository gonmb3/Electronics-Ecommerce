import { createContext, useEffect, useState, useContext } from "react"
import { productDetailsData } from '../ProductsData'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AppContext = createContext();

const AppProvider = ({children}) => {

    const [product, setProduct] = useState(productDetailsData);
    const [productDetails, setProductDetails] = useState([]);
    const [closeDetails, setCloseDetails] = useState(false);

    const [cart, setCart] = useState([])
    
    {/*search btn header component */}
   const searchBtn = (product) => {  
            const change = productDetailsData.filter((x) => {
                return x.Cat  === product
            })
            setProduct(change)
    }

    {/* view product details  */}
    const viewProduct = (product) => {
        setProductDetails([{...product}])
        setCloseDetails(true)
    
    }

    //add to cart
    const addToCart = (product) => {
        const exist = cart.find(x => {
            return x.id === product.id
        })
        if(exist){
          toast.success("Este Producto Está En El Carrito")
        }else{
            setCart([...cart, {...product, qty: 1}])
            toast.success("Producto Agregado Correctamente")
            
        }
    }
    return(
        <AppContext.Provider
        value={{
              searchBtn,
              product,
              setProduct,
              productDetails,
              viewProduct,
              setCloseDetails,
              closeDetails,
              cart,
              setCart,
              addToCart
              
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}

export default AppContext


export const useAppContext = () => {
    return useContext(AppContext)
}

