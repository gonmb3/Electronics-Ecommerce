
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className=" py-10 mt-10 px-5 bg-dryGray border-t border-gray-300 ">
      <div className=" container mx-auto sm:flex-colo md:flex  justify-between gap-10  ">
          <div className="">
            <div className="text-center">
              {/* logo */}
              <Link to ="/">
         <h1 className="text-2xl font-bold linear-bg px-3 py-1 w-[179px] text-white rounded-sm ">ELECTRONICS</h1>
         </Link>
            </div>

            <div className="">
              {/* social icons */}
              <p className="text-gray-400 font-semibold my-2">Lorem ipsum dolor sit amet, consectetur adipisicing eli facere est!</p>
              <div className=" flex items-center gap-3 cursor-pointer transitions">
                <RiFacebookBoxFill  size={25} className="hover:text-main w-14 h-14 shadow-xl rounded-lg p-4 bg-white"/>
                <RiTwitterFill  size={25} className="hover:text-main w-14 h-14 shadow-xl rounded-lg p-4 bg-white"/>
                <RiInstagramFill size={25} className="hover:text-main w-14 h-14 shadow-xl rounded-lg p-4 bg-white" />
              </div>
            </div>
          </div>
          {/* account */}
        <div className="flex gap-20 mt-14 lg:mt-0 mr-0 md:mr-8" >
        <div className="">
            <h3 className="text-[17px] font-bold text-black text-main">Mi Cuenta</h3>
            <ul className="flex flex-col gap-2 mt-2 text-sm">
              <li className="hover:text-main transitions cursor-pointer">Cuenta</li>
              <li className="hover:text-main transitions cursor-pointer">Ordenes</li>
              <li className="hover:text-main transitions cursor-pointer">Carrito</li>
              <li className="hover:text-main transitions cursor-pointer">Envios</li>
              <li className="hover:text-main transitions cursor-pointer">Devoluciones</li>
            </ul>
          </div>

             {/* pages */}
             <div className="">
              <h3 className="text-[17px] font-bold text-black text-main">Paginas</h3>
            <ul className="flex flex-col gap-2 mt-2 text-sm ">
              <li className="hover:text-main transitions cursor-pointer">Inicio</li>
              <li className="hover:text-main transitions cursor-pointer">Sobre</li>
              <li className="hover:text-main transitions cursor-pointer">Contacto</li>
              <li className="hover:text-main transitions cursor-pointer">Teminos & Condiciones</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer