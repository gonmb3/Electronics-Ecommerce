import {RiTruckLine, RiMoneyDollarCircleLine} from "react-icons/ri"
import {HiOutlineReceiptPercent} from "react-icons/hi2"
import {TfiHeadphoneAlt} from "react-icons/tfi"



const About = () => {

    const aboutData = [
      {
        icon: RiTruckLine,
        textOne: "Envios ",
        textTwo: "Gratis "
      },
      {
        icon: RiMoneyDollarCircleLine,
        textOne: "Devoluciones",
        textTwo: "Garantia 100%"
      },
      {
        icon: HiOutlineReceiptPercent,
        textOne: "Descuentos",
        textTwo: "En cada Orden"
      },
      {
        icon: TfiHeadphoneAlt,
        textOne: "Atención ",
        textTwo: "Las 24hrs"
      },
    ] 

  return (
    <div>
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 my-10 px-5 md:px-0">
            {
                aboutData.map((about, i) => (
                    <div className="flex-colo bg-dryGray px-5 py-3 rounded cursor-pointer hover:scale-105 transitions shadow-xl" key={i}>
                    <div className="">
                       <about.icon size={29} className="text-main my-3"/>
                    </div>
                    <div className="text-center">
                        <h3 className="sm:text-2xl font-semibold">{about.textOne} </h3>
                        <p className="sm:text-sm text-gray-400 my-2 font-semibold ">{about.textTwo} </p>
                    </div>
            </div>
                ))
            }

        </div>
    </div>
  )
}

export default About