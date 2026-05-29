import bg2 from "../assets/categories/bg2.jpg";

export default function WhyShop() {
    const values = [
        "SOFT, SKIN-FRIENDLY FABRICS",
        "DURABLE FOR PLAY & DAILY WEAR",
        "AFFORDABLE PRICING FOR GROWING KIDS",
        "FUN, TRENDY & COLORFUL DESIGNS",
        "SAFE SHOPPING & SECURE CHECKOUT"
    ];

    return (
        <section className="relative w-full min-h-[700px] lg:h-[900px] flex items-stretch overflow-hidden bg-neutral-900">

            {/* BACKGROUND IMAGE */}
            <img
                src={bg2}
                alt="Kids playing background"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            />

            {/* DARK GRADIENT OVERLAY (Slight adjustment for text readability across viewports) */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

            {/* MAIN CONTAINER CONTENT WRAPPER */}
            <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center lg:items-end justify-center pt-12 pb-12 lg:pb-[80px]">

                {/* MAIN COMFORT GLASS PANELS CARD */}
                <div className="relative w-full h-auto lg:min-h-[340px] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.3)]">

                    {/* WHITE GLASS LAYER BACKGROUNDS */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-[24px] md:backdrop-blur-[40px]" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5" />

                    {/* CONTENT CONTAINER INTERNAL WRAPPER */}
                    <div className="relative z-10 w-full h-full px-5 py-6 sm:p-8 lg:p-[40px] flex flex-col justify-between gap-8">

                        {/* HEADINGS BLOCK TEXT ENTRY */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[46px] leading-[110%] tracking-tight uppercase text-white">
                                Why Shop at Rank 1 Kids?
                            </h2>
                            <p className="font-bold text-[14px] sm:text-[16px] tracking-wide text-neutral-200">
                                Made for kids. Approved by parents.
                            </p>
                        </div>

                        {/* CARDS STRUCTURAL GRID WRAPPER 
                            - Mobile: Stacked list
                            - Tablet / Surface Pro: Clean 2-column or 3-column rows
                            - Desktop: Smooth inline row deployment 
                        */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-4 lg:gap-5 w-full">
                            {values.map((item, i) => (
                                <div
                                    key={i}
                                    className="
                                        w-full lg:flex-1 min-h-[100px] sm:min-h-[118px] 
                                        bg-white rounded-[16px] p-5 shadow-md
                                        flex flex-col justify-center items-start
                                        transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                                    "
                                >
                                    {/* ACCENT BRAND STAR INSIGNIA ICON */}
                                    <div className="text-red-500 font-black text-[28px] leading-none mb-1 flex items-center justify-center">
                                        ★
                                    </div>

                                    {/* CORE HEADING PHRASE */}
                                    <span className="font-black text-[14px] sm:text-[15px] lg:text-[16px] leading-[135%] tracking-wide uppercase text-neutral-900 block">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}