import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

//swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AppProvider } from './context/AppProvider.jsx'
//aos animation
import 'aos';
import 'aos/dist/aos.css';

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Auth0 Provider */}
    <Auth0Provider
    domain="dev-u5xo18zbe7my18lu.us.auth0.com"
    clientId="qGdkW11ZlvcJH5Hzrx8k1d9sAsp9NXA7"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>         
  {/* react context provider */}
      <AppProvider>
        {/* react router dom */}
                <BrowserRouter>
                {/*react-toastify */}
                <ToastContainer />
                      <App />
                </BrowserRouter>  
      </AppProvider>
          
    </Auth0Provider>
  </React.StrictMode>,
)
