import { RiTruckLine } from "react-icons/ri";
import { BsSearch, BsHandbag } from "react-icons/bs";
import {RiLogoutBoxLine} from "react-icons/ri"
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import {HiOutlineBars3BottomRight} from "react-icons/hi2"

import { Link, useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useAppContext } from "../../../context/AppProvider";
import MobileNav from "./MobileNav";


import {  toast } from 'react-toastify';

const Header = () => {
  //Auth0 (login, logout)
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  {/* search input state */}
  const [search, setSearch ] = useState()

  //react context hook
  const {searchBtn, cart} = useAppContext();

  const navigate = useNavigate();

  //nav links
  const navLinks = [
    {
      path: "/",
      text: "Inicio",
    },
    {
      path: "/productos",
      text: "Productos",
    },
    {
      path: "/contacto",
      text: "Contacto",
    },
  ];


    //mobile nav
    const [activeNav, setActive] = useState(false);
    //mobilenav links
   
    const handleActive = () => {
      setActive(!activeNav);
    };



  return (
    <div className="fixed right-0 top-0 left-0 md:static  z-40">
      {/*sub header (blue header)*/}
      <div className="w-full hidden md:block bg-subMain p-3  ">
        <div className=" flex items-center gap-x-5 container mx-auto ">
          <RiTruckLine className="text-star " size={35} />{" "}
          <p className="text-white font-bold md:text-[17px]">
            Envios GRATIS en compras mayores a $1000{" "}
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="w-full border-b border-subMain bg-white ">
        <div className="md:container mx-auto  flex items-center justify-between py-4">
          {/* logo */}
          <div className="hidden md:block">
         <Link to ="/">
         <h1 className="text-2xl font-bold linear-bg px-3 py-1 text-white rounded-sm ">ELECTRONICS</h1>
         </Link>
          </div>
          {/* saerch container */}
          <div className="flex-rows w-[400px] mx-5   ">
            {/* search icon */}
            <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
              type="text"
              placeholder="Buscar Producto..."
              className="py-3 px-2 border border-main  w-full outline-none text-border"
            />
            {/* saerch icon */}
            <button
            onClick={() =>{
              !search ? toast.info("Buscar Producto!") :
               searchBtn(search)
               navigate("/productos")
              }}
             className="bg-main  border-2 border-main  px-4 py-3 text-white flex-btn">
              <BsSearch size={22} />{" "}
            </button>
          </div>

          {/* heart icon, cart icon  & user icon*/}
          <div className=" flex-rows gap-x-5 cursor-pointer ">
            {/* user icon ( ACCOUNT ) */}
            <div className=" hidden md:flex  ">
              {/* LOGOUT & LOGIN */}
              {isAuthenticated ? (
                  <div 
                  onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                   className="flex-rows">
                        {/* LOGOUT */}
                        <RiLogoutBoxLine size={25} />   
                         <p className="px-2 text-sm ">Bienvenido,{" "}
                          <span className="font-bold capitalize">
                            {/* user name */}
                            {user.name}!
                          </span> </p>
                    </div>

              ) : (
                <div onClick={() => loginWithRedirect()} className="flex-rows">
                  {/* LOGIN */}
                  <AiOutlineUser size={25} />
                  <p className="px-2 text-sm"> Inciar Sesión</p>
                </div>
              )}
            </div>

         

            <div className="hidden md:flex  gap-x-2 text-main  ">
              {/* heart icon & cart icon */}
              <Link to="/">
                {" "}
                <AiOutlineHeart size={25} />{" "}
              </Link>

              <Link to="/">
                {" "}
                <Link to="/carrito">
                    <BsHandbag size={25} />{" "}
                </Link>             
              </Link>
            </div>
          </div>

                  {/* BURGER ICON & MOBILE MENU */}
          <div onClick={handleActive } className={`${activeNav ? "text-white" : "text-main"} md:hidden cursor-pointer  mr-5  md:ml-0 z2` } >
          <HiOutlineBars3BottomRight size={42} />
          </div>
        </div>
        
      </div>

      {/* NAV LINKS HEADER */}
      <div className="hidden md:block w-full shadow-xl bg-white">
        <div className="container mx-auto py-4 ">
          {/*NAV LINKS DATA */}
          <ul className="flex gap-x-3 items-center  text-[18px] ">
            {navLinks.map((link, i) => (
              <li key={i} className="hover:text-main transitions">
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

     <MobileNav isAuthenticated={isAuthenticated}  logout={logout}  activeNav={activeNav} user={user} loginWithRedirect={loginWithRedirect} />
    
    </div>
  );
};

export default Header;
