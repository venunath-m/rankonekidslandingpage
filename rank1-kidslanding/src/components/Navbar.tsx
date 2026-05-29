import logo from "../assets/logo.png";
import { Search } from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full flex justify-center pt-4">

            <div className="relative w-[92%] max-w-6xl h-16 bg-white rounded-full shadow-sm px-6 flex items-center">

                {/* CENTER LOGO */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-14 object-contain"
                    />
                </div>

                {/* RIGHT */}
                <div className="ml-auto flex items-center">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                        <Search size={18} className="text-gray-700" />
                    </button>
                </div>

            </div>
        </header>
    );
}