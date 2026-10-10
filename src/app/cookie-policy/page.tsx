import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Cookie, Shield, Settings, Sliders, 
  HelpCircle, Mail, ArrowRight, CheckCircle2, Info
} from "lucide-react";

export const metadata = {
  title: "Cookie Policy | JO Talent Partners",
  description: "Understand how JO Talent Partners uses cookies and web technologies to ensure security, improve performance, and enhance visitor experience.",
};

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      name: "Strictly Necessary Cookies",
      badge: "Always Active",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      desc: "These cookies are fundamental for the operation of our website and cannot be disabled. They support core security features, form session management, CSRF protection, and page routing.",
      examples: [
        { name: "__session_sec", purpose: "Maintains secure browsing sessions and prevents cross-site request forgery", duration: "Session" },
        { name: "cf_clearance", purpose: "Cloudflare security verification against automated bot attacks", duration: "1 Year" }
      ]
    },
    {
      name: "Performance & Analytical Cookies",
      badge: "Optional / Analytical",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      desc: "These cookies help us understand how visitors interact with our website by gathering anonymous telemetry data. They enable us to optimize page load speeds, diagnose broken links, and identify popular resources.",
      examples: [
        { name: "_ga, _gid", purpose: "Google Analytics identifiers to compute aggregate anonymous traffic insights", duration: "2 Years" },
        { name: "_gat", purpose: "Throttles analytics request rates to maintain high server throughput", duration: "1 Minute" }
      ]
    },
    {
      name: "Functional & Preference Cookies",
      badge: "User Experience",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      desc: "These cookies remember your preferences (such as selected language, regional interface settings, or pre-filled form fields) to deliver a streamlined and personalized experience during return visits.",
      examples: [
        { name: "pref_lang", purpose: "Remembers language and regional locale preferences across visits", duration: "6 Months" },
        { name: "form_state", purpose: "Retains quote form selections temporarily if refreshed", duration: "Session" }
      ]
    }
  ];

  const sections = [
    {
      id: "what-are-cookies",
      title: "1. What Are Cookies and Web Beacons?",
      content: [
        "A cookie is a small data text file placed on your computer, tablet, or smartphone when you visit a website. Cookies are widely utilized by digital enterprises to ensure website stability, remember visitor settings, enhance security, and deliver business insights.",
        "Cookies can be 'Session Cookies' (which expire automatically when you close your web browser) or 'Persistent Cookies' (which remain on your device until they reach an expiration date or you manually delete them)."
      ]
    },
    {
      id: "how-we-use",
      title: "2. Why JO Talent Partners Uses Cookies",
      content: [
        "We utilize cookies and related technologies strictly to:",
        "• Enable smooth, secure navigation across our global workforce platform and service directories.",
        "• Ensure forms (such as contact messages, quote requests, and candidate submissions) submit accurately without transmission loss.",
        "• Measure website responsiveness and page delivery speeds to continuously refine our user experience.",
        "• Safeguard our web infrastructure against spam, malicious traffic, and unauthorized intrusions."
      ]
    },
    {
      id: "third-parties",
      title: "3. Third-Party Web Technologies",
      content: [
        "In certain sections of our website, we may utilize trusted third-party analytical and performance tools (such as Google Analytics and content delivery networks).",
        "These third parties may configure their own analytical cookies on your device. These external services are governed exclusively by their respective privacy and cookie policies, and JO Talent Partners does not sell or share any personally identifiable data with them."
      ]
    },
    {
      id: "managing-cookies",
      title: "4. How You Can Control and Disable Cookies",
      content: [
        "You hold complete sovereignty over your cookie settings. Most web browsers accept cookies by default, but you can adjust your browser settings to decline, alert you before receiving, or delete cookies at any time.",
        "To modify your browser settings, refer to the official guides provided by your browser developer:",
        "• Google Chrome: Settings > Privacy and Security > Cookies and other site data",
        "• Apple Safari: Preferences > Privacy > Block all cookies",
        "• Mozilla Firefox: Options > Privacy & Security > Cookies and Site Data",
        "• Microsoft Edge: Settings > Cookies and site permissions > Manage and delete cookies",
        "Please note: If you choose to disable strictly necessary cookies, certain functions and interactive forms on this website may not operate as intended."
      ]
    },
    {
      id: "policy-revisions",
      title: "5. Updates to this Cookie Policy",
      content: [
        "We may amend this Cookie Policy from time to time to accommodate new web features, browser technology standards, or regulatory guidelines.",
        "The latest revision date displayed at the top of this document will always indicate when changes took effect."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#C8E1FA] selection:text-[#151B28] text-[#151B28]">
      <Navbar active="legal" />

      {/* HEADER BANNER */}
      <section className="pt-32 sm:pt-36 pb-16 px-4 sm:px-6 bg-[#C8E1FA] relative overflow-hidden">
        <div className="max-w-[1040px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white text-xs font-bold text-[#1E5D9B] mb-4 shadow-xs">
            <Cookie className="w-3.5 h-3.5" /> TRANSPARENT BROWSING EXPERIENCE
          </div>
          <h1 className="text-[38px] sm:text-[54px] md:text-[62px] font-black tracking-tight text-[#151B28] leading-[1.1] mb-4">
            Cookie Policy
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#334155] max-w-[680px] mx-auto leading-relaxed">
            How we utilize cookies, web analytical tags, and session technologies to ensure a fast, reliable, and secure browsing experience.
          </p>
          <div className="mt-4 text-xs font-semibold text-gray-500">
            Last Updated: October 2026 • Global Cookie Standard
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1040px] mx-auto">
        
        {/* COOKIE TYPES CARDS WITH DETAILED EXAMPLES */}
        <div className="mb-14">
          <h2 className="text-2xl font-black text-[#151B28] mb-6 tracking-tight">
            Categories of Cookies We Use
          </h2>
          <div className="space-y-6">
            {cookieTypes.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#151B28]/10 shadow-xs hover:border-[#151B28]/20 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h3 className="text-xl font-black text-[#151B28]">
                    {cat.name}
                  </h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cat.badgeBg}`}>
                    {cat.badge}
                  </span>
                </div>
                <p className="text-[15px] text-[#475569] leading-relaxed mb-6">
                  {cat.desc}
                </p>

                {/* Table Breakdown */}
                <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-[#FAF7F2]">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider bg-white">
                        <th className="py-3 px-4">Cookie Identifier</th>
                        <th className="py-3 px-4">Primary Purpose</th>
                        <th className="py-3 px-4">Lifespan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-medium text-[#151B28]">
                      {cat.examples.map((item, eIdx) => (
                        <tr key={eIdx}>
                          <td className="py-3 px-4 font-mono font-bold text-blue-600">{item.name}</td>
                          <td className="py-3 px-4 text-gray-600">{item.purpose}</td>
                          <td className="py-3 px-4 text-gray-500 font-semibold">{item.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION CARDS */}
        <div className="space-y-8">
          {sections.map((sec) => (
            <div 
              key={sec.id}
              id={sec.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#151B28]/10 shadow-xs hover:border-[#151B28]/20 transition-all"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#151B28] mb-4 tracking-tight">
                {sec.title}
              </h2>
              <div className="space-y-3.5 text-[15px] sm:text-base text-[#475569] leading-relaxed font-normal">
                {sec.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* QUESTIONS CONTACT BOX */}
        <div className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-[#151B28]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-1">
              Privacy & Cookie Inquiries
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-[#151B28]">
              Have Questions About Our Cookie Usage?
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Contact our compliance team at <span className="font-semibold text-[#151B28]">info@jotalentpartners.com.ng</span>
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#151B28] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 shrink-0"
          >
            Contact Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      <Footer />
    </div>
  );
}
