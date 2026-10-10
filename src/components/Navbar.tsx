import React from "react";
import Link from "next/link";

interface NavbarProps {
  active?: "home" | "about" | "services" | "contact" | "legal" | string;
}

export default function Navbar({ active = "" }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#C8E1FA]/90 backdrop-blur-md transition-all duration-300 border-b border-[#151B28]/10">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-4 relative">
        <Link href="/" className="text-2xl font-black tracking-tight text-[#151B28]">
          jotalent<span className="text-[#3B82F6]">.</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#151B28]/80 absolute left-1/2 -translate-x-1/2">
          <Link 
            href="/" 
            className={active === "home" ? "text-[#151B28] font-bold border-b-2 border-[#151B28] pb-0.5" : "hover:text-black transition-colors"}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={active === "about" ? "text-[#151B28] font-bold border-b-2 border-[#151B28] pb-0.5" : "hover:text-black transition-colors"}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={active === "services" ? "text-[#151B28] font-bold border-b-2 border-[#151B28] pb-0.5" : "hover:text-black transition-colors"}
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className={active === "contact" ? "text-[#151B28] font-bold border-b-2 border-[#151B28] pb-0.5" : "hover:text-black transition-colors"}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-5 text-[14px] font-semibold">
          <Link 
            href="/contact" 
            className="bg-[#151B28] text-white px-5 py-2.5 rounded-full hover:bg-black transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
          >
            Get Quotes
          </Link>
        </div>
      </div>
    </nav>
  );
}
