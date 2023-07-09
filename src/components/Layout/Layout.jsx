import Footer from "./Footer/Footer"
import Header from "./Header/Header"



const Layout = ({children}) => {
    return (
      <>
          <div className="">
            <Header/>
               {children}
            <Footer/>
          </div>
      </>
    )
  }
  
  export default Layout