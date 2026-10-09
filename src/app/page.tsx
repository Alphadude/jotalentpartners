import { 
  ArrowRight, CheckCircle2, Globe, FileCheck2, Users, Briefcase, 
  Activity, Target, Shield, DollarSign, Award, ChevronRight,
  Building2, Sparkles, Check, Star, Lock, MapPin
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#C8E1FA] selection:text-[#151B28] text-[#151B28] overflow-x-hidden">
      
      {/* 1. TOP NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#C8E1FA]/90 backdrop-blur-md transition-all duration-300 border-b border-[#151B28]/10">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-4 relative">
          <Link href="/" className="text-2xl font-black tracking-tight text-[#151B28]">
            jotalent<span className="text-[#3B82F6]">.</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#151B28]/80 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-[#151B28] font-bold border-b-2 border-[#151B28] pb-0.5">Home</Link>
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/services" className="hover:text-black transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-5 text-[14px] font-semibold">
            <Link href="/contact" className="bg-[#151B28] text-white px-5 py-2.5 rounded-full hover:bg-black transition-all duration-200 shadow-sm hover:scale-105 active:scale-95">
              Get Quotes
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 sm:pt-36 pb-20 px-4 sm:px-6 relative overflow-hidden bg-[#C8E1FA]">
        {/* Subtle curved background graphic */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-[#1E5D9B] rounded-t-full opacity-10 pointer-events-none z-0"></div>
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#1A4F8A] rounded-full opacity-15 pointer-events-none z-0"></div>

        <div className="max-w-[840px] mx-auto z-10 relative text-center">
          <h1 className="text-[44px] sm:text-[68px] md:text-[84px] font-black tracking-tight text-[#151B28] leading-[1.05] mb-6">
            <span className="bg-white px-5 sm:px-6 py-1 inline-block rounded-2xl shadow-sm mb-2 text-[#151B28]">Hiring</span> <br />
            for global teams
          </h1>
          <p className="text-[16px] sm:text-[19px] md:text-[20px] text-[#334155] mb-8 sm:mb-10 max-w-[680px] mx-auto leading-relaxed font-normal">
            JO Talent Partners helps companies expand globally with unmatched speed, flexibility, and compliance. Get our all-in-one Global People Platform that simplifies the way you onboard, offboard, and everything else in between.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-[#151B28] text-white px-8 py-3.5 sm:py-4 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
              Get started
            </Link>
          </div>
        </div>

        {/* HERO GRAPHIC MOCKUP - Responsive on all screen sizes */}
        <div className="w-full max-w-[1140px] mx-auto mt-14 sm:mt-20 relative z-20">
           
           {/* Desktop & Tablet Graphical View */}
           <div className="relative min-h-[500px] hidden md:block">
              {/* Center Table Card */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[520px] lg:w-[560px] bg-white rounded-2xl shadow-2xl border border-white/80 p-6 z-20">
                 <div className="flex justify-between items-center mb-6">
                    <div>
                       <h3 className="font-bold text-[#151B28] text-[16px]">Acme Inc.</h3>
                       <p className="text-xs text-gray-500">Payroll overview</p>
                    </div>
                    <div className="border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-600 flex items-center gap-1 font-medium bg-gray-50">
                       This month <ChevronRight className="w-3 h-3 rotate-90" />
                    </div>
                 </div>
                 <div className="grid grid-cols-5 text-[11px] text-gray-400 font-bold mb-3 uppercase tracking-wider text-right">
                    <div className="text-left col-span-2">WAGES</div>
                    <div>TAXES</div>
                    <div>BENEFITS</div>
                    <div>BONUSES</div>
                 </div>
                 <div className="space-y-3.5">
                    {[
                      { name: "Alex Chen", avatar: "AC", wages: "$21,460.00", taxes: "$1,578.00", ben: "$1,578.00", bonus: "$940.00", bg: "bg-blue-600" },
                      { name: "Elena Rostova", avatar: "ER", wages: "$32,800.00", taxes: "$3,640.00", ben: "$3,640.00", bonus: "$1,456.00", bg: "bg-amber-600" },
                      { name: "Marcus Brody", avatar: "MB", wages: "$24,800.00", taxes: "$2,420.00", ben: "$2,420.00", bonus: "$1,820.00", bg: "bg-emerald-600" }
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-5 items-center text-[13px] font-medium text-[#151B28] text-right">
                         <div className="flex items-center gap-3 col-span-2 text-left">
                            <div className={`w-8 h-8 rounded-full ${row.bg} text-white flex items-center justify-center text-xs font-bold shrink-0`}>{row.avatar}</div>
                            <span className="font-semibold text-xs truncate">{row.name}</span>
                         </div>
                         <div className="text-gray-600 text-xs">{row.wages}</div>
                         <div className="text-gray-600 text-xs">{row.taxes}</div>
                         <div className="text-gray-600 text-xs">{row.bonus}</div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Left Floating Card - Benefits */}
              <div className="absolute left-0 lg:left-[2%] top-[6%] w-[210px] bg-white rounded-2xl shadow-xl border border-white/80 p-5 z-10">
                 <div className="flex justify-between items-center mb-1">
                    <h4 className="text-xs font-bold text-gray-500">Benefits</h4>
                    <span className="text-[10px] text-gray-400 font-medium">This year ∨</span>
                 </div>
                 <p className="text-2xl font-black text-[#151B28] mb-4 tracking-tight">$98,320</p>
                 <div className="flex items-end gap-2.5 h-16">
                    <div className="w-full bg-[#FCE588] rounded-t-lg h-[40%]"></div>
                    <div className="w-full bg-[#FCD855] rounded-t-lg h-[65%]"></div>
                    <div className="w-full bg-[#FCCB24] rounded-t-lg h-[85%]"></div>
                    <div className="w-full bg-[#F5B800] rounded-t-lg h-[100%]"></div>
                 </div>
              </div>

              {/* Floating Gold Coins */}
              <div className="absolute left-[2%] lg:left-[5%] bottom-[12%] flex items-center gap-2 z-30">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 border-4 border-yellow-200 shadow-xl flex items-center justify-center text-white font-extrabold text-2xl rotate-[-12deg]">
                    $
                 </div>
                 <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 border-2 border-yellow-200 shadow-lg flex items-center justify-center text-white font-bold text-lg rotate-[15deg]">
                    €
                 </div>
              </div>

              {/* Right Floating Card - Visas & Active Teams */}
              <div className="absolute right-0 lg:right-[2%] top-[4%] w-[220px] bg-white rounded-2xl shadow-xl border border-white/80 p-6 z-10 text-center">
                 <div className="flex justify-between items-center mb-3">
                    <h4 className="text-[11px] font-extrabold text-[#15803D] tracking-wider">ACTIVE VISAS</h4>
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white">
                       <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                 </div>
                 <p className="text-6xl font-black text-[#151B28] mb-5 tracking-tight">260</p>
                 <div className="flex justify-center -space-x-1.5">
                    <span className="text-xl">🇺🇸</span>
                    <span className="text-xl">🇬🇧</span>
                    <span className="text-xl">🇩🇪</span>
                    <span className="text-xl">🇳🇬</span>
                    <span className="text-xl">🇪🇸</span>
                 </div>
              </div>

              {/* Yellow Map Pin Graphic */}
              <div className="absolute right-[4%] lg:right-[6%] bottom-[15%] z-30">
                 <div className="w-14 h-16 bg-[#F5B800] rounded-t-full rounded-b-md flex items-center justify-center shadow-xl rotate-[10deg] border-2 border-white">
                    <div className="w-6 h-6 rounded-full bg-[#151B28]"></div>
                 </div>
              </div>

              {/* Bottom Left Floating Signature Pill */}
              <div className="absolute left-[16%] lg:left-[20%] bottom-[4%] bg-white rounded-2xl shadow-xl border border-gray-100 p-3.5 flex items-center gap-4 z-30">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    SJ
                 </div>
                 <div>
                    <div className="h-5 w-24 border-b-2 border-dashed border-gray-400 font-serif italic text-sm text-gray-700">
                       Sarah Jenkins
                    </div>
                    <div className="w-24 h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                       <div className="w-[60%] h-full bg-emerald-500 rounded-full"></div>
                    </div>
                 </div>
                 <span className="text-[11px] font-bold text-gray-400 mt-5">3/5</span>
              </div>

              {/* Bottom Right Floating Salaries Pill */}
              <div className="absolute right-[16%] lg:right-[20%] bottom-[6%] bg-white rounded-full shadow-2xl border border-gray-100 py-2.5 px-4 flex items-center gap-4 z-30">
                 <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100 text-xs font-semibold">
                    <span>🇪🇸</span>
                    <span>Spain</span>
                    <ChevronRight className="w-3 h-3 rotate-90" />
                 </div>
                 <div className="flex flex-col text-left">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                       SALARIES <span className="text-emerald-600 font-extrabold">+7.2%</span>
                    </div>
                    <div className="text-sm font-black text-[#151B28]">€290,820</div>
                 </div>
                 <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    +3
                 </div>
              </div>
           </div>

           {/* Mobile View Graphic Layout */}
           <div className="block md:hidden space-y-4">
              <div className="bg-white rounded-2xl shadow-xl border border-white/80 p-5">
                 <div className="flex justify-between items-center mb-4">
                    <div>
                       <h3 className="font-bold text-[#151B28] text-base">Acme Inc.</h3>
                       <p className="text-xs text-gray-500">Workforce Overview</p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">Active</span>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm border-b pb-2">
                       <span className="font-semibold">Alex Chen (Lead Dev)</span>
                       <span className="font-bold text-blue-600">$21,460</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b pb-2">
                       <span className="font-semibold">Elena Rostova (Designer)</span>
                       <span className="font-bold text-blue-600">$32,800</span>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                    <div className="text-xs text-gray-500 font-bold">ACTIVE VISAS</div>
                    <div className="text-3xl font-black text-[#151B28] my-1">260</div>
                    <div className="text-xs text-emerald-600 font-semibold">100% Compliant</div>
                 </div>
                 <div className="bg-white rounded-2xl p-4 shadow-md text-center">
                    <div className="text-xs text-gray-500 font-bold">PAYROLL</div>
                    <div className="text-2xl font-black text-[#151B28] my-1">$98.3K</div>
                    <div className="text-xs text-gray-500">Annual Benefits</div>
                 </div>
              </div>
           </div>

        </div>

        {/* LOGO STRIP SECTION */}
        <div className="max-w-[1240px] mx-auto mt-16 pt-8 border-t border-[#151B28]/10 text-center relative z-10">
           <p className="text-xs font-bold tracking-widest text-[#151B28]/60 mb-8 uppercase">
              TRUSTED BY 25,000+ COMPANIES FROM STARTUPS TO ENTERPRISE
           </p>
           <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-xl sm:text-2xl font-black tracking-tighter">shopify</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight">Klarna.</span>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight">reddit</span>
              <span className="text-xl sm:text-2xl font-black italic tracking-widest">NIKE</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight">_zapier</span>
              <span className="text-xl sm:text-2xl font-bold">nu</span>
              <span className="text-xl sm:text-2xl font-serif font-black italic">Revolut</span>
              <span className="text-lg sm:text-xl font-bold tracking-widest">FOREVER 21</span>
              <span className="text-xl sm:text-2xl font-extrabold">Red Bull</span>
              <span className="text-lg sm:text-xl font-light tracking-widest">Calvin Klein</span>
              <span className="text-xl sm:text-2xl font-bold">INTERCOM</span>
           </div>
        </div>
      </section>

      {/* 3. SECTION 2: SPLIT FEATURE ("Hire globally with zero entity and zero stress") */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-4">
              EOR / GLOBAL HR
            </span>
            <h2 className="text-[34px] sm:text-[46px] md:text-[50px] font-black tracking-tight text-[#151B28] leading-[1.1] mb-6">
              Hire globally with zero entity and zero stress
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[19px] text-[#555A64] leading-relaxed mb-8">
              Hire employees and contractors in 150+ countries without the cost and complexity of setting up local entities. JO Talent Partners acts as the Employer of Record, taking on all legal compliance, localized contracts, minimum wage laws, benefits, and taxes.
            </p>
            <Link href="/contact" className="bg-[#151B28] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold hover:bg-black transition-all inline-flex items-center gap-2">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <div className="bg-gradient-to-tr from-amber-100 to-orange-50 rounded-3xl p-6 shadow-xl border border-black/5 w-full max-w-[280px] h-[340px] flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                   <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-bold text-lg text-[#151B28]">Global Contractors</h4>
                <p className="text-xs text-gray-600 mt-1">Hire in 150+ countries with localized agreements and instant withdrawals.</p>
             </div>
             <div className="bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-3xl p-6 shadow-xl border border-black/5 w-full max-w-[280px] h-[340px] flex flex-col justify-end sm:translate-y-8">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                   <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg text-[#151B28]">Full-Time EOR</h4>
                <p className="text-xs text-gray-600 mt-1">Onboard permanent team members anywhere with competitive local benefits.</p>
             </div>
          </div>
        </div>

        {/* 3 Metric Badges */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-black/5">
           <p className="text-xs font-bold uppercase tracking-wider text-gray-400 text-center mb-10">
              Our platform in figures & numbers
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 shadow-sm">
                    <Globe className="w-8 h-8" />
                 </div>
                 <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-[#151B28] mb-1">500K+</h3>
                 <p className="text-sm font-semibold text-gray-500">Team members managed worldwide</p>
              </div>

              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4 shadow-sm">
                    <Shield className="w-8 h-8" />
                 </div>
                 <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-[#151B28] mb-1">25K+</h3>
                 <p className="text-sm font-semibold text-gray-500">Active businesses supported</p>
              </div>

              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shadow-sm">
                    <DollarSign className="w-8 h-8" />
                 </div>
                 <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-[#151B28] mb-1">$10B+</h3>
                 <p className="text-sm font-semibold text-gray-500">Annual payroll processed smoothly</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. SECTION 3: BENTO GRID ("All-in-one Global People Platform") */}
      <section id="platform" className="py-20 sm:py-28 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-black tracking-tight text-[#151B28] leading-[1.1] mb-5">
            JO Talent Partners is your all-in-one Global People Platform
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600">
            Consolidate your entire HR stack with dedicated tools built for modern high-growth teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: EOR / Outsourcing (Warm Apricot) */}
          <div className="bg-[#FFF0E1] rounded-3xl p-6 sm:p-8 lg:col-span-2 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="bg-white/80 text-xs font-bold px-3 py-1 rounded-full">Full-time</span>
                <span className="bg-white/80 text-xs font-bold px-3 py-1 rounded-full">Contractors</span>
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-extrabold tracking-tight text-[#151B28] mb-3">
                Hire full-time employees anywhere with EOR
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-700 max-w-lg mb-6 leading-relaxed">
                Hire internationally in minutes without establishing costly foreign entities. JO Talent Partners handles contracts, compliance, localized benefits, and payroll.
              </p>
            </div>

            {/* Mockup table */}
            <div className="bg-white rounded-2xl p-4 shadow-md border border-black/5 overflow-x-auto">
              <div className="flex justify-between items-center text-xs text-gray-400 font-bold mb-3 uppercase min-w-[340px]">
                <span>Employee</span>
                <span>Country</span>
                <span>Role</span>
                <span>Status</span>
              </div>
              <div className="space-y-3 min-w-[340px]">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span>Marcus Vance</span>
                  <span>🇩🇪 Germany</span>
                  <span className="text-gray-500">Senior Engineer</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 rounded-full font-bold">Active</span>
                </div>
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span>Chloe Laurent</span>
                  <span>🇫🇷 France</span>
                  <span className="text-gray-500">Product Designer</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 rounded-full font-bold">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Onboarding & Workflows (Soft Blue) */}
          <div className="bg-[#E2F1FE] rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="bg-white/80 text-xs font-bold px-3 py-1 rounded-full">Apps</span>
                <span className="bg-white/80 text-xs font-bold px-3 py-1 rounded-full">Equipment</span>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold tracking-tight text-[#151B28] mb-3">
                Automate onboarding & global HR workflows
              </h3>
              <p className="text-[14px] text-gray-700 mb-6 leading-relaxed">
                Set up new hires in under 5 minutes with automated document collection and local equipment delivery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md text-center">
              <div className="text-xs font-bold text-gray-400 uppercase mb-2">Workforce Growth</div>
              <div className="flex items-end justify-center gap-3 h-20">
                <div className="w-8 bg-blue-300 rounded-t-md h-[40%]"></div>
                <div className="w-8 bg-blue-400 rounded-t-md h-[60%]"></div>
                <div className="w-8 bg-blue-500 rounded-t-md h-[80%]"></div>
                <div className="w-8 bg-blue-600 rounded-t-md h-[100%]"></div>
              </div>
            </div>
          </div>

          {/* Card 3: Global Payroll (Powder Blue) */}
          <div className="bg-[#EBF5FE] rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold tracking-tight text-[#151B28] mb-3">
                Run global payroll in 150+ currencies in 1 click
              </h3>
              <p className="text-[14px] text-gray-700 mb-6 leading-relaxed">
                Pay your entire global team in their local currency with automated tax calculations and one consolidated invoice.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="text-xs text-gray-400 font-bold mb-1">Total Scheduled Payout</div>
              <div className="text-2xl font-black text-[#151B28] mb-3">$412,890.00</div>
              <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-600 h-full w-[80%]"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Contractor Management (Soft Cream) */}
          <div className="bg-[#FFF8E7] rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold tracking-tight text-[#151B28] mb-3">
                Keep your contractors happy and compliant
              </h3>
              <p className="text-[14px] text-gray-700 mb-6 leading-relaxed">
                Generate bulletproof contracts, collect local tax forms, and provide flexible withdrawal methods.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs">
                  DK
                </div>
                <div>
                  <div className="text-sm font-bold">David Kim</div>
                  <div className="text-xs text-gray-400">Invoice #2041 • Paid</div>
                </div>
              </div>
              <div className="text-emerald-600 font-extrabold text-sm">$4,200</div>
            </div>
          </div>

          {/* Card 5: Centralized HR policies & compliance (Warm Golden Yellow) */}
          <div className="bg-[#FDE9B4] rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold tracking-tight text-[#151B28] mb-3">
                Centralized HR policies & compliance
              </h3>
              <p className="text-[14px] text-gray-700 mb-6 leading-relaxed">
                Automate policy distribution, handbook acknowledgments, and risk audits with zero paperwork.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>Labor Law 2026</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1"><Check className="w-3 h-3" /> Compliant</span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>IP Protection Signed</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1"><Check className="w-3 h-3" /> Verified</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: COMPLIANCE HUB (Black Container) */}
      <section id="compliance" className="py-12 px-3 sm:px-6 md:px-8">
        <div className="bg-[#121316] text-white rounded-[2.5rem] sm:rounded-[3rem] py-16 sm:py-24 px-6 md:px-14 relative overflow-hidden">
          
          <div className="max-w-[800px] mx-auto text-center mb-16 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full inline-block mb-4">
              COMPLIANCE & LEGAL
            </span>
            <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-black tracking-tight mb-6 leading-[1.1]">
              Lead with confidence on Compliance with the JO Compliance Hub
            </h2>
            <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed mb-8">
              Constantly changing local regulations shouldn&apos;t slow you down. Our platform monitors labor laws in 150+ countries so you never fail an audit.
            </p>
            <Link href="/contact" className="bg-white text-black px-8 py-3.5 rounded-full text-[15px] font-bold hover:bg-gray-100 transition-all inline-block">
              Explore Compliance
            </Link>
          </div>

          {/* 3 Featured Dark Cards */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-[1140px] mx-auto mb-20 sm:mb-28">
            <div className="bg-[#1F2024] p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Worker Classification</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Assess independent contractor vs employee risk with localized legal frameworks and avoid costly misclassification penalties.
              </p>
            </div>

            <div className="bg-[#1F2024] p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance Monitor</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Receive proactive alerts whenever statutory leaves, minimum wage rates, or payroll taxes change in your employees&apos; regions.
              </p>
            </div>

            <div className="bg-[#1F2024] p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Document Vault</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Store KYC, employment agreements, and intellectual property assignments in one compliant, encrypted global repository.
              </p>
            </div>
          </div>

          {/* Secondary Sub-grid: "Hire, manage, and pay all in one place" */}
          <div className="border-t border-white/10 pt-16 sm:pt-20 max-w-[1140px] mx-auto">
             <div className="text-center max-w-[600px] mx-auto mb-14">
               <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Hire, manage, and pay all in one place</h3>
               <p className="text-gray-400 text-sm">Everything your international workforce needs, integrated into a unified portal.</p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { title: "Global Employment (EOR)", desc: "Hire full-time employees in 150+ countries with local entity support." },
                  { title: "Contractor Management", desc: "Automate agreements, invoices, and compliant tax collection." },
                  { title: "Global Payroll & Tax", desc: "Pay all team members on time in their native currencies seamlessly." },
                  { title: "HRIS & People Management", desc: "Track PTO, employee records, promotions, and 1-on-1s effortlessly." },
                  { title: "Immigration & Visas", desc: "Sponsor work visas for international employees in 25+ key countries." },
                  { title: "Background Checks", desc: "Screen criminal records and verify credentials in just a few clicks." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white mt-1">
                        <Check className="w-4 h-4" />
                     </div>
                     <div>
                        <h4 className="font-bold text-base text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION 5: GLOBAL COVERAGE - ILLUSTRATED SECTION */}
      <section className="py-6 sm:py-10 px-3 sm:px-6 md:px-8">
        <div className="bg-[#FAE77C] text-[#151B28] rounded-[2.5rem] sm:rounded-[3rem] pt-12 sm:pt-16 md:pt-20 pb-0 px-6 sm:px-12 md:px-16 relative overflow-hidden shadow-sm">
          
          {/* Header & Copy Content */}
          <div className="max-w-[540px] md:max-w-[580px] lg:max-w-[620px] relative z-20 mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#151B28] inline-block mb-3 sm:mb-4">
              GLOBAL COVERAGE
            </span>
            <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-black tracking-tight leading-[1.05] text-[#151B28] mb-4 sm:mb-5">
              There&apos;s a whole world out<br className="hidden sm:inline" /> there. Why not hire anywhere?
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#2D3139] leading-relaxed mb-6 max-w-lg font-normal">
              120+ entities. 200+ local legal experts. Global from day one. Tap into the most extensive coverage on the market, and start hiring, onboarding, and paying anywhere.
            </p>
            <Link 
              href="/contact" 
              className="bg-[#151B28] text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-[14px] sm:text-[15px] font-bold hover:bg-black transition-all inline-block shadow-md hover:scale-105 active:scale-95"
            >
              Get started
            </Link>
          </div>

          {/* High-Resolution Global Coverage Illustration */}
          <div className="relative w-full overflow-hidden -mx-6 sm:-mx-12 md:-mx-16 -mt-16 sm:-mt-28 md:-mt-48 lg:-mt-64 xl:-mt-72 pointer-events-none">
            <Image 
              src="/global-coverage.png" 
              alt="Global coverage illustration" 
              width={1024}
              height={694}
              priority
              className="w-full h-auto object-cover object-bottom select-none"
            />
          </div>

        </div>
      </section>

      {/* 7. SECTION 6: CASE STUDY & TESTIMONIAL SHOWCASE */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-black tracking-tight text-[#151B28] leading-[1.1] mb-6">
            We&apos;ve helped 25,000+ companies grow and manage global teams
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
             <button className="bg-[#151B28] text-white px-5 py-2 rounded-full text-xs font-bold">Technology</button>
             <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-50">E-Commerce</button>
             <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-50">Fintech</button>
             <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-50">Healthcare</button>
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-black/5 grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
           <div className="bg-gradient-to-tr from-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white min-h-[280px] sm:min-h-[320px] flex flex-col justify-between">
              <div>
                 <span className="text-xs uppercase tracking-widest font-bold text-blue-400">FEATURED PARTNER</span>
                 <h4 className="text-2xl font-bold mt-2">NextWave Logistics</h4>
              </div>
              <div>
                 <p className="text-sm text-gray-300 italic mb-4 leading-relaxed">
                   &ldquo;JO Talent Partners helped us hire across 18 countries in less than 90 days. Their compliance speed is truly unbeatable.&rdquo;
                 </p>
                 <div className="text-xs font-bold">Liam Ortiz • Head of Global People</div>
              </div>
           </div>

           <div className="space-y-6">
              <div>
                 <div className="text-4xl sm:text-5xl font-black text-[#151B28] mb-1">5,000+</div>
                 <p className="text-sm font-semibold text-gray-500">Employees successfully onboarded with zero compliance incidents.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                 <div className="text-3xl sm:text-4xl font-black text-emerald-600 mb-1">99.8%</div>
                 <p className="text-sm font-semibold text-gray-500">On-time payroll satisfaction across multi-currency payouts.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 8. SECTION 7: HOW TO GET STARTED (3 EASY STEPS) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 max-w-[1140px] mx-auto">
         <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-black tracking-tight text-[#151B28] leading-[1.1] mb-4">
               Get started with JO in three easy steps
            </h2>
            <p className="text-gray-600 text-base">
               You could be onboarding your first international team member this week.
            </p>
         </div>

         <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="space-y-8">
               <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#151B28] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <div>
                     <h4 className="font-bold text-lg text-[#151B28] mb-1">Book a consultation</h4>
                     <p className="text-sm text-gray-600">Tell us your hiring roadmap and target markets. We design a custom compliance blueprint.</p>
                  </div>
               </div>

               <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#151B28] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <div>
                     <h4 className="font-bold text-lg text-[#151B28] mb-1">Create localized contracts</h4>
                     <p className="text-sm text-gray-600">Generate country-specific agreements in minutes with vetted legal clauses.</p>
                  </div>
               </div>

               <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#151B28] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <div>
                     <h4 className="font-bold text-lg text-[#151B28] mb-1">Run global payroll & scale</h4>
                     <p className="text-sm text-gray-600">Pay your entire distributed team in one simple monthly invoice.</p>
                  </div>
               </div>

               <div className="pt-4">
                  <Link href="/contact" className="bg-[#151B28] text-white px-8 py-3.5 rounded-full text-[15px] font-bold hover:bg-black transition-all inline-block">
                     Get started now
                  </Link>
               </div>
            </div>

            {/* Stepper Graphic Card */}
            <div className="bg-[#FDE883] rounded-3xl p-6 sm:p-8 shadow-xl border border-black/5 flex flex-col justify-between min-h-[280px]">
               <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider bg-black/10 px-3 py-1 rounded-full">Automated Setup</span>
                  <Sparkles className="w-5 h-5 text-[#151B28]" />
               </div>
               <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                     <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-[#151B28]">Team onboarded in 48 hours!</h4>
                  <p className="text-xs text-gray-500 mt-1">Contracts executed • Tax forms gathered • Ready for payroll</p>
               </div>
            </div>
         </div>
      </section>

      {/* 9. SECTION 8: REVIEWS & TRUST STRIP */}
      <section className="bg-[#121316] text-white py-14 px-4 sm:px-6 border-b border-white/10">
         <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
               <div className="flex justify-center text-yellow-400 gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />)}
               </div>
               <div className="font-black text-base sm:text-lg">4.8 / 5 on G2</div>
               <div className="text-xs text-gray-400">Based on 2,400+ reviews</div>
            </div>
            <div>
               <div className="flex justify-center text-yellow-400 gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />)}
               </div>
               <div className="font-black text-base sm:text-lg">4.9 / 5 Trustpilot</div>
               <div className="text-xs text-gray-400">Top-rated Global HR Provider</div>
            </div>
            <div>
               <div className="flex justify-center text-yellow-400 gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />)}
               </div>
               <div className="font-black text-base sm:text-lg">4.8 / 5 Capterra</div>
               <div className="text-xs text-gray-400">Ease of use & compliance</div>
            </div>
            <div>
               <div className="flex justify-center text-yellow-400 gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />)}
               </div>
               <div className="font-black text-base sm:text-lg">99.9% Uptime</div>
               <div className="text-xs text-gray-400">Enterprise grade reliability</div>
            </div>
         </div>
      </section>

      {/* 10. SECTION 9: FOOTER */}
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
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/about#values" className="hover:text-white transition-colors">Core Values</Link></li>
                  <li><Link href="mailto:info@jotalentpartners.com.ng" className="hover:text-white transition-colors">Direct Email</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 text-white/90 text-sm mb-6 cursor-pointer hover:text-white select-none inline-flex">
            <Globe className="w-4 h-4 text-white" />
            <span>English</span>
          </div>

          {/* Bottom Row Divider & Links */}
          <div className="border-t border-[#2C2E33] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between text-[12px] text-[#86878B] gap-4">
            <p>© Copyright 2026 JO Talent Partners. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
