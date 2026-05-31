
import logo from "../assets/logoHead.png";
import { Search,  Menu, } from "lucide-react";

export default function Navbar() {
   

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full">

                <div className="
                    w-full h-[72px] sm:h-[84px] lg:h-[96px]
                    px-4 sm:px-6 lg:px-8
                    flex items-center
                    bg-black/[0.07] backdrop-blur-[60px]
                    shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                    relative
                ">

                    {/* LEFT - Desktop Menu */}
                    
                    {/* CENTER LOGO */}
                    <div className="
                        absolute left-1/2 -translate-x-1/2
                        flex items-center
                    ">
                        <img
                            src={logo}
                            className="h-10 sm:h-12 lg:h-16 object-contain"
                            alt="Logo"
                        />
                    </div>

                    {/* RIGHT ICONS */}
                    <div className="ml-auto flex items-center gap-3">

                        {/* Search (desktop only) */}
                        <button className="hidden lg:flex w-11 h-11 items-center justify-center rounded-full hover:bg-white/10 transition">
                            <Search size={24} className="text-white" />
                        </button>

                        {/* Hamburger (mobile + tablet) */}
                        <button
                           
                            className="flex lg:hidden w-10 h-10 items-center justify-center rounded-full hover:bg-white/10"
                        >
                            <Menu className="text-white" />
                        </button>
                    </div>

                </div>
            </header>

            
        </>
    );
}