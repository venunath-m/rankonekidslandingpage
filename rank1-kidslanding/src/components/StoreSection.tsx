import storeImg1 from "../assets/stores/store1.jpg";
import storeImg2 from "../assets/stores/store2.jpg";
import storeImg3 from "../assets/stores/store3.jpg";
import kidsHeroImg from "../assets/hero/kids-collection.jpg";


const storeImages = [
    { id: "01", img: storeImg1, loc: "RANK1 BOMMANAHALLI\nBENGALURU, KARNATAKA" },
    { id: "02", img: storeImg2, loc: "RANK1 BOMMANAHALLI\nBENGALURU, KARNATAKA" },
    { id: "03", img: storeImg3, loc: "RANK1 BOMMANAHALLI\nBENGALURU, KARNATAKA" },
];

export default function StoreSection() {
    // Tripled array pool logic ensures clean infinite looping rendering passes
    const rollingStores = [...storeImages, ...storeImages, ...storeImages];

    return (
        <div className="w-full bg-white overflow-hidden">
            
            {/* ==========================================
                SECTION 1: STORE LOCATOR
               ========================================== */}
            <section className="w-full pt-14 md:pt-24 lg:pt-[120px] pb-10 md:pb-[80px]">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    
                    {/* Header */}
                    <h2 className="uppercase text-black font-black text-[36px] sm:text-[54px] lg:text-[72px] leading-[100%] tracking-tighter">
                        Store Locator
                    </h2>
                    
                    <p className="mt-4 text-neutral-600 text-sm sm:text-base lg:text-[20px] font-medium max-w-[550px] mx-auto leading-relaxed">
                        Prefer shopping in-store?<br />
                        Find your nearest Rank 1 store and explore the collection in person.
                    </p>

                    {/* CTA Button */}
                    <button className="mt-6 sm:mt-[36px] bg-black text-white font-bold text-sm sm:text-base lg:text-[18px] uppercase py-4 lg:py-[18px] px-8 lg:px-[42px] rounded-md hover:bg-[#FF1E1E] transition-colors duration-300 shadow-sm">
                        Find a Store Near You
                    </button>
                </div>

                {/* Infinite Right-to-Left Ticker Canvas */}
                <div className="mt-10 md:mt-[80px] w-full overflow-hidden relative border-t border-b border-neutral-200 py-4 bg-neutral-50">
                    
                    {/* Native CSS Keyframe Injector block for hardware acceleration performance */}
                    <style>{`
                        @keyframes marquee {
                            0% { transform: translate3d(0, 0, 0); }
                            100% { transform: translate3d(-33.3333%, 0, 0); }
                        }
                        .animate-marquee {
                            display: flex;
                            width: max-content;
                            animation: marquee 28s linear infinite;
                        }
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>

                    <div className="animate-marquee gap-4 md:gap-[24px]">
                        {rollingStores.map((store, index) => (
                            <div 
                                key={index} 
                                className="relative w-[280px] sm:w-[360px] md:w-[440px] h-[380px] sm:h-[480px] md:h-[580px] flex-shrink-0 overflow-hidden rounded-2xl group select-none shadow-sm"
                            >
                                {/* Store Image Layout */}
                                <img 
                                    src={store.img} 
                                    alt="Rank 1 Store Interior Showcase" 
                                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                                    draggable="false"
                                />

                                {/* Floating Numeric Identifier Badge */}
                                <div className="absolute top-4 sm:top-[24px] left-4 sm:left-[24px] bg-white text-black text-sm sm:text-[18px] font-black w-9 sm:w-[46px] h-9 sm:h-[46px] rounded-full flex items-center justify-center shadow-md border border-neutral-100">
                                    {store.id}
                                </div>

                                {/* Dynamic Gradient Location Overlay Text */}
                                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-[32px] bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end min-h-[40%]">
                                    <p className="text-white font-black text-base sm:text-[20px] tracking-wide whitespace-pre-line leading-[135%] uppercase">
                                        {store.loc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ==========================================
                SECTION 2: KIDS COLLECTION HERO BANNER
               ========================================== */}
            <section className="w-full h-[460px] sm:h-[580px] md:h-[660px] lg:h-[720px] relative flex items-center justify-center overflow-hidden">
                
                {/* Background Art Canvas Wrapper */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/35 z-10" />
                    <img 
                        src={kidsHeroImg} 
                        alt="Dress Your Little Ones Banner Backdrop" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Typography Container Box */}
                <div className="relative z-20 text-center max-w-[1000px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    
                    {/* Responsive Primary Heading */}
                    <h1 className="text-white font-black uppercase text-[32px] sm:text-[52px] md:text-[64px] lg:text-[76px] leading-[105%] tracking-tighter drop-shadow-lg">
                        Dress your little ones in<br className="hidden sm:inline" /> styles they’ll love.
                    </h1>

                    {/* Primary Interactive CTA */}
                    <button className="mt-8 sm:mt-[42px] bg-black text-white font-bold text-sm sm:text-base lg:text-[18px] uppercase py-[16px] sm:py-[20px] px-8 sm:px-[48px] rounded-md border border-transparent hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 shadow-xl">
                        Shop Kids Collection Now
                    </button>

                    {/* Secondary Subtext Accent Link */}
                    <button className="mt-5 sm:mt-[28px] text-white font-bold text-xs sm:text-sm lg:text-[16px] uppercase tracking-widest border-b-2 border-white/80 pb-1 hover:text-red-400 hover:border-red-400 transition-all duration-300">
                        Explore Cute New Styles
                    </button>
                </div>
            </section>

        </div>
    );
}