import Logo from "./Logo"
const Navbar = () => {
  return (
    <nav className="w-[95%] h-24 border-b border-[#EEEEEE] m-auto flex items-center justify-between">
      
      <div className="flex gap-20 items-center">
        <Logo/>
        
        <ul className="flex items-center gap-8 text-xl">
            <li className="text-blue-400 hover:text-blue-600 cursor-pointer duration-200 ease-in-out">File Types</li>
            <li className="text-blue-400 hover:text-blue-600 cursor-pointer duration-200 ease-in-out">Blogs</li>
            <li className="text-blue-400 hover:text-blue-600 cursor-pointer duration-200 ease-in-out">Pricing</li>
            <li className="text-blue-400 hover:text-blue-600 cursor-pointer duration-200 ease-in-out">Use Cases</li>
        </ul>
      </div>
      <div className="flex items-center">


    <button className="relative px-4 py-2 font-medium text-white border border-gray-100 rounded-md hover:scale-105 duration-300">Download</button>
      </div>
    </nav>
  )
}

export default Navbar
