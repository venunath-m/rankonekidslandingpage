
// Replace this with your actual logo asset path
// import logo from "../assets/logo.png"; 

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-white pt-16 md:pt-24 lg:pt-[100px] pb-10 relative overflow-hidden select-none">
            
            {/* MAIN CONTENT CONTAINER */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* TOP HALF: Logo, Tagline, and Navigation Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[60px] pb-10 lg:pb-[60px]">
                    
                    {/* Left Side: Logo & Brand Tagline */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            {/* Logo Wrapper */}
                            <div className="w-[100px] sm:w-[120px] mb-6 sm:mb-10">
                                <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                                    <path d="M10 10H70L50 35H10V10Z" fill="white" />
                                    <path d="M55 35L75 10H90L65 45L55 35Z" fill="#FF1E1E" />
                                    <path d="M45 45H10V38H45V45Z" fill="white" />
                                </svg>
                                <span className="block text-xs sm:text-[14px] font-black tracking-[0.3em] uppercase mt-2 text-center">
                                    Rank 1
                                </span>
                            </div>

                            {/* Main Footer Headline */}
                            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] leading-[110%] font-black uppercase tracking-tight max-w-[400px]">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA0A0] to-[#A0C8FF]">
                                    Rank 1 Kids
                                </span><br />
                                Fun Fashion At<br />
                                <span className="text-[#A0C8FF]">Smart Prices</span>
                            </h2>
                        </div>
                    </div>

                    {/* Right Side: Links & Contact Columns */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:pt-[40px]">
                        
                        {/* Column 1 & 2: Contact Us */}
                        <div className="sm:col-span-2">
                            <h3 className="text-neutral-500 text-xs sm:text-[14px] font-bold uppercase tracking-wider mb-4 sm:mb-6">
                                Contact Us
                            </h3>
                            <ul className="space-y-3 sm:space-y-[16px]">
                                <li className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-[12px] text-base sm:text-[18px] font-bold text-neutral-200 hover:text-white transition">
                                    <div className="flex items-center gap-2">
                                        {/* Phone Icon */}
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>+91 1234 567 890</span>
                                    </div>
                                </li>
                                <li className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-[12px] text-base sm:text-[18px] font-bold text-neutral-200 hover:text-white transition break-all">
                                    <div className="flex items-center gap-2 w-full">
                                        {/* Email Icon */}
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="truncate block max-w-full">abcdefghijklmn@gmail.com</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Shop by Category */}
                        <div>
                            <h3 className="text-neutral-500 text-xs sm:text-[14px] font-bold uppercase tracking-wider mb-4 sm:mb-6">
                                Shop By Category
                            </h3>
                            <ul className="space-y-3 sm:space-y-[16px] text-base sm:text-[18px] font-bold uppercase tracking-wide">
                                <li><a href="#boys" className="text-neutral-200 hover:text-[#FF1E1E] transition-colors">Boys Wear</a></li>
                                <li><a href="#girls" className="text-neutral-200 hover:text-[#FF1E1E] transition-colors">Girls Wear</a></li>
                                <li><a href="#baby" className="text-neutral-200 hover:text-[#FF1E1E] transition-colors">Baby Wear</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Company */}
                        <div>
                            <h3 className="text-neutral-500 text-xs sm:text-[14px] font-bold uppercase tracking-wider mb-4 sm:mb-6">
                                Company
                            </h3>
                            <ul className="space-y-3 sm:space-y-[16px] text-base sm:text-[18px] font-bold uppercase tracking-wide">
                                <li><a href="#testimonials" className="text-neutral-200 hover:text-[#FF1E1E] transition-colors">Testimonials</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* HORIZONTAL SEPARATOR */}
                <div className="w-full h-[1px] bg-neutral-800" />

                {/* BOTTOM HALF: Social Handles and Copyright Text */}
                <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    
                    {/* Social Media Links */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-neutral-500 text-[12px] font-bold uppercase tracking-wider">
                            Be Part of Our Community
                        </h4>
                        <div className="flex items-center gap-6 mt-1">
                            {/* Facebook */}
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-[#FF1E1E] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-[#FF1E1E] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.81.058 2.108.096 3.11 1.122 3.206 3.206.048 1.026.058 1.38.058 3.81s-.01 2.784-.058 3.81c-.096 2.108-1.122 3.11-3.206 3.206-1.026.048-1.38.058-3.81.058s-2.784-.01-3.81-.058c-2.108-.096-3.11-1.122-3.206-3.206C2.01 14.784 2 14.43 2 12s.01-2.784.058-3.81c.096-2.108 1.122-3.11 3.206-3.206C6.216 2.01 6.57 2 9.03 2c2.43 0 2.784.01 3.81.058zm0 1.777c-2.404 0-2.688.01-3.635.053-1.923.088-2.618.775-2.706 2.707-.043.947-.053 1.231-.053 3.635s.01 2.688.053 3.635c.088 1.922.775 2.618 2.707 2.706.947.044 1.231.054 3.635.054s2.688-.01 3.635-.054c1.923-.088 2.617-.775 2.706-2.706.044-.947.054-1.231.054-3.635s-.01-2.688-.054-3.635c-.088-1.923-.775-2.618-2.706-2.707-.947-.043-1.231-.053-3.635-.053zm0 4.137a4.086 4.086 0 110 8.172 4.086 4.086 0 010-8.172zm0 1.777a2.31 2.31 0 100 4.617 2.31 2.31 0 010-4.617zm4.564-2.221a1.042 1.042 0 112.084 0 1.042 1.042 0 01-2.084 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Copyright Note */}
                    <span className="text-neutral-500 text-[12px] font-bold tracking-wider uppercase sm:mt-auto">
                        Copyright © 2026 Rank1
                    </span>
                </div>

            </div>

            {/* =========================================================
                BACKGROUND WATERMARK TEXT ("RANK 1")
                Positioned seamlessly with safe responsive typography scaling
               ========================================================= */}
            <div className="absolute bottom-[-40px] sm:bottom-[-60px] lg:bottom-[-90px] left-[-10px] sm:left-[-30px] w-[110%] z-0 pointer-events-none select-none opacity-[0.04]">
                <h1 className="text-[32vw] font-black uppercase tracking-tighter text-white leading-none flex items-baseline">
                    Rank
                    <span className="text-[#FF1E1E] text-[36vw] leading-none inline-block ml-[-2vw]">1</span>
                </h1>
            </div>

        </footer>
    );
}