"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useContext, useEffect, useRef, useState } from "react"
import { ClientContextProvider } from "../context/GlobalContext"

const FileUpload = () => {

    gsap.registerPlugin(useGSAP)

    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const uploadRef = useRef(null)
    const {fileName, setFileName,setProcessCount,processCount} = useContext(ClientContextProvider)
    
    useEffect(()=>{
   if (file) {
            setFileName(file.name);

            let uploaded = 0
            const interval = setInterval(() => {
                uploaded += 10
                setProgress((prev)=> prev + uploaded)
            }, 700)

            return () => {
                clearInterval(interval)
            }
        }
    },[file])

    useEffect(()=>{

      if(progress == 100){
        setProcessCount(2)
      }
    },[progress])

    useGSAP(()=>{

       if(file){
         gsap.to(uploadRef.current,{
            duration: 1,
            y: 200,
            opacity: 0,
           display: "none",
            delay: 1
        })
       }
    },[file])


  return (
  <div className="mx-auto w-1/2 bg-white rounded-md" ref={uploadRef}>
<h1 className="text-2xl my-5 px-10 mt-5 text-black">{processCount} of 3</h1>

    <form
      className="py-6 px-9"
    >
      <div className="mb-6 pt-4">
        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
          Upload File
        </label>

        <div className="mb-8">
          <input type="file" name="file" id="file" className="sr-only" onChange={(e)=> setFile(e.target.files[0])}/>
          <label
            htmlFor="file"
            className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed cursor-pointer border-neutral-400 p-12 text-center"
          >
            <div>
              <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span className="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
              >
                Browse
              </span>
            </div>
          </label>
        </div>

        {file && <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
          <div className="flex items-center justify-between">
            <span className="truncate pr-3 text-base font-medium text-[#07074D]">
              {fileName}
            </span>
            <button className="text-[#07074D]" onClick={()=> setFile(null)}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
            <div
              className={`absolute left-0 right-0 h-full w-[${progress}%] rounded-lg bg-[#6A64F1] duration-300`}
            ></div>
          </div>
        </div>}
      </div>

      <div>

      </div>
    </form>
</div>
  )
}

export default FileUpload
