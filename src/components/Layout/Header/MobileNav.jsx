import {RiLogoutBoxLine} from "react-icons/ri"
import {  BsHandbag } from "react-icons/bs";
import {  AiOutlineUser,AiOutlineHome } from "react-icons/ai";

import {IoStorefrontOutline} from "react-icons/io5"

import {LuContact} from "react-icons/lu"
import { Link } from "react-router-dom";

const MobileNav = ({isAuthenticated , logout, activeNav,user, loginWithRedirect}) => {
  
  //mobilenav links
  const mobilenavLinks = [
    {
      path: "/",
      text: "Inicio",
      icon: AiOutlineHome,
    },
    {
      path: "/carrito",
      text: "Carrito",
      icon: BsHandbag,
    },
    {
      path: "/productos",
      text: "Productos",
      icon: IoStorefrontOutline,
    },
    {
      path: "/contacto",
      text: "Contacto",
      icon: LuContact,
    },
  ];


  return (
    <div
      className={`${
        !activeNav ? "-right-[100%] " : "right-[0%]"
      } linear-bg h-screen md:hidden w-[70%] md:w-[45%] fixed  bottom-0 z-50  flex duration-300`}
    >
      {/*NAV LINKS DATA */}
      <ul className="flex flex-col  gap-y-8 items-end mx-auto absolute top-28 right-5 text-[15px] text-white uppercase font-bold ">
        <div className="cursor-pointer block md:hidden  ">
          {/* LOGOUT & LOGIN */}
          {isAuthenticated ? (
            <div
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
              className="flex-rows"
            >
              <p className="px-2 text-md ">
                Bienvenido,{" "}
                <span className="font-bold capitalize">
                  {/* user name */}
                  {user.name}
                </span>{" "}
              </p>
              {/* LOGOUT */}
              <RiLogoutBoxLine size={25} />
            </div>
          ) : (
            <div onClick={() => loginWithRedirect()} className="flex-rows">
              <p className="px-2 text-md hover:text-black transitions">
                {" "}
                Inciar Sesión
              </p>
              <AiOutlineUser size={25} /> {/* LOGIN */}
            </div>
          )}
        </div>
        {mobilenavLinks.map((link, i) => (
          <li key={i} className="hover:text-black transitions ">
            <Link to={link.path} className="flex items-center gap-x-3 ">
              {link.text} <link.icon color="white" size={25} />{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
