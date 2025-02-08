"use client"
import { useContext, useEffect } from "react"
import FileUpload from "./FileUpload"
import  { ClientContextProvider } from "../context/GlobalContext"
import InputBox from "./InputBox"
import Result from "./Result"

const PlayGround = () => {

const {processCount} = useContext(ClientContextProvider)

  return (
   <div className="w-full h-screen mt-20 flex-col justify-center flex items-center relative">
            
    <div className="grid-box-2 w-full h-full absolute -z-10"></div>

{ <h1 className="text-6xl text-center top-20 absolute">Lets Try it out in just <span className="text-green-500">3</span> stpes ...</h1>}

    {processCount == 1 && <FileUpload />}
    {processCount == 2 && <InputBox/>} 
  {processCount == 3 && <Result/>} 

</div>
  )
}

export default PlayGround
