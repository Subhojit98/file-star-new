"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Workflow = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP)
    const racesRef = useRef(null);
    const wrapperRef = useRef(null);
    const firstText = useRef(null);
    const secondtext = useRef(null);
    const thirdText = useRef(null);
    const tl = gsap.timeline();
    useGSAP(() => {
        let races = racesRef.current;
        let wrapper = wrapperRef.current;

        if (!races || !wrapper) return;

        // To Calculate the correct scroll distance ->
        const getScrollAmount = () => -(races.scrollWidth - window.innerWidth);

        // Create horizontal scroll animation ->
        const tween = gsap.to(races, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });

        // ScrollTrigger for pinning and horizontal scrolling ->
        ScrollTrigger.create({
            trigger: wrapper,
            start: "top top",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });

        // Timeline for text cards->
        tl.from(firstText.current, {
            y: 150,
            duration: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: firstText.current,
                start: "top 80%",
                end: "bottom center",
                scrub: 1,
                toggleActions: "play none none none"
            }

        })
        tl.from(secondtext.current, {
            y: 150,
            duration: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: secondtext.current,
                start: "center 50%",
                end: "bottom center",
                scrub: 1,
                toggleActions: "play none none none"
            }

        })
        tl.from(thirdText.current, {
            y: 150,
            duration: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: thirdText.current,
                start: "center 10%",
                end: "bottom center",
                scrub: 1,
                toggleActions: "play none none none",
            }

        })


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="relative">
            <h2 className="ml-28 inline-flex items-center text-yellow-400">
                <span className="text-5xl font-thin">{"{"}</span>{" "}
                <span className="text-2xl">How it Works *</span>{" "}
                <span className="text-5xl font-thin">{"}"}</span>
            </h2>

            <div ref={wrapperRef} className="w-full h-screen flex items-center overflow-hidden">
                <div ref={racesRef} className="flex w-fit flex-nowrap items-center gap-12">
                    <div className="h-[40vh] w-[50vw] text-5xl whitespace-normal pl-28
                    ">
                        <p className="leading-tight overflow-hidden mr-10 text-violet-400" ref={firstText}>
                            Essentially, FileStar is about applying one or more transformations to a file in sequence, with the UI showing both the overall flow and the details for each step.
                        </p>
                    </div>
                    <div className="h-[40vh] w-[50vw] text-5xl whitespace-normal">
                        <p className="leading-tight overflow-hidden mr-10 text-slate-200" ref={secondtext}>
                            So, if you have multiple commands, you can string them together in different orders to create the perfect workflow and achieve the desired result.
                        </p>
                    </div>
                    <div className="h-[40vh] w-[50vw] text-5xl whitespace-normal text-rose-500">
                        <p className="leading-tight overflow-hidden ml-14 p-3 mr-5" ref={thirdText}>
                            Still confused? Don&apos;t worry, we have a few examples to help you get started.
                        </p>
                    </div>

                    <div className="w-[30vw] h-[40vh] flex justify-center items-center rounded-lg text-black bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:-translate-y-5 duration-200">
                        <div>
                            <svg viewBox="0 0 1024 1024" className="w-1/2 h-1/2 mb-5" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M576 102.4H268.8c-14.08 0-25.6 11.52-25.6 25.6v742.4c0 14.08 11.52 25.6 25.6 25.6h512c14.08 0 25.6-11.52 25.6-25.6V332.8L576 102.4z" fill="#00B2AE"></path><path d="M780.8 908.8H268.8c-21.76 0-38.4-16.64-38.4-38.4V128c0-21.76 16.64-38.4 38.4-38.4h312.32L819.2 327.68V870.4c0 21.76-16.64 38.4-38.4 38.4zM268.8 115.2c-7.68 0-12.8 5.12-12.8 12.8v742.4c0 7.68 5.12 12.8 12.8 12.8h512c7.68 0 12.8-5.12 12.8-12.8V337.92L570.88 115.2H268.8z" fill="#000000"></path><path d="M576 307.2c0 14.08 11.52 25.6 25.6 25.6h204.8L576 102.4v204.8z" fill="#008181"></path><path d="M806.4 345.6H601.6c-21.76 0-38.4-16.64-38.4-38.4V102.4c0-5.12 2.56-10.24 7.68-11.52 5.12-2.56 10.24-1.28 14.08 2.56l230.4 230.4c3.84 3.84 5.12 8.96 2.56 14.08-1.28 5.12-6.4 7.68-11.52 7.68zM588.8 133.12V307.2c0 7.68 5.12 12.8 12.8 12.8h174.08L588.8 133.12zM332.8 435.2h371.2v25.6H332.8zM332.8 524.8h371.2v25.6H332.8z" fill="#000000"></path><path d="M332.8 614.4h371.2v25.6H332.8z" fill="#000000"></path><path d="M332.8 716.8h371.2v25.6H332.8z" fill="#000000"></path></g></svg>
                            <span className="text-2xl">Uploaded File</span>
                        </div>

                        <svg version="1.1" className="w-20 h-20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xmlSpace="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style={{ fill: "#0093C4" }} points="498.208,256 291.308,408.452 291.308,288.668 8.181,288.668 8.181,223.332 291.308,223.332 291.308,103.548 "></polygon> <polygon style={{ fill: "#00B4D7" }} points="291.308,103.548 291.308,223.332 8.181,223.332 8.181,256 498.208,256 "></polygon> <path d="M283.126,424.644V296.851H0v-81.7h283.126V87.357l228.875,168.644L283.126,424.644z M16.363,280.488h283.126v111.775 l184.926-136.262L299.489,119.738v111.774H16.363V280.488z"></path> <rect x="317.383" y="209.717" transform="matrix(-0.8192 -0.5735 0.5735 -0.8192 573.3241 616.5355)" style={{ fill: "#ffffff" }} width="132.921" height="16.362"></rect> </g></svg>
                    </div>

                    <div className="w-[30vw] h-[40vh] flex justify-center gap-x-9 items-center rounded-lg text-black bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:-translate-y-5 duration-200">
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <svg viewBox="-4.95 0 73.299 73.299" className="w-1/2 h-1/2" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_12" data-name="Group 12" transform="translate(-639.682 -409.607)"> <line id="Line_8" data-name="Line 8" y1="55.45" x2="55.45" transform="translate(643.654 414.598)" fill="none" stroke="#814dff" strokeMiterlimit="10" strokeWidth="3"></line> <path id="Path_26" data-name="Path 26" d="M639.682,436.351h46.555v46.555" fill="none" stroke="#000000" strokeLinejoin="round" strokeWidth="3" opacity="0.15"></path> <path id="Path_27" data-name="Path 27" d="M656.521,419.512v46.555h46.555" fill="none" stroke="#000000" strokeLinejoin="round" strokeWidth="3" opacity="0.15"></path> <path id="Path_28" data-name="Path 28" d="M639.682,426.446h46.555V473" fill="none" stroke="#000000" strokeLinejoin="round" strokeWidth="3"></path> <path id="Path_29" data-name="Path 29" d="M656.521,409.607v46.555h46.555" fill="none" stroke="#000000" strokeLinejoin="round" strokeWidth="3"></path> </g> </g></svg>
                            <span className="text-2xl">Crop</span>
                        </div>

                        <svg version="1.1" className="w-20 h-20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xmlSpace="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style={{ fill: "#0093C4" }} points="498.208,256 291.308,408.452 291.308,288.668 8.181,288.668 8.181,223.332 291.308,223.332 291.308,103.548 "></polygon> <polygon style={{ fill: "#00B4D7" }} points="291.308,103.548 291.308,223.332 8.181,223.332 8.181,256 498.208,256 "></polygon> <path d="M283.126,424.644V296.851H0v-81.7h283.126V87.357l228.875,168.644L283.126,424.644z M16.363,280.488h283.126v111.775 l184.926-136.262L299.489,119.738v111.774H16.363V280.488z"></path> <rect x="317.383" y="209.717" transform="matrix(-0.8192 -0.5735 0.5735 -0.8192 573.3241 616.5355)" style={{ fill: "#ffffff" }} width="132.921" height="16.362"></rect> </g></svg>
                    </div>

                    <div className="w-[30vw] h-[40vh] flex justify-center gap-x-9 items-center rounded-lg text-black bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:-translate-y-5 duration-200">
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <svg fill="#000000" viewBox="-4 0 32 32" version="1.1" className="w-1/2 h-1/2" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>grayscale</title> <path d="M0 25.344v-18.688h24v18.688h-24zM11.969 21.781v1.969h2v-1.969h2.031v-1.906h-2.031v-1.969h2.031v-1.906h-2.031v-1.938h2.031v-1.906h-2.031v-1.969h2.031v-1.938h-2.031v1.938h-2v-1.938h-2.031v1.938h-1.938v-1.938h-6.406v15.5h8.344v-1.969h2.031zM11.969 10.188v1.969h-2.031v-1.969h2.031zM8 14.063v-1.906h1.938v1.906h-1.938zM13.969 14.063h-2v-1.906h2v1.906zM9.938 14.063h2.031v1.938h-2.031v-1.938zM8 17.906v-1.906h1.938v1.906h-1.938zM13.969 17.906h-2v-1.906h2v1.906zM9.938 19.875v-1.969h2.031v1.969h-2.031zM8 21.781v-1.906h1.938v1.906h-1.938zM11.969 19.875h2v1.906h-2v-1.906z"></path> </g></svg>
                            <span className="text-2xl">Grayscale</span>
                        </div>

                        <svg version="1.1" className="w-20 h-20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xmlSpace="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style={{ fill: "#0093C4" }} points="498.208,256 291.308,408.452 291.308,288.668 8.181,288.668 8.181,223.332 291.308,223.332 291.308,103.548 "></polygon> <polygon style={{ fill: "#00B4D7" }} points="291.308,103.548 291.308,223.332 8.181,223.332 8.181,256 498.208,256 "></polygon> <path d="M283.126,424.644V296.851H0v-81.7h283.126V87.357l228.875,168.644L283.126,424.644z M16.363,280.488h283.126v111.775 l184.926-136.262L299.489,119.738v111.774H16.363V280.488z"></path> <rect x="317.383" y="209.717" transform="matrix(-0.8192 -0.5735 0.5735 -0.8192 573.3241 616.5355)" style={{ fill: "#ffffff" }} width="132.921" height="16.362"></rect> </g></svg>
                    </div>
                    <div className="w-[30vw] h-[40vh] flex justify-center gap-x-9 items-center rounded-lg text-black bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:-translate-y-5 duration-200">
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style={{ fill: "#4FC0E8" }} d="M512.001,256.006c0,141.395-114.606,255.998-255.996,255.994 C114.606,512.004,0.001,397.402,0.001,256.006C-0.007,114.61,114.606,0,256.005,0C397.395,0,512.001,114.614,512.001,256.006z"></path> <path style={{ fill: "#3DAED9" }} d="M512.001,256.005c0-6.604-0.332-13.126-0.822-19.604c-0.511-0.549-109.44-109.488-110.025-110.025 c-5.072-5.52-12.283-9.043-20.353-9.043h-11.223c-0.171-0.218-0.25-0.478-0.45-0.678c-0.296-0.295-0.67-0.434-1.002-0.666 c-0.231-0.332-23.726-24.063-24.022-24.358c-2.708-2.708-7.095-2.708-9.804,0l-27.732,27.732c-0.639,0.639-1.146,1.406-1.498,2.255 c-0.701,1.695-0.701,3.603,0,5.299c0.352,0.848,0.859,1.616,1.498,2.255l43.63,43.628h-42.791l-77.83-77.83l-0.002-0.001 l-3.334-3.334c-0.634-0.636-1.394-1.142-2.235-1.494c-0.838-0.351-1.744-0.54-2.67-0.54h-124.8c-3.829,0-6.933,3.104-6.933,6.933 v235.733c0,2.348,1.243,4.32,3.027,5.574c0.463,0.658,15.289,15.487,15.47,15.69c-2.684,0.958-4.63,3.457-4.63,6.469v6.933 c0,8.071,3.524,15.282,9.046,20.355c0.535,0.582,122.868,122.915,123.45,123.451c0.141,0.154,0.297,0.29,0.441,0.441 c6.477,0.491,12.998,0.821,19.601,0.821C397.395,512.004,512.001,397.401,512.001,256.005z"></path> <g> <path style={{ fill: "#F4F6F9" }} d="M421.862,232.53c-0.352-0.842-0.859-1.6-1.494-2.235l-55.462-55.462 c-0.635-0.635-1.393-1.142-2.235-1.494c-0.838-0.35-1.744-0.539-2.67-0.539h-76.267V152c0-0.926-0.189-1.831-0.539-2.67 c-0.352-0.842-0.859-1.6-1.494-2.235l-55.462-55.462c-0.635-0.635-1.393-1.142-2.235-1.494c-0.838-0.35-1.744-0.539-2.67-0.539 h-124.8c-3.829,0-6.933,3.104-6.933,6.933v235.733c0,3.829,3.104,6.933,6.933,6.933h131.733v76.267 c0,3.829,3.104,6.933,6.933,6.933h180.267c3.829,0,6.933-3.104,6.933-6.933V235.2C422.401,234.274,422.212,233.369,421.862,232.53z M366.934,196.47l31.796,31.796h-31.796V196.47z M228.267,113.27l31.796,31.796h-31.796V113.27z M103.467,325.333V103.467h110.933 V152c0,3.829,3.104,6.933,6.933,6.933h48.533V172.8h-34.667c-3.829,0-6.933,3.104-6.933,6.933v145.6H103.467z M242.134,408.533 V186.667h110.933V235.2c0,3.829,3.104,6.933,6.933,6.933h48.533v166.4H242.134z"></path> <path style={{ fill: "#F4F6F9" }} d="M305.069,126.916c0.352,0.848,0.859,1.616,1.498,2.255l27.731,27.731 c1.355,1.355,3.129,2.031,4.902,2.031s3.548-0.677,4.902-2.031c2.708-2.708,2.708-7.095,0-9.804L328.204,131.2h52.596 c7.648,0,13.867,6.219,13.867,13.867v20.8c0,3.829,3.104,6.933,6.933,6.933c3.829,0,6.933-3.104,6.933-6.933v-20.8 c0-15.292-12.442-27.733-27.733-27.733h-52.596l15.898-15.898c2.708-2.708,2.708-7.095,0-9.804c-2.708-2.708-7.095-2.708-9.804,0 l-27.731,27.731c-0.64,0.639-1.147,1.406-1.498,2.255C304.367,123.312,304.367,125.221,305.069,126.916z"></path> <path style={{ fill: "#F4F6F9" }} d="M206.932,385.084c-0.352-0.848-0.859-1.616-1.498-2.255l-27.731-27.731 c-2.708-2.708-7.095-2.708-9.804,0c-2.708,2.708-2.708,7.095,0,9.804l15.898,15.899h-52.596c-7.648,0-13.867-6.219-13.867-13.867 V360c0-3.829-3.104-6.933-6.933-6.933s-6.933,3.104-6.933,6.933v6.933c0,15.292,12.442,27.733,27.733,27.733h52.596l-15.898,15.898 c-2.708,2.708-2.708,7.095,0,9.804c1.355,1.355,3.129,2.031,4.902,2.031s3.548-0.677,4.902-2.031l27.731-27.731 c0.64-0.639,1.147-1.406,1.498-2.255C207.634,388.688,207.634,386.779,206.932,385.084z"></path> </g> </g></svg>
                            <span className="text-2xl">Grayscale</span>
                        </div>

                        <svg version="1.1" className="w-20 h-20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xmlSpace="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style={{ fill: "#0093C4" }} points="498.208,256 291.308,408.452 291.308,288.668 8.181,288.668 8.181,223.332 291.308,223.332 291.308,103.548 "></polygon> <polygon style={{ fill: "#00B4D7" }} points="291.308,103.548 291.308,223.332 8.181,223.332 8.181,256 498.208,256 "></polygon> <path d="M283.126,424.644V296.851H0v-81.7h283.126V87.357l228.875,168.644L283.126,424.644z M16.363,280.488h283.126v111.775 l184.926-136.262L299.489,119.738v111.774H16.363V280.488z"></path> <rect x="317.383" y="209.717" transform="matrix(-0.8192 -0.5735 0.5735 -0.8192 573.3241 616.5355)" style={{ fill: "#ffffff" }} width="132.921" height="16.362"></rect> </g></svg>
                    </div>

                    <div className="w-[30vw] h-[40vh] flex justify-center gap-x-9 items-center">
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <svg className="w-full h-full" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style={{ fill: "#36D9D9" }} d="M251.138,110.305c-9.232,0-16.722-7.49-16.722-16.722V26.696c0-9.232,7.49-16.722,16.722-16.722 s16.722,7.49,16.722,16.722v66.888C267.86,102.815,260.37,110.305,251.138,110.305z"></path> <path style={{ fill: "#36D9D9" }} d="M52.354,162.942c-2.842,0-5.716-0.719-8.35-2.243L8.971,140.471 c-8.002-4.616-10.734-14.839-6.118-22.84c4.616-8.013,14.849-10.734,22.84-6.118l35.033,20.228 c8.002,4.616,10.734,14.839,6.118,22.84C63.753,159.948,58.124,162.942,52.354,162.942z"></path> </g> <path style={{ fill: "#43BFBF" }} d="M495.267,418.658c-2.842,0-5.716-0.719-8.35-2.243l-70.666-40.804 c-8.002-4.616-10.734-14.839-6.118-22.84c4.605-8.002,14.86-10.734,22.84-6.118l70.666,40.804 c8.002,4.616,10.734,14.839,6.118,22.84C506.665,415.665,501.036,418.658,495.267,418.658z"></path> <path style={{ fill: "#36D9D9" }} d="M133.764,480.266c-2.842,0-5.716-0.719-8.35-2.243c-8.002-4.616-10.734-14.839-6.118-22.84 l23.657-40.978c4.605-8.002,14.86-10.734,22.84-6.118c8.002,4.616,10.734,14.839,6.118,22.84l-23.657,40.978 C145.163,477.272,139.534,480.266,133.764,480.266z"></path> <g> <path style={{ fill: "#43BFBF" }} d="M351.149,103.74c-2.842,0-5.716-0.719-8.35-2.243c-8.002-4.616-10.734-14.839-6.118-22.84 l32.073-55.543c4.616-8.012,14.849-10.734,22.84-6.118c8.002,4.616,10.734,14.839,6.118,22.84l-32.073,55.543 C362.547,100.747,356.919,103.74,351.149,103.74z"></path> <path style={{ fill: "#43BFBF" }} d="M484.935,277.524h-66.888c-9.232,0-16.722-7.49-16.722-16.722c0-9.232,7.49-16.722,16.722-16.722 h66.888c9.232,0,16.722,7.49,16.722,16.722C501.657,270.034,494.167,277.524,484.935,277.524z"></path> </g> <path style={{ fill: "#36D9D9" }} d="M83.609,277.524H16.722C7.49,277.524,0,270.034,0,260.802c0-9.232,7.49-16.722,16.722-16.722h66.888 c9.232,0,16.722,7.49,16.722,16.722C100.331,270.034,92.841,277.524,83.609,277.524z"></path> <path style={{ fill: "#43BFBF" }} d="M386.128,511.739c-5.77,0-11.388-2.994-14.49-8.35l-41.402-71.634 c-4.616-8.002-1.883-18.225,6.108-22.851c7.98-4.616,18.214-1.894,22.851,6.108l41.402,71.634 c4.616,8.002,1.883,18.225-6.108,22.851C391.854,511.021,388.969,511.739,386.128,511.739z"></path> <path style={{ fill: "#36D9D9" }} d="M183.952,161.647c-5.77,0-11.388-2.994-14.49-8.35l-50.166-86.789 c-4.616-8.002-1.883-18.225,6.108-22.851c7.991-4.616,18.225-1.883,22.851,6.108l50.166,86.789 c4.616,8.002,1.883,18.225-6.108,22.851C189.678,160.928,186.794,161.647,183.952,161.647z"></path> <path style={{ fill: "#43BFBF" }} d="M391.027,196.592c-5.77,0-11.388-2.994-14.49-8.35c-4.616-8.002-1.883-18.225,6.108-22.851 l88.868-51.374c7.98-4.616,18.225-1.883,22.851,6.108c4.616,8.002,1.883,18.225-6.108,22.851l-88.868,51.374 C396.753,195.874,393.869,196.592,391.027,196.592z"></path> <path style={{ fill: "#36D9D9" }} d="M48.174,394.577c-5.77,0-11.388-2.994-14.49-8.35c-4.616-8.002-1.883-18.225,6.108-22.851 l77.578-44.843c7.991-4.616,18.225-1.894,22.851,6.108c4.616,8.002,1.883,18.225-6.108,22.851l-77.578,44.843 C53.9,393.858,51.015,394.577,48.174,394.577z"></path> <path style={{ fill: "#F9A926" }} d="M494.646,40.63l11.822-11.822c6.532-6.532,6.532-17.114,0-23.646c-6.532-6.532-17.114-6.532-23.646,0 L471,16.985L459.178,5.161c-6.532-6.532-17.114-6.532-23.646,0s-6.532,17.114,0,23.646l11.822,11.822l-11.822,11.822 c-6.532,6.532-6.532,17.114,0,23.646c3.266,3.266,7.545,4.9,11.822,4.9s8.557-1.633,11.822-4.9L471,64.276l11.822,11.822 c3.266,3.266,7.545,4.9,11.822,4.9s8.557-1.633,11.822-4.9c6.532-6.532,6.532-17.114,0-23.646L494.646,40.63z"></path> <g> <circle style={{ fill: "#FF6698" }} cx="72.462" cy="82.435" r="16.722"></circle> <circle style={{ fill: "#FF6698" }} cx="27.87" cy="37.843" r="16.722"></circle> </g> <g> <circle style={{ fill: "#E65C89" }} cx="473.787" cy="483.765" r="16.722"></circle> <circle style={{ fill: "#E65C89" }} cx="429.195" cy="439.173" r="16.722"></circle> </g> <path style={{ fill: "#FFC033" }} d="M316.791,380.25c-2.668,0-5.334-0.631-7.783-1.916l-58.179-30.602l-58.179,30.602 c-5.64,2.95-12.443,2.46-17.615-1.274c-5.149-3.745-7.73-10.081-6.652-16.363l11.116-64.786l-47.063-45.876 c-4.562-4.441-6.205-11.093-4.235-17.147c1.97-6.053,7.207-10.462,13.499-11.376l65.048-9.45l29.089-58.951 c2.809-5.704,8.622-9.319,14.991-9.319s12.182,3.614,14.991,9.319l29.089,58.951l65.048,9.45 c6.293,0.914,11.529,5.323,13.499,11.376c1.97,6.053,0.327,12.704-4.235,17.147l-47.063,45.876l11.116,64.786 c1.078,6.282-1.503,12.617-6.652,16.363C323.704,379.172,320.252,380.25,316.791,380.25z"></path> <circle style={{ fill: "#FF6698" }} cx="108.692" cy="182.214" r="16.722"></circle> <g> <circle style={{ fill: "#E65C89" }} cx="317.716" cy="143.753" r="16.722"></circle> <circle style={{ fill: "#E65C89" }} cx="376.243" cy="327.694" r="16.722"></circle> </g> <path style={{ fill: "#FFC033" }} d="M65.451,469.826l11.822-11.822c6.532-6.532,6.532-17.114,0-23.646 c-6.532-6.532-17.114-6.532-23.646,0L41.805,446.18l-11.822-11.822c-6.532-6.532-17.114-6.532-23.646,0s-6.532,17.114,0,23.646 l11.822,11.822L6.336,481.648c-6.532,6.532-6.532,17.114,0,23.646c3.266,3.266,7.545,4.9,11.822,4.9s8.557-1.633,11.822-4.9 l11.823-11.822l11.822,11.822c3.266,3.266,7.545,4.9,11.822,4.9s8.557-1.633,11.822-4.9c6.532-6.532,6.532-17.114,0-23.646 L65.451,469.826z"></path> <path style={{ fill: "#F9A926" }} d="M309.007,378.334c2.449,1.284,5.117,1.916,7.783,1.916c3.461,0,6.913-1.078,9.83-3.189 c5.149-3.745,7.73-10.081,6.652-16.363l-11.116-64.786l47.063-45.876c4.562-4.441,6.205-11.093,4.235-17.147 s-7.207-10.462-13.499-11.376l-65.048-9.45l-29.089-58.951c-2.809-5.704-8.622-9.319-14.991-9.319v203.939L309.007,378.334z"></path> <path style={{ fill: "#43BFBF" }} d="M267.86,93.583V26.696c0-9.232-7.49-16.722-16.722-16.722v100.331 C260.37,110.305,267.86,102.815,267.86,93.583z"></path> <path style={{ fill: "#736056" }} d="M251.138,511.631c-9.232,0-16.722-7.49-16.722-16.722v-91.872c0-9.232,7.49-16.722,16.722-16.722 s16.722,7.49,16.722,16.722v91.872C267.86,504.14,260.37,511.631,251.138,511.631z"></path> <path style={{ fill: "#665247" }} d="M267.86,494.909v-91.872c0-9.232-7.49-16.722-16.722-16.722v125.316 C260.37,511.631,267.86,504.14,267.86,494.909z"></path> </g></svg>
                            <span className="text-2xl">Done</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workflow;
