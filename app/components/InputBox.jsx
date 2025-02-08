"use client"

import { useContext, useRef } from "react"
import { ClientContextProvider } from "../context/GlobalContext"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
const InputBox = () => {
gsap.registerPlugin(useGSAP)
const {fileName,processCount,setProcessCount} = useContext(ClientContextProvider)
    

const inputRef = useRef(null)
useGSAP(()=>{

    gsap.to(inputRef.current,{
        duration: 1,
        opacity: 1,
        delay: 1,
        ease: "bounce.out",
        stagger: 0.5
    })
},[])


const sendQuery = (e) => {

    if(e.key === "Enter"){
        setProcessCount(3)
    }

}
    return (
        <div className="w-full mt-20 flex-col flex justify-center items-center opacity-0" ref={inputRef}>
            <h1 className="text-2xl my-5">{processCount} of 3</h1>
            <div className="grid-box-2 w-full h-full absolute -z-10"></div>

            <div className="flex flex-col items-center">
                <svg viewBox="0 0 1024 1024" className="w-16 h-16 mb-5" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M576 102.4H268.8c-14.08 0-25.6 11.52-25.6 25.6v742.4c0 14.08 11.52 25.6 25.6 25.6h512c14.08 0 25.6-11.52 25.6-25.6V332.8L576 102.4z" fill="#00B2AE"></path><path d="M780.8 908.8H268.8c-21.76 0-38.4-16.64-38.4-38.4V128c0-21.76 16.64-38.4 38.4-38.4h312.32L819.2 327.68V870.4c0 21.76-16.64 38.4-38.4 38.4zM268.8 115.2c-7.68 0-12.8 5.12-12.8 12.8v742.4c0 7.68 5.12 12.8 12.8 12.8h512c7.68 0 12.8-5.12 12.8-12.8V337.92L570.88 115.2H268.8z" fill="#000000"></path><path d="M576 307.2c0 14.08 11.52 25.6 25.6 25.6h204.8L576 102.4v204.8z" fill="#008181"></path><path d="M806.4 345.6H601.6c-21.76 0-38.4-16.64-38.4-38.4V102.4c0-5.12 2.56-10.24 7.68-11.52 5.12-2.56 10.24-1.28 14.08 2.56l230.4 230.4c3.84 3.84 5.12 8.96 2.56 14.08-1.28 5.12-6.4 7.68-11.52 7.68zM588.8 133.12V307.2c0 7.68 5.12 12.8 12.8 12.8h174.08L588.8 133.12zM332.8 435.2h371.2v25.6H332.8zM332.8 524.8h371.2v25.6H332.8z" fill="#000000"></path><path d="M332.8 614.4h371.2v25.6H332.8z" fill="#000000"></path><path d="M332.8 716.8h371.2v25.6H332.8z" fill="#000000"></path></g></svg>

                <span className="text-xl mb-5">{fileName}</span>
            </div>

            <div className="relative rounded-lg w-[25%] overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                <input placeholder="What do you want to do..." className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-white text-lg placeholder-white rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-5 checked:bg-emerald-500" type="text" onKeyDown={sendQuery}/>
            </div>

            <div className="font-[sans-serif] mt-4 flex flex-col gap-4 items-center mx-auto">

                <div className="flex flex-wrap gap-4  mt-4">

                    <button type="button" className="flex items-center text-red-600 text-sm bg-red-50 px-3 py-1.5 tracking-wide rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-2 fill-current" viewBox="0 0 24 24">
                            <g fillRule="evenodd" clipRule="evenodd">
                                <path d="M8.651 2.5c-2.52 0-4.15 1.729-4.15 4.404v8.146c0 2.676 1.63 4.404 4.15 4.404h8.647c2.525 0 4.156-1.728 4.156-4.404V6.904c.001-1.363-.415-2.501-1.203-3.29-.728-.729-1.747-1.114-2.949-1.114zm8.647 18.454H8.65C5.27 20.954 3 18.581 3 15.05V6.904C3 3.373 5.27 1 8.65 1h8.651c1.608 0 2.995.537 4.01 1.554 1.061 1.062 1.643 2.607 1.641 4.351v8.145c0 3.531-2.273 5.904-5.656 5.904z" data-original="#000000" />
                                <path d="M9.856 6.69a1.096 1.096 0 1 0 .003 2.192 1.096 1.096 0 0 0-.003-2.193zm.001 3.69a2.598 2.598 0 0 1-2.596-2.595A2.598 2.598 0 0 1 9.857 5.19a2.6 2.6 0 0 1 2.597 2.595 2.599 2.599 0 0 1-2.597 2.596zM4.75 19.111a.75.75 0 0 1-.653-1.117c.06-.108 1.494-2.645 3.073-3.945 1.252-1.03 2.6-.464 3.686-.007.64.27 1.243.523 1.823.523.532 0 1.2-.94 1.79-1.769.818-1.156 1.748-2.464 3.11-2.464 2.17 0 4.043 1.936 5.05 2.976l.116.12a.751.751 0 0 1-.016 1.061.748.748 0 0 1-1.06-.016l-.118-.122c-.852-.88-2.438-2.519-3.972-2.519-.588 0-1.278.973-1.889 1.832-.838 1.18-1.705 2.401-3.01 2.401-.884 0-1.693-.34-2.406-.64-1.134-.479-1.648-.632-2.15-.218-1.365 1.124-2.707 3.498-2.72 3.521a.749.749 0 0 1-.655.383z" data-original="#000000" />
                            </g>
                        </svg>
                        Edit Images
                    </button>

                    <button type="button" className="flex items-center text-blue-600 text-sm bg-blue-50 px-3 py-1.5 tracking-wide rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-2 fill-current" viewBox="0 0 16 16">
                            <path d="M14.665 4.052a1.404 1.404 0 0 0-1.458.076L10.5 5.944V4.5A1.502 1.502 0 0 0 9 3H2A1.502 1.502 0 0 0 .5 4.5v7A1.502 1.502 0 0 0 2 13h7a1.502 1.502 0 0 0 1.5-1.5v-1.444l2.707 1.816a1.394 1.394 0 0 0 1.458.076 1.623 1.623 0 0 0 .835-1.45V5.502a1.623 1.623 0 0 0-.835-1.45zM9.5 11.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 2 4h7a.5.5 0 0 1 .5.5zm5-1.002a.627.627 0 0 1-.306.568.398.398 0 0 1-.43-.024L10.5 8.852V7.148l3.264-2.19a.405.405 0 0 1 .43-.024.627.627 0 0 1 .306.568z" data-original="#000000" />
                        </svg>
                        Videos
                    </button>

                    <button type="button" className="flex items-center text-green-600 text-sm bg-green-50 px-3 py-1.5 tracking-wide rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-2 fill-current" viewBox="0 0 32 32">
                            <path d="M18.12 27.76H7.7a2.653 2.653 0 0 1-2.65-2.65V5.55A2.653 2.653 0 0 1 7.7 2.9h15.25a2.653 2.653 0 0 1 2.65 2.65v14.71a.9.9 0 0 0 1.8 0V5.55a4.455 4.455 0 0 0-4.45-4.45H7.7a4.455 4.455 0 0 0-4.45 4.45v19.56a4.455 4.455 0 0 0 4.45 4.45h10.42a.9.9 0 0 0 0-1.8z" data-original="#000000" />
                            <path d="M21.992 6.431H8.664a.9.9 0 0 0 0 1.8h13.328a.9.9 0 0 0 0-1.8zm.9 6.231a.9.9 0 0 0-.9-.9H8.664a.9.9 0 0 0 0 1.8h13.328a.9.9 0 0 0 .9-.9zM8.66 18.89h4.18a.9.9 0 0 0 0-1.8H8.66a.9.9 0 0 0 0 1.8zm0 5.33h4.54a.9.9 0 0 0 0-1.8H8.66a.9.9 0 0 0 0 1.8zm19.009.882-7.029-7.029a1.589 1.589 0 0 0-1.031-.463l-2.624-.153a1.593 1.593 0 0 0-1.68 1.679l.153 2.625c.022.389.187.755.463 1.031l7.029 7.029c.65.651 1.505.976 2.359.976s1.709-.325 2.359-.976a3.338 3.338 0 0 0 .001-4.719zm-10.553-5.834 2.309.135 5.316 5.315-2.174 2.174-5.316-5.316zm9.281 9.28a1.54 1.54 0 0 1-2.174 0l-.384-.384 2.174-2.174.384.384a1.54 1.54 0 0 1 0 2.174z" data-original="#000000" />
                        </svg>
                        Merge files
                    </button>

                </div>

                <div className="flex flex-wrap gap-4">

                    <button type="button" className="flex items-center text-pink-600 text-sm bg-pink-50 px-3 py-1.5 tracking-wide rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-2 fill-current" viewBox="0 0 512 512">
                            <path d="M469.585 80.732c-55.679-52.984-146.306-52.984-202.003-.012l-11.581 11-11.569-10.995c-55.703-52.979-146.318-52.973-202.021 0C15.061 106.739 0 141.244 0 177.874c0 36.642 15.061 71.141 42.415 97.166l201.219 191.033A17.886 17.886 0 0 0 256 471.007c4.449 0 8.899-1.647 12.366-4.94L469.585 275.04C496.933 249.021 512 214.517 512 177.88c0-36.636-15.067-71.135-42.415-97.148zm-24.756 168.259L256 428.269 67.177 248.997C47.026 229.835 35.93 204.576 35.93 177.88s11.096-51.955 31.247-71.117c21.019-20.001 48.625-29.995 76.237-29.995 27.618 0 55.236 10.006 76.255 30.007l23.953 22.75c6.934 6.593 17.815 6.593 24.75 0l23.959-22.762c42.044-39.996 110.448-39.996 152.492 0 20.145 19.163 31.247 44.421 31.247 71.117s-11.102 51.949-31.241 71.111z" data-original="#000000" />
                        </svg>
                        Favourites
                    </button>

                    <button type="button" className="flex items-center text-cyan-600 text-sm bg-cyan-50 px-3 py-1.5 tracking-wide rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-2 fill-current" viewBox="0 0 512.001 512.001">
                            <path d="M167.228 82.855v272.542c-15.859-14.147-36.757-22.76-59.632-22.76-49.45 0-89.681 40.231-89.681 89.682s40.231 89.682 89.681 89.682c49.389 0 89.578-40.13 89.68-89.495h.002V203.475l266.757-67.621v147.195c-15.859-14.147-36.757-22.76-59.631-22.76-49.451 0-89.682 40.231-89.682 89.681 0 49.451 40.231 89.682 89.682 89.682 49.45 0 89.681-40.232 89.681-89.682V0L167.228 82.855zM107.597 481.95c-32.88 0-59.631-26.75-59.631-59.632 0-32.881 26.75-59.632 59.631-59.632s59.632 26.75 59.632 59.632c-.001 32.882-26.751 59.632-59.632 59.632zm89.681-309.474v-66.238l266.757-67.62v66.237l-266.757 67.621zm207.126 237.126c-32.881 0-59.632-26.751-59.632-59.632 0-32.88 26.75-59.631 59.632-59.631 32.88 0 59.631 26.75 59.631 59.631 0 32.882-26.75 59.632-59.631 59.632z" data-original="#000000" />
                        </svg>
                        Convert To mp4
                    </button>

                    <button type="button" className="flex items-center text-purple-600 text-sm bg-purple-50 px-3 py-1.5 tracking-wide rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-2 fill-current" viewBox="0 0 511.201 511.201">
                            <path d="M77.925 485.586a8.533 8.533 0 0 0 6.059-2.475 96.342 96.342 0 0 1 69.035-25.6 140.448 140.448 0 0 1 29.44 3.072c10.169 8.198 24.879 7.426 34.133-1.792l12.032-12.117 276.907-320c8.198-10.169 7.426-24.879-1.792-34.133l-79.616-81.152c-9.491-9.528-24.737-10.087-34.901-1.28L72.293 289.575l-12.544 12.459a25.6 25.6 0 0 0-7.424 18.091 25.6 25.6 0 0 0 5.717 16.555c2.304 10.496 12.117 64-22.357 98.475a8.534 8.534 0 0 0-1.536 9.045L2.49 475.687a8.533 8.533 0 0 0 2.219 13.653l34.133 17.067a8.535 8.535 0 0 0 3.84.939h273.067c4.713 0 8.533-3.82 8.533-8.533s-3.82-8.533-8.533-8.533H67.002l7.083-5.717a8.564 8.564 0 0 0 3.84 1.023zM400.4 22.994a8.533 8.533 0 0 1 11.605.512l80.384 80.384a8.535 8.535 0 0 1 .683 11.435l-271.19 312.917-131.498-131.84L400.4 22.994zM41.573 488.743l-18.603-9.301 22.613-22.699L61.541 472.7l-19.968 16.043zM54.97 441.98l-1.451-1.451c37.888-44.971 21.333-107.776 20.565-110.507v.171a8.544 8.544 0 0 0-2.133-3.669 8.535 8.535 0 0 1-2.56-6.144 8.533 8.533 0 0 1 2.475-6.059l5.973-6.059 132.864 132.523-6.059 6.059a8.533 8.533 0 0 1-12.068.049l-.049-.049a8.533 8.533 0 0 0-3.84-2.219 149.527 149.527 0 0 0-35.755-4.096 114.257 114.257 0 0 0-74.837 24.747L54.97 441.98z" data-original="#000000" />
                        </svg>
                        Chnage content
                    </button>

                </div>
                </div>

        </div>
    )
}

export default InputBox
