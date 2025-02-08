"use client"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from "react";
import Lenis from "lenis";
const Hero = () => {

gsap.registerPlugin(useGSAP)

const tl = gsap.timeline({ repeat: -1, yoyo: true })
const starSvg = useRef(null)
const arrowBox = useRef(null)
const upArrow = useRef(null)
const downArrow = useRef(null)
const doText = useRef(null)
const charD = useRef(null)
const anithingText = useRef(null)
const toText = useRef(null)
const fileText = useRef(null)
useGSAP(()=>{
// star animation -> 
  gsap.to(starSvg.current,{
    duration: 4.2,
    rotate: 360,
    ease: "elastic.out(1.2,1)",
    x: 400,
    y: 40,
  },[])

  gsap.to(starSvg.current,{
  scale: 1.3,
  delay: 5,
  ease: "elastic.out(1,0.3)",
  },[])

  // arrow animation ->

gsap.to(arrowBox.current, {
  opacity: 1,
  delay: 2.6,
  duration: 2.8,
  ease: "circ.inOut",
});


tl.to(upArrow.current, {
  y: 30,
  opacity: 1,
  ease: "circ.out",
  duration: 1,
})
.to(downArrow.current, {
  y: 30,
  opacity: 1,
  ease: "circ.out",
  duration: 0.6,
}, "-=0.5");

// text animation ->

gsap.to(doText.current, {
  duration: 1,
  opacity: 1,
  x: 0,
  ease: "back.out",
})

 gsap.to(charD.current,{
   delay: 1,
   ease: "circ.out",
   scaleX:-1,
 })


gsap.to(anithingText.current, {
  opacity: 1,
delay: 1.5,
  y: 0,
  ease: "power2.out",
  duration: 1.2,
  stagger: 0.1,
})

gsap.to(toText.current, {
  opacity: 1,
  delay: 2.1,
  ease: "powerq.out",
  duration:1.5
})

gsap.to(fileText.current, {
  opacity: 1,
  y: 0,
  delay: 2.5,
  ease: "power1.out",
  duration: 1.5,
  stagger: 0.3,

})

},[])


useEffect(()=>{

  const lenis = new Lenis()

  function raf(time) {

    lenis.raf(time)
    requestAnimationFrame(raf)
    };
},[])
  return (
    <div className="w-full h-screen relative mb-20">
{/* grid background */}
      <div className="grid-box w-full h-full absolute -z-10"></div>

        <h1 className="font-bold text-white mx-20 z-20 text-[12rem] relative overflow-hidden">

  <span ref={doText} className="-translate-x-full inline-block opacity-0"><span ref={charD} className="-scale-x-100 inline-block">D</span>o</span> <span  ref={anithingText} className="inline-block translate-y-32 opacity-0">anything</span>
<br /> 
<span className="text-[12rem] float-right"><span ref={toText} className="inline-block opacity-0 hollow-text-2">to</span> <span ref={fileText} className="inline-block  opacity-0 translate-y-10">any <span className="hollow-text-1">file</span></span></span>

</h1>
      {/* Star Svg -> */}
      <svg
      ref={starSvg}
      className="absolute top-[40%] -left-44"
       height={160} width={160} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style={{fill:"#FF6500"}} points="502.099,198.218 426.634,67.508 332.951,121.595 332.951,17.381 182.019,17.381 182.019,125.025 85.368,69.223 9.901,199.933 103.584,254.02 13.332,306.128 88.797,436.838 182.019,383.016 182.019,494.62 332.951,494.62 332.951,386.445 423.204,438.553 498.669,307.842 405.446,254.02 "></polygon> <path d="M332.951,504.522H182.019c-5.467,0-9.901-4.434-9.901-9.901v-94.455l-78.37,45.247c-4.735,2.736-10.79,1.112-13.525-3.624 L4.758,311.078c-2.735-4.736-1.112-10.79,3.624-13.525l75.4-43.533L4.951,208.507c-2.274-1.313-3.934-3.475-4.613-6.012 c-0.68-2.537-0.324-5.239,0.989-7.513l75.466-130.71c2.735-4.736,8.787-6.358,13.525-3.624l81.8,47.227V17.381 c0-5.467,4.434-9.901,9.901-9.901h150.933c5.467,0,9.901,4.434,9.901,9.901v87.066l78.83-45.513 c4.737-2.735,10.79-1.11,13.525,3.624l75.466,130.71c1.313,2.274,1.669,4.976,0.989,7.513c-0.68,2.538-2.339,4.699-4.613,6.012 l-81.801,47.228l78.37,45.248c4.736,2.735,6.359,8.789,3.624,13.525l-75.465,130.71c-1.313,2.274-3.475,3.934-6.012,4.613 c-2.538,0.681-5.24,0.324-7.513-0.989l-75.4-43.533v91.026C342.852,500.088,338.419,504.522,332.951,504.522z M191.921,484.719 h131.13v-98.274c0-3.537,1.887-6.806,4.951-8.574c3.063-1.769,6.838-1.769,9.901,0l81.677,47.157l65.564-113.56l-84.648-48.872 c-3.063-1.768-4.951-5.038-4.951-8.574s1.887-6.806,4.951-8.574l88.078-50.852L423.01,81.033l-85.107,49.137 c-3.063,1.769-6.838,1.769-9.901,0c-3.063-1.768-4.951-5.038-4.951-8.574V27.282h-131.13v97.743c0,3.537-1.887,6.806-4.951,8.574 c-3.063,1.769-6.838,1.769-9.901,0L88.991,82.748L23.426,196.309l85.108,49.137c3.063,1.768,4.951,5.038,4.951,8.574 c0,3.537-1.887,6.806-4.951,8.574l-81.677,47.157l65.564,113.56l84.648-48.871c3.063-1.769,6.838-1.769,9.901,0 c3.063,1.768,4.951,5.038,4.951,8.574V484.719z"></path> <path d="M213.92,143.126c-5.467,0-9.901-4.434-9.901-9.901V86.689c0-5.467,4.434-9.901,9.901-9.901s9.901,4.434,9.901,9.901v46.536 C223.821,138.693,219.388,143.126,213.92,143.126z"></path> <path d="M213.92,65.897c-5.467,0-9.901-4.434-9.901-9.901v-5.941c0-5.467,4.434-9.901,9.901-9.901s9.901,4.434,9.901,9.901v5.941 C223.821,61.463,219.388,65.897,213.92,65.897z"></path> </g></svg>

<div 
className="opacity-0"
ref={arrowBox}>
  {/* Down arrow top */}
        <svg
        
        ref={upArrow}
        className="absolute bottom-44 right-0 left-0 mx-auto opacity-0"
        width={130}
        height={130}
         version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style={{fill:"#0093C4"}} points="44.334,287.127 97.25,234.21 256,392.96 414.75,234.21 467.666,287.127 256,498.793 "></polygon> <polygon style={{fill:"#00B4D7"}} points="256,392.96 97.25,234.21 67.679,263.781 256,452.102 444.321,263.781 414.75,234.21 "></polygon> <path d="M256,512L31.128,287.127l66.122-66.122L256,379.755l158.75-158.75l66.122,66.122L256,512z M57.54,287.127L256,485.588 l198.461-198.461l-39.711-39.711L256,406.166L97.25,247.416L57.54,287.127z"></path> <rect x="357.148" y="274.651" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 386.2899 836.9671)" style={{fill:"#000000"}} width="18.676" height="127.659"></rect>  </g></svg>
{/* Down arrow bottom */}

        <svg
        ref={downArrow}
        className="absolute bottom-32 right-0 left-0 mx-auto opacity-0"
        width={130}
        height={130}
         version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style={{fill:"#0093C4"}} points="44.334,287.127 97.25,234.21 256,392.96 414.75,234.21 467.666,287.127 256,498.793 "></polygon> <polygon style={{fill:"#00B4D7"}} points="256,392.96 97.25,234.21 67.679,263.781 256,452.102 444.321,263.781 414.75,234.21 "></polygon> <path d="M256,512L31.128,287.127l66.122-66.122L256,379.755l158.75-158.75l66.122,66.122L256,512z M57.54,287.127L256,485.588 l198.461-198.461l-39.711-39.711L256,406.166L97.25,247.416L57.54,287.127z"></path> <rect x="357.148" y="274.651" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 386.2899 836.9671)" style={{fill:"#000000"}} width="18.676" height="127.659"></rect>  </g></svg>
</div>
    </div>

    
  )
}

export default Hero
