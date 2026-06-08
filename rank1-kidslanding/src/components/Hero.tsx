import { useEffect, useRef } from "react";

import bg from "../assets/herobackground/bg1.jpg";

import img1 from "../assets/heroImagesScroll/1.jpg";
import img2 from "../assets/heroImagesScroll/2.jpg";
import img3 from "../assets/heroImagesScroll/3.jpg";
import img4 from "../assets/heroImagesScroll/4.jpg";
import img5 from "../assets/heroImagesScroll/5.jpg";
import img6 from "../assets/heroImagesScroll/6.jpg";
import img7 from "../assets/heroImagesScroll/7.jpg";

export default function Hero() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const images = [img1, img2, img3, img4, img5, img6, img7];

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let frame: number;
        let offset = 0;
        let halfWidth = 0;

        const calculateWidth = () => {
            halfWidth = el.scrollWidth / 2;
        };

        const timeoutId = setTimeout(calculateWidth, 100);
        window.addEventListener("resize", calculateWidth);

        const scroll = () => {
            if (!el || halfWidth === 0) {
                frame = requestAnimationFrame(scroll);
                return;
            }

            // Smooth linear speed rate
            offset += 1.25;

            if (offset >= halfWidth) {
                offset -= halfWidth;
            }

            el.style.transform = `translate3d(${-offset}px, 0, 0)`;

            const children = Array.from(el.children) as HTMLDivElement[];
            const screenCenter = window.innerWidth / 2;

            children.forEach((child) => {
                const rect = child.getBoundingClientRect();
                const childCenter = rect.left + rect.width / 2;

                const position = (childCenter - screenCenter) / screenCenter;
                const normalizedPos = Math.min(Math.max(position, -1), 1);
                const t = Math.abs(normalizedPos);
                
                const eased = 1 - Math.pow(t, 1.6);

                const isSmallScreen = window.innerWidth < 1024;
                const baseScale = isSmallScreen ? 0.85 : 0.75;
                const dynamicGrowth = isSmallScreen ? 0.25 : 0.45; // Controlled growth limit to avoid layout collisions

                const finalScale = baseScale + eased * dynamicGrowth;
                
                // Lift center cards slightly up to balance out the height scaling visual weight
                const translateY = -Math.max(0, (finalScale - baseScale) * 20);
                const opacity = 0.5 + (1 - t) * 0.5;

                const animatedTarget = child.querySelector(".animate-target") as HTMLDivElement;
                if (animatedTarget) {
                    animatedTarget.style.transform = `scale(${finalScale}) translateY(${translateY}px)`;
                    animatedTarget.style.opacity = `${opacity}`;
                }
            });

            frame = requestAnimationFrame(scroll);
        };

        frame = requestAnimationFrame(scroll);

        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", calculateWidth);
        };
    }, []);

    return (
        <section className="w-full flex flex-col items-center pt-12 md:pt-16 pb-12 relative min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-white">
            
            {/* BACKGROUND INFRASTRUCTURE */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={bg}
                    alt="Background Banner Pattern"
                    className="w-full h-full object-cover object-center scale-100 brightness-100 contrast-105"
                />
            </div>

            {/* LIGHT INTERCEPT OVERLAY */}
            <div className="absolute inset-0 bg-white/15 z-10" />

            {/* DOM STRUCTURAL LAYER CONTENT */}
            <div className="relative z-20 flex flex-col items-center w-full max-w-[1440px] mx-auto px-4 md:px-8">
                
                {/* BRAND HEADINGS & TEXT BLOCK */}
                <div className="flex flex-col items-center text-center w-full max-w-[720px] gap-3 md:gap-4 mt-4 md:mt-8">
                    <h1 className="font-sans font-black text-[32px] sm:text-[42px] lg:text-[56px] leading-[105%] tracking-[-0.04em] uppercase text-black">
                        CUTE STYLES. COMFY FITS.
                    </h1>
                    <h1 className="font-sans font-black text-[32px] sm:text-[42px] lg:text-[56px] leading-[105%] tracking-[-0.04em] uppercase text-red-500">
                        HAPPY KIDS.
                    </h1>

                    <p className="font-sans font-semibold text-[16px] sm:text-[18px] lg:text-[22px] leading-[140%] tracking-normal text-[#1A1A1A] max-w-[620px] mt-2 px-2">
                        Discover fun, colorful, and budget-friendly clothing made for play, comfort, and everyday adventures.
                    </p>
                    
                    {/* BUTTON ADAPTIVE WRAPPER */}
                    <div className="mt-4 md:mt-6 flex justify-center">
                        
                        <div className="rounded-[10px] border border-[#DDDDDD] p-1 bg-transparent">
    <button className="w-[200px] sm:w-[236px] h-[48px] md:h-[56px] bg-black text-white rounded-[6px] text-[15px] md:text-[16px] font-bold uppercase tracking-wider flex items-center justify-center transition-all duration-300 hover:bg-red-500">
         Shop Kids Collection
    </button>
</div>
                    </div>
                </div>

                {/* FIXED SCROLL STRIP BOX */}
                {/* Added py-[40px] padding so scaled cards have height room to expand freely without clipping */}
                <div className="w-full mt-[40px] md:mt-[60px] lg:mt-[80px] py-[40px] overflow-hidden relative">
                    <div
                        ref={scrollRef}
                        /* Swapped track-gap to 0 and handled padding cell-by-cell below for perfect cross-device spacing */
                        className="flex gap-0 w-max will-change-transform"
                    >
                        {[...images, ...images].map((img, i) => (
                            <div
                                key={i}
                                /* Unified baseline width gutters */
                                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[190px] sm:h-[240px] md:h-[280px] lg:h-[330px] flex-shrink-0"
                            >
                                {/* COMFORT INTERIOR WRAPPER: Handles steady layout gaps across devices */}
                                <div className="w-full h-full px-3 sm:px-4 md:px-5 lg:px-6 flex items-center justify-center">

                                    {/* ANIMATED CARDS ELEMENT TARGET (No overflow-hidden on this layer so it scales over the whitespace smoothly) */}
                                    <div className="animate-target w-full h-full will-change-transform transition-transform duration-200 ease-out origin-center">
                                        
                                        {/* IMAGE WRAPPER CANVAS BOX */}
                                        <div className="w-full h-full overflow-hidden bg-white shadow-[0_12px_32px_rgba(0,0,0,0.12)] rounded-[4px] border border-neutral-100">
                                            <img 
                                                src={img} 
                                                alt="Kids Fashion Portfolio" 
                                                className="w-full h-full object-cover pointer-events-none select-none" 
                                            />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}