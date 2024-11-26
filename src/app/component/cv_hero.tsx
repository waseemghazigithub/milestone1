import {FaMobileAlt} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

  const Cv_hero=()=>{
  return(
  <div className="bg-base-200 ml-0 mt-1 px-10">
    <div className="flex bg-yellow-100">
      <img
       // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
         src="/Waseemfacebook.jpg"
        className="w-36 h-40  drop-shadow-2xl  relative z-0 rounded-full transition-all duration-300 hover:scale-90"
      />
      <div className= "bg-yellow-100  h-[180px] w-[862px]">
        <h1 className="text-2xl font-bold ml-6 mt-6">Muhammad Waseem</h1>
        <p className="p-1 ml-5 ">
          House # LS-06 ST-09 Sector 11-L North Karachi Pakistan.</p>
          <p className="px-1 ml-5  flex items-center">
          {<FaMobileAlt/>} : 03209220047</p>
          <p className="px-1 ml-5  flex items-center">
          {<MdOutlineMailOutline/>} : waseem_ghazi_pk@hotmail.com</p>
      </div>
      <div className="bg-yellow-500  h-[180px] w-[500px] hidden sm:grid grid-cols-1 md:grid:grid-cols-1">
      <div>
      <p className="bg-yellow-600 font-bold p-1 "> Expertise/Certification</p>
      <p className="flex items-center mt-2"> {<GoDotFill/>}Software Devlopment  Desktop / Web / UI / UX /frontend backend </p>
      <p className="flex items-center "> {<GoDotFill/>}Server Installation & Managment (Exi/windows/linx) </p>
      <p className="flex items-center "> {<GoDotFill/>}Database Mangament (SQL-Server/Oracal/PostgreSQL) </p>
      <p className="flex items-center "> {<GoDotFill/>}Network Managment & troubleshooting </p>
      <p className="flex items-center "> {<GoDotFill/>}Project Managment </p>
      </div>
      </div>
    </div>
  </div>
  )}
export default Cv_hero