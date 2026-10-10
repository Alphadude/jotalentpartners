import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E2024] text-[#A1A1A6] pt-16 pb-12 border-t border-[#2C2E33]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          
          {/* Logo & Social Links */}
          <div className="md:col-span-5 flex flex-col justify-between items-start space-y-6">
            <div>
              <Link href="/" className="text-2xl font-black tracking-tight text-white inline-block mb-4">
                jotalent<span className="text-[#3B82F6]">.</span>
              </Link>
              <p className="text-[14px] text-[#A1A1A6] max-w-[340px] leading-relaxed">
                JO Talent Partners is a human resource consulting firm dedicated to helping businesses build strong, compliant, and productive work environments.
              </p>
            </div>

            {/* Social Icons in circular badges */}
            <div className="flex items-center gap-3">
              <Link href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-[#2B2D31] hover:bg-[#383A40] text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#2B2D31] hover:bg-[#383A40] text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.65 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.66c0-.91-.74-1.65-1.65-1.65z" />
                </svg>
              </Link>

              <Link href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#2B2D31] hover:bg-[#383A40] text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </Link>

              <Link href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#2B2D31] hover:bg-[#383A40] text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* How it works */}
            <div>
              <h4 className="text-[15px] font-semibold text-white mb-6">How it works</h4>
              <ul className="space-y-4 text-[14px] text-[#A1A1A6]">
                <li><Link href="/" className="hover:text-white transition-colors">Hire Employees</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Hire Contractors</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Run Global Payroll</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">HR Advisory</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Business Growth</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-[15px] font-semibold text-white mb-6">Solutions</h4>
              <ul className="space-y-4 text-[14px] text-[#A1A1A6]">
                <li><Link href="/services" className="hover:text-white transition-colors">Compliance</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Strategy & Planning</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Culture Transformation</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Policy Development</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Payroll Processing</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Insurance Advisory</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[15px] font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-[14px] text-[#A1A1A6]">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
                <li><Link href="/about#values" className="hover:text-white transition-colors">Core Values</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-2 text-white/90 text-sm mb-6 cursor-pointer hover:text-white select-none inline-flex">
          <Globe className="w-4 h-4 text-white" />
          <span>English</span>
        </div>

        {/* Bottom Row Divider & Connected Legal Policy Links */}
        <div className="border-t border-[#2C2E33] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between text-[12px] text-[#86878B] gap-4">
          <p>© Copyright 2026 JO Talent Partners. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
