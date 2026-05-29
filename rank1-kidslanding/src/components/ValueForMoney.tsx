import mainImg from "../assets/value/main.jpg";
import smallImg from "../assets/value/small.jpg";

export default function ValueForMoney() {
    return (
        <section className="w-full bg-[#F5F5F5] py-14 md:py-24 lg:py-[120px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* LEFT EDITORIAL BLOCK TEXT - Spans 5/12 of the container width */}
                <div className="flex flex-col lg:col-span-5 w-full">

                    {/* CORE HEADINGS SECTION */}
                    <h2 className="uppercase text-black font-black text-[36px] sm:text-[54px] lg:text-[72px] leading-[95%] tracking-tighter">
                        Value For Money
                    </h2>

                    {/* BRAND STATEMENT BODY TEXT */}
                    <p className="mt-4 sm:mt-6 text-neutral-600 text-base sm:text-lg lg:text-[21px] font-semibold leading-[145%]">
                        At Rank 1 Kids, we believe children deserve
                        comfortable, safe, and stylish clothing at
                        affordable prices. Our collections are
                        designed to keep kids happy, active, and
                        confident—while helping parents shop
                        smart with great value.
                    </p>

                    {/* OFFSET ACCENT SMALL IMAGE LAYER (Hidden on mobile to save vertical scrolling fatigue) */}
                    <div className="hidden sm:block mt-6 lg:mt-[38px]">
                        <div className="w-[160px] lg:w-[220px] h-[180px] lg:h-[240px] rounded-xl overflow-hidden shadow-md bg-neutral-200">
                            <img
                                src={smallImg}
                                alt="Kids playing"
                                className="w-full h-full object-cover pointer-events-none select-none"
                            />
                        </div>
                    </div>

                </div>

                {/* RIGHT EDITORIAL HERO CANVAS - Spans 7/12 of the container width */}
                <div className="w-full lg:col-span-7 h-[340px] sm:h-[500px] lg:h-[680px] xl:h-[760px] rounded-2xl overflow-hidden bg-neutral-200 shadow-sm relative group">
                    <img
                        src={mainImg}
                        alt="Value For Money Editorial Showcase"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] pointer-events-none select-none"
                    />
                </div>

            </div>
        </section>
    );
}