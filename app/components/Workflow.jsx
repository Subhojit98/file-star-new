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

                </div>
            </div>
        </div>
    );
};

export default Workflow;
