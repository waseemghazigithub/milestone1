
"use client"
import Cv_hero from "../component/cv_hero";
import { useState } from "react";


const Gp=()=>{
   const [isHidden, setIsHidden] = useState(false);
    let ed="Bachelor of commerce (1992) , Diploma of Computer science(1998) , M.C.P. (2001)"  
    let sk="Software Devlopment Desktop (C#, Vb.Not) Frontend (UI NextJs Tailwaind) "
    let sk1="Data base Mangment FoxPro, MsAccess, SQL-Server/Oracal/PostgreSQL (DDL/DML written views, store procedure, functions, trigers)" 
    let sk2="Reports (Crystal report, Microsoft report Builder, Vb report writer, Ms-Access, Excel)"
    let sk3="Network Managment (Cabling, switichs, routers, Windows/ Exi / Linux Server installation VM-ware )"
    let sk4="Project Mangment (Lead as a project manager on diffrent projects.)"
    
    let skh1="Data Base:"
    let skh2="Report Writer:"
    let skh3="Neworking:"
    let skh4="Project Managment:"
    let pbedu: number =70;
    let psk: number =90;
    let psk_1: number =80;
    let psk_2: number =90;
    let psk_3: number =80;
    let psk_4: number =65;
    let Eyear1="1998-1999"
    let Eyear2="1999-2005"
    let Eyear3="2005-2010"
    let Eyear4="2011-2024"
    let exp4="Maxim Group of companies ( as a I.T Manager develop and manage diffrent 1. project fazaia housing scheme recovery managment system 2. Attendance / payroll system / Garden city real estate project"
    let exp="My experience in diffrent environment as are under"
    let exp3="Merryland Bulder and Developer as a software developers build real estat projects and account system."
    let exp2="Mailir Development Authority as a software developers build a challan base recovery project."
    let exp1="Pak college as a computer instructor."
   
    return(
       <div> 
        <Cv_hero/>
        <div className="grid grid-rows-3 grid-cols-[200px,1fr,100px] gap-1 px-10 mt-2 ">
        {/* <div className="grid grid-rows-[100px,1fr,1fr] grid-cols-3 gap-[100px,1fr,1fr]">     */}
                                  
   <div className="bg-yellow-400 rounded-lg text-xl font-bold p-2 col-span-3 transition-all duration-300 hover:scale-90 sm:col-span-2 md:col-span-1">
    Education: </div>
   <div className="bg-yellow-500  p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {ed}
   </div>
   <div className="bg-yellow-600 p-2 col-span-3 sm:col-span-2 md:col-span-1">
   <progress className="progress progress-success w-full " value={pbedu} max="100"></progress>
    </div> 

    {/* <section id="skhidden" className={isHidden ? "hidden" : ""}> */}
        <div className= {isHidden ? "hidden" : "bg-yellow-400 rounded-lg text-xl font-bold p-2 transition-all duration-300 hover:scale-90 sm:col-span-2 md:col-span-1"}>
          Skills:
        </div>
      {/* </section> */}
 <div className={isHidden ? "hidden" :"bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 "}>
    {sk}
 </div>

  <div className={isHidden ? "hidden" :"bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1"}>
 <progress className="progress progress-success w-full " value={psk} max="100"></progress>
 </div>

  {/* skill 1 */}
 <div className="bg-yellow-400 rounded-lg  font-bold p-2 col-span-3 text-center sm:col-span-2 md:col-span-1">
    {skh1} </div>
 <div className="bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {sk1}
 </div>
 
 <div className="bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1">
 <progress className="progress progress-success w-full " value={psk_1} max="100"></progress>
 </div>

  {/* skill 2 */}
 <div className="bg-yellow-400 rounded-lg  font-bold p-2 text-center  col-span-3 sm:col-span-2 md:col-span-1">
    {skh2} </div>
 <div className="bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {sk2}
 </div>
 
 <div className="bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1">
 <progress className="progress progress-success w-full " value={psk_2} max="100"></progress>
 </div>
  {/* skill 3 */}
<div className="bg-yellow-400 rounded-lg  font-bold p-2 text-center  col-span-3 sm:col-span-2 md:col-span-1">
    {skh3} </div>
 <div className="bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {sk3}
 </div>
 <div className="bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1">
 <progress className="progress progress-success w-full " value={psk_3} max="100"></progress>
 
  {/* skill 4 */}
 </div>
 <div className="bg-yellow-400 rounded-lg  font-bold p-2 text-center  col-span-3 sm:col-span-2 md:col-span-1">
    {skh4} </div>
 <div className="bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {sk4}
 </div>
 
 <div className="bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1">
 <progress className="progress progress-success w-full " value={psk_4} max="100"></progress>
 </div>
 
{/* experience */}
 <div className="bg-yellow-400 rounded-lg text-xl font-bold p-2 transition-all duration-300 hover:scale-90  sm:col-span-2 md:col-span-1">
 Experience </div>

 <div className="bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {exp}
 </div>
   <div className="bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1">
 <progress className="progress progress-success w-full " value={psk} max="100"></progress>
 </div>
{/* experience-4 */}
<div className="bg-yellow-400 rounded-lg  font-bold p-2 text-center  col-span-3 sm:col-span-2 md:col-span-1">
    {Eyear4} </div>
 <div className="bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {exp4}
 </div>
 
 <div className="bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1">
 <progress className="progress progress-success w-full " value={psk_4} max="100"></progress>
 </div>

{/* experience-3 */}
<div className="bg-yellow-400 rounded-lg  font-bold p-2 text-center  col-span-3 sm:col-span-2 md:col-span-1">
    {Eyear3} </div>
 <div className="bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {exp3}
 </div>
 
 <div className="bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1">
 <progress className="progress progress-success w-full " value={psk_3} max="100"></progress>
 </div>

 {/* experience-2 */}
<div className="bg-yellow-400 rounded-lg  font-bold p-2 text-center  col-span-3 sm:col-span-2 md:col-span-1">
    {Eyear2} </div>
 <div className="bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {exp2}
 </div>
 
 <div className="bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1">
 <progress className="progress progress-success w-full " value={psk_2} max="100"></progress>
 </div>
 {/* experience-1 */}
 <div className="bg-yellow-400 rounded-lg  font-bold p-2 text-center  col-span-3 sm:col-span-2 md:col-span-1">
    {Eyear1} </div>
 <div className="bg-yellow-500 p-2 col-span-3 sm:col-span-2 md:col-span-1 ">
    {exp2}
 </div>
 
 <div className="bg-yellow-600 p-2  col-span-3 sm:col-span-2 md:col-span-1">
 <progress className="progress progress-success w-full " value={psk_1} max="100"></progress>
 </div>

</div>
<button
        onClick={() => setIsHidden(!isHidden)}
        className="bg-yellow-950 text-white px-9 py-2 rounded-lg ml-10 mt-0"
      >
        {isHidden ? "Show Skills Section" : "Hide Skills Section"}
      </button>

</div>
    )
}
export default Gp 