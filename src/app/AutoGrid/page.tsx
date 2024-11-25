

export default function autogrid (){
    return(
    <div className="grid grid-rows-[auto,1fr,auto] grid-cols-[100px,1fr] h-screen">
      <div className="bg-blue-400 text-white col-span-2 text-center text-2xl">Logo</div>
      <div className="bg-red-500 text-white text-center text-2xl">Side Bar</div>
      <div className="bg-yellow-700 text-white text-center text-2xl">Search Bar</div>
      <div className="bg-gray-600 col-span-2 text-white text-center text-2xl">Footer</div>
    </div>
    )
}