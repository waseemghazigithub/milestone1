"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";

const Inputr =() => {
       
  const [nameval,setname]=useState("")
  const [addressval, setaddress]=useState("")
  const [mobileval, setmobile]=useState("")
  const [emailval, setemail]=useState("")
  //console.log(nameval,addressval)
  const route = useRouter();

    return(
      <div className="bg-base-200 ml-0 mt-1 px-10">
        <div className="flex bg-yellow-100">
      <img
       src="/Waseemfacebook.jpg"
        className="w-36 h-40  drop-shadow-2xl  relative z-0 rounded-full transition-all duration-300 hover:scale-90"
      />
      <div className= "  h-[180px] w-[862px]">
      <input type="text" 
      onChange={(e) => setname(e.target.value)}
       className="p-2 ml-2 w-[60%] border-b text-lg focus:outline-none " 
        placeholder="Enter your name "
        ></input>
     
      <textarea 
        onChange={(e) => setaddress(e.target.value)}
        className="p-2 ml-2 w-[60%] border-b text-lg focus:outline-none resize-none" 
        placeholder="Enter your address">
      </textarea>
      
       <input type="text"
       onChange={(e) => setmobile(e.target.value)} 
       className="x-1 ml-2 w-[60%] border-b text-justify focus:outline-none " 
        placeholder="Enter your mobile# "
        ></input>

        <input type="text" 
        onChange={(e) => setemail(e.target.value)}
       className="x-1 ml-2 w-[60%] border-b text-justify focus:outline-none " 
        placeholder="Enter your email "
        ></input>

      </div> 
      </div>
      <button 
         onClick={()=>route.push(`/GenerateR/${nameval}`)}
         className="bg-yellow-900 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-full ml-10">
         Generate
       </button>

    </div>
    )
}
export default Inputr 