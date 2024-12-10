import Link from "next/link";

export default function Home() {
  return (
    // <div className="grid grid-cols-[100px,1fr,100px]">
    //   <div className="bg-blue-400 text-white">logo</div>
    //   <div className="bg-blue-500">Nave Item</div>
    //   <div className="bg-blue-700">Search Bar</div>

    // </div>
    // <div className="grid grid-rows-[auto,1fr,auto] grid-cols-[100px,1fr] h-screen">
    //   <div className="bg-blue-400 text-white col-span-2 text-center text-2xl">Logo</div>
    //   <div className="bg-red-500 text-white text-center text-2xl">Side Bar</div>
    //   <div className="bg-yellow-700 text-white text-center text-2xl">Search Bar</div>
    //   <div className="bg-gray-600 col-span-2 text-white text-center text-2xl">Footer</div>
    // </div>

    // <div className="bg-blue-600 h-screen flex justify-evenly flex-wrap gap-3">
    //        <div className="bg-red-400 h-[50px] w-[50px]"> Home</div>
    //        <div className="bg-red-500 h-[50px] w-[50px]"> About</div>
    //        <div className="bg-red-600 h-[50px] w-[50px]"> contact</div>
          
    // </div>
// responseive nav bar
 <div className="flex justify-around items-center bg-green-400 h-12">
  <h1>logo</h1>
  <ul className="gap-3  hidden sm:flex items-center">
    <Link className="hover:bg-green-200 hover:rounded-e-full w-auto p-3 " href="/Grid_Prectic">Mile Stone-1</Link>
    <Link className="hover:bg-green-200 hover:rounded-e-full w-auto p-3" href="/InputR">Dynamic Resume M2</Link>
    <Link className="hover:bg-green-200 hover:rounded-e-full w-auto p-3 " href="/AutoGrid">Auto Grids</Link>
    <Link className="hover:bg-green-200 hover:rounded-e-full w-auto p-3 " href="/Flex">Flex</Link>
    </ul>
  <button className="bg-yellow-100 p-3 rounded">Join</button>
</div> 

  );
}
