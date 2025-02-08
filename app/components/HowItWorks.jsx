"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const HowItWorks = () => {
  const triggerRef = useRef(null)
  const lettersRef = useRef([])

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "You can convert, merge, split, transform, compress, or extract one or many files with just a few simple clicks. A smart solution was developed to help you boost your productivity and manage your time.";

  useEffect(() => {
    if (!triggerRef.current || lettersRef.current.length === 0) return;

    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 1,
        start: "top 60%",
        end: "bottom 85%",
      },
      color: "#ffffff",
      stagger: 0.5,
      duration: 2.2,
    });

    return () => {
      reveal.kill();
    };
  }, []);

  return (

     <div className="w-full h-full px-28 flex justify-center items-center mb-40">
      <div className="" ref={triggerRef}>
        <h2 className="inline-flex items-center text-yellow-400"><span className="text-5xl font-thin">{"{"}</span> <span className="text-2xl">Why Filestar *</span> <span className="text-5xl font-thin">{"}"}</span></h2>
      <p className="text-7xl mt-20 text-start leading-tight tracking-tight text-neutral-900">
        {text.split("").map((letter, index) => (
            <span
              key={index}
              className=""
              ref={(el) => {
                if (el) lettersRef.current[index] = el
              }}
            >
              {letter}
            </span>
            ))}
      </p>
      </div>

    </div>
  );
};

export default HowItWorks;
