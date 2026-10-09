import { 
  ArrowRight, CheckCircle2, Globe, FileCheck2, Users, Briefcase, 
  Activity, Target, Shield, Award, ChevronRight,
  Sparkles, Check, Star, Lock, MapPin, Mail, Phone, HeartHandshake,
  Compass, TrendingUp, Lightbulb, Scale
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | JO Talent Partners",
  description: "Learn about JO Talent Partners - empowering businesses with tailored HR advisory, compliance, recruitment, and workforce transformation.",
};

export default function AboutPage() {
  const coreValues = [
    {
      num: "01",
      title: "People First",
      desc: "We believe people are the foundation of every successful business. We are committed to helping organizations attract, develop, and retain exceptional talent.",
      bg: "bg-[#FFF4EC]",
      border: "border-[#FDE3CF]",
      badgeBg: "bg-[#FF7A00]/10 text-[#D95F00]",
      icon: Users
    },
    {
      num: "02",
      title: "Excellence",
      desc: "We deliver high-quality HR solutions with professionalism, accuracy, and attention to detail, ensuring outstanding results for our clients.",
      bg: "bg-[#EFF6FF]",
      border: "border-[#DBEAFE]",
      badgeBg: "bg-[#2563EB]/10 text-[#1D4ED8]",
      icon: Award
    },
    {
      num: "03",
      title: "Integrity & Compliance",
      desc: "We uphold the highest ethical standards while ensuring our clients remain fully compliant with employment laws, regulations, and industry-leading HR practices.",
      bg: "bg-[#F0FDF4]",
      border: "border-[#DCFCE7]",
      badgeBg: "bg-[#16A34A]/10 text-[#15803D]",
      icon: Shield
    },
    {
      num: "04",
      title: "Partnership",
      desc: "We work as an extension of our clients' internal teams, building trusted relationships and providing personalized support that aligns directly with strategic business objectives.",
      bg: "bg-[#FAF5FF]",
      border: "border-[#F3E8FF]",
      badgeBg: "bg-[#9333EA]/10 text-[#7E22CE]",
      icon: HeartHandshake
    },
    {
      num: "05",
      title: "Growth & Innovation",
      desc: "We embrace continuous learning, innovation, and strategic foresight to help businesses build scalable workforce models that foster long-term sustainable growth.",
      bg: "bg-[#FEFCE8]",
      border: "border-[#FEF08A]",
      badgeBg: "bg-[#CA8A04]/10 text-[#A16207]",
      icon: Lightbulb
    },
    {
      num: "06",
      title: "Accountability",
      desc: "We take full ownership of our commitments and deliver measurable, trackable outcomes that create real economic value for both our clients and their employees.",
      bg: "bg-[#F4F9F8]",
      border: "border-[#D7EBE7]",
      badgeBg: "bg-[#0D9488]/10 text-[#0F766E]",
      icon: Scale
    },
    {
      num: "07",
      title: "Empowerment",
      desc: "We equip forward-thinking businesses with the tools, knowledge, and actionable HR strategies required to make informed decisions and build vibrant workplaces.",
      bg: "bg-[#FFF8F0]",
      border: "border-[#FEEDDB]",
      badgeBg: "bg-[#EA580C]/10 text-[#C2410C]",
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      quote: "Exceptional service from start to finish. The team was attentive, knowledgeable, and always went the extra mile to ensure our human resources and compliance needs were met with perfection.",
      author: "Austin Smith",
      role: "Operations Manager",
      rating: 5
    },
    {
      quote: "They brought remarkable clarity and direction to our project. Their collaborative approach, deep regulatory knowledge, and strategic insight made a tangible difference in our team growth.",
      author: "Jones Rods",
      role: "Founder & CEO",
      rating: 5
    },
    {
      quote: "Reliable, responsive, and consistently results-driven. We've worked with many service providers across the region, but this team truly stands out for their professionalism and warmth.",
      author: "Alina Lora",
      role: "Board Chairman",
      rating: 5
    }
  ];

  const solutions = [
    {
      title: "HR Advisory & Strategy",
      desc: "Strategic guidance for workforce planning, restructuring, organizational health, and executive talent strategy.",
      icon: Target,
      tag: "Strategy"
    },
    {
      title: "Policy Development & Handbooks",
      desc: "Custom-crafted workplace policies and compliance handbooks aligned with regional and statutory labor standards.",
      icon: FileCheck2,
      tag: "Compliance"
    },
    {
      title: "Talent Management & Acquisition",
      desc: "End-to-end executive search, talent sourcing, performance evaluations, and employee retention architectures.",
      icon: Users,
      tag: "Talent"
    },
    {
      title: "Learning & Organizational Culture",
      desc: "Transformative workshops, leadership training, and culture transformation programs tailored for high-growth teams.",
      icon: Sparkles,
      tag: "Transformation"
    },
    {
      title: "Payroll Management",
      desc: "Reliable, automated payroll operations, statutory tax compliance, pension deductions, and error-free wage disbursements.",
      icon: Activity,
      tag: "Operations"
    },
    {
      title: "Labor Compliance & Risk Support",
      desc: "Proactive legal and regulatory alignment to protect your business against employment disputes and penalties.",
      icon: Shield,
      tag: "Governance"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#C8E1FA] selection:text-[#151B28] text-[#151B28] overflow-x-hidden">
      
      {/* 1. TOP NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#C8E1FA]/90 backdrop-blur-md transition-all duration-300 border-b border-[#151B28]/10">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-4 relative">
          <Link href="/" className="text-2xl font-black tracking-tight text-[#151B28]">
            jotalent<span className="text-[#3B82F6]">.</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#151B28]/80 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="text-[#151B28] font-bold border-b-2 border-[#151B28] pb-0.5">About</Link>
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

        <div className="max-w-[880px] mx-auto z-10 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white text-xs font-bold text-[#1E5D9B] mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> ABOUT JO TALENT PARTNERS
          </div>
          <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-black tracking-tight text-[#151B28] leading-[1.05] mb-6">
            <span className="bg-white px-5 sm:px-6 py-1 inline-block rounded-2xl shadow-sm mb-2 text-[#151B28]">Our Strength</span> <br className="hidden sm:inline" />
            Is Our Community
          </h1>
          <p className="text-[17px] sm:text-[20px] text-[#334155] mb-8 sm:mb-10 max-w-[700px] mx-auto leading-relaxed font-normal">
            True strength comes from unity. When individuals and businesses work together toward a shared vision, incredible things happen. We are proud to build a network of support, collaboration, and lasting global impact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/demo" className="bg-[#151B28] text-white px-8 py-4 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
              Partner with us
            </Link>
            <Link href="#story" className="bg-white/90 text-[#151B28] px-7 py-4 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-sm border border-black/5">
              Read our story
            </Link>
          </div>
        </div>

        {/* HERO EDITORIAL SHOWCASE WITH HIGH-RES IMAGE & FLOATING METRIC CARDS */}
        <div className="w-full max-w-[1140px] mx-auto mt-14 sm:mt-18 relative z-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <div className="relative aspect-[16/9] w-full max-h-[560px]">
              <Image 
                src="/about-team.jpg" 
                alt="JO Talent Partners Team Collaboration" 
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Left Floating Badge */}
            <div className="hidden sm:flex absolute left-6 bottom-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80 items-center gap-3.5 z-30">
              <div className="w-10 h-10 rounded-xl bg-[#0284C7]/10 flex items-center justify-center text-[#0284C7] shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Track Record</p>
                <p className="text-sm font-black text-[#151B28]">100+ Enterprise Projects Completed</p>
              </div>
            </div>

            {/* Right Floating Badge */}
            <div className="hidden sm:flex absolute right-6 bottom-6 bg-[#151B28]/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 items-center gap-3.5 text-white z-30">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center text-[#34D399] shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Governance</p>
                <p className="text-sm font-black text-white">100% Labor Law Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE & COMPANY OVERVIEW */}
      <section id="story" className="py-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151B28]/5 text-xs font-bold text-[#151B28] tracking-wider uppercase">
              Who We Are
            </div>
            <h2 className="text-[36px] sm:text-[46px] font-black tracking-tight text-[#151B28] leading-[1.1]">
              About JO Talent Partner
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[#475569] leading-relaxed">
              <strong className="text-[#151B28] font-semibold">JO Talent Partners</strong> is a premier human resource consulting firm dedicated to helping businesses build strong, compliant, and productive work environments.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#475569] leading-relaxed">
              We offer tailored HR solutions including HR advisory, culture transformation, recruitment, learning & development, talent management, payroll management, policy development, and labor compliance support.
            </p>
            <div className="p-6 rounded-2xl bg-[#E8F1FC] border border-[#BFDBFE] space-y-2">
              <p className="text-[16px] font-semibold text-[#1E3A8A]">
                &ldquo;With a passion for people and performance, we help businesses focus on their exponential growth while we expertly handle their people operations.&rdquo;
              </p>
            </div>

            {/* Quick Location & Verified Status */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#334155] font-semibold bg-white px-4 py-2.5 rounded-xl border border-[#E2E8F0] shadow-xs">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                18 Ramoni St, Surulere, Lagos
              </div>
              <div className="flex items-center gap-2 text-sm text-[#334155] font-semibold bg-white px-4 py-2.5 rounded-xl border border-[#E2E8F0] shadow-xs">
                <Globe className="w-4 h-4 text-[#16A34A]" />
                Operating Regionally & Internationally
              </div>
            </div>
          </div>

          {/* Right Column: Bento Stats Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#151B28]/10 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#C8E1FA] flex items-center justify-center text-[#1E5D9B] font-black text-lg mb-6">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <p className="text-4xl sm:text-5xl font-black text-[#151B28] tracking-tight mb-2">100+</p>
              <p className="text-sm font-bold text-[#151B28]">Projects Completed</p>
              <p className="text-xs text-gray-500 mt-1">Full-lifecycle HR advisory & system deployments.</p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#151B28]/10 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#FDE68A] flex items-center justify-center text-[#B45309] font-black text-lg mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <p className="text-4xl sm:text-5xl font-black text-[#151B28] tracking-tight mb-2">50+</p>
              <p className="text-sm font-bold text-[#151B28]">Active Corporate Clients</p>
              <p className="text-xs text-gray-500 mt-1">High-growth startups and established enterprises.</p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#151B28]/10 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#BBF7D0] flex items-center justify-center text-[#15803D] font-black text-lg mb-6">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-4xl sm:text-5xl font-black text-[#151B28] tracking-tight mb-2">25+</p>
              <p className="text-sm font-bold text-[#151B28]">HR Consultants & Experts</p>
              <p className="text-xs text-gray-500 mt-1">Specialized in labor law, payroll, and culture.</p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#151B28]/10 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E9D5FF] flex items-center justify-center text-[#7E22CE] font-black text-lg mb-6">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-4xl sm:text-5xl font-black text-[#151B28] tracking-tight mb-2">100%</p>
              <p className="text-sm font-bold text-[#151B28]">Compliance Record</p>
              <p className="text-xs text-gray-500 mt-1">Total audit security and regulatory assurance.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. VISION AND MISSION (APPLE / DEEL BENTO CARDS) */}
      <section className="py-20 px-4 sm:px-6 bg-[#F4EFEB]/60 border-y border-[#151B28]/5">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[680px] mx-auto mb-16">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Strategic Purpose</span>
            <h2 className="text-[34px] sm:text-[48px] font-black tracking-tight text-[#151B28]">
              Vision and Mission
            </h2>
            <p className="text-[16px] sm:text-[18px] text-gray-600 mt-3 font-normal">
              Empowering organizations to build sustainable, compliant, and thriving workforces that drive long-term business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#151B28]/10 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#3B82F6]/50 transition-all">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#C8E1FA]/40 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] font-bold text-xs uppercase tracking-wide mb-6">
                  <Compass className="w-4 h-4" /> Vision Statement
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#151B28] leading-snug mb-6">
                  Leading the workplace transformation for growing businesses.
                </h3>
                <p className="text-lg text-[#334155] leading-relaxed font-medium">
                  &ldquo;To be the leading HR partner for growing businesses, empowering them to build strong, compliant, and high-performing teams that drive long-term success and workplace transformation.&rdquo;
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-semibold">
                <span>Core Pillar: High-Performing Teams</span>
                <span className="text-[#3B82F6] flex items-center gap-1 font-bold">Future-Ready <ChevronRight className="w-3.5 h-3.5" /></span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#151B28]/10 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#10B981]/50 transition-all">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#DCFCE7]/50 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold text-xs uppercase tracking-wide mb-6">
                  <Target className="w-4 h-4" /> Mission Statement
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#151B28] leading-snug mb-6">
                  Simplifying HR through guidance and strategic agility.
                </h3>
                <p className="text-lg text-[#334155] leading-relaxed font-medium">
                  &ldquo;Our mission is to simplify HR through expert guidance and strategic solutions that help businesses build strong teams, stay compliant, and grow with confidence.&rdquo;
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-semibold">
                <span>Core Pillar: Regulatory Confidence</span>
                <span className="text-[#15803D] flex items-center gap-1 font-bold">Action-Oriented <ChevronRight className="w-3.5 h-3.5" /></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR CORE VALUES (7 CARDS BENTO GRID) */}
      <section className="py-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151B28]/5 text-xs font-bold text-[#151B28] tracking-wider uppercase mb-3">
            Guiding Principles
          </div>
          <h2 className="text-[36px] sm:text-[48px] font-black tracking-tight text-[#151B28]">
            Our Core Values
          </h2>
          <p className="text-[17px] text-[#475569] mt-3">
            The foundation of everything we do. These seven guiding values steer our relationships with clients, our advisory standards, and our workplace culture.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            const isSpan = idx === 0 || idx === 6; // Make first and last cards prominent
            return (
              <div 
                key={val.num}
                className={`${val.bg} ${val.border} border rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
                  isSpan ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${val.badgeBg}`}>
                      {val.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/80 border border-black/5 flex items-center justify-center text-[#151B28] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-[#151B28] mb-3 tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-[15px] text-[#334155] leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" /> Uncompromising Standard
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 6. BUSINESS & HR SOLUTIONS SUITE */}
      <section className="py-24 px-4 sm:px-6 bg-white border-y border-[#151B28]/10">
        <div className="max-w-[1240px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-[640px]">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Our Capabilities</span>
              <h2 className="text-[34px] sm:text-[46px] font-black tracking-tight text-[#151B28] leading-[1.1]">
                End-to-End Solutions for Growing Businesses
              </h2>
            </div>
            <p className="text-[16px] text-gray-600 max-w-[420px] leading-relaxed">
              From day-to-day administrative support to high-level strategic transformation, we cover every dimension of your organization’s people operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#151B28]/10 hover:border-[#151B28]/30 transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#151B28]/10 flex items-center justify-center text-[#151B28] group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-6 h-6 text-[#1E5D9B]" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase px-2.5 py-1 rounded-md bg-white border border-gray-200">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#151B28] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Business Advisory Banner */}
          <div className="mt-10 p-8 sm:p-10 rounded-3xl bg-[#C8E1FA]/40 border border-[#93C5FD] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block mb-1">Extended Strategic Advisory</span>
              <h4 className="text-xl sm:text-2xl font-black text-[#151B28]">
                Insurance, Risk Management, Tax & Statutory Consultancy
              </h4>
              <p className="text-sm text-[#334155] mt-1 max-w-[620px]">
                Protect what matters most. Our specialized corporate partners provide risk advisory, comprehensive insurance solutions, and expert statutory tax planning.
              </p>
            </div>
            <Link href="/demo" className="shrink-0 bg-[#151B28] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-black transition-all">
              Inquire About Advisory
            </Link>
          </div>

        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS (FROM REAL WEBSITE) */}
      <section className="py-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151B28]/5 text-xs font-bold text-[#151B28] tracking-wider uppercase mb-3">
            Real Impact
          </div>
          <h2 className="text-[36px] sm:text-[48px] font-black tracking-tight text-[#151B28]">
            Our Clients&apos; Reviews
          </h2>
          <p className="text-[17px] text-[#475569] mt-3">
            Client satisfaction is at the heart of everything we do. Over the years, we&apos;ve built enduring partnerships based on trust, measurable results, and consistent operational support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-[#151B28]/10 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[16px] text-[#334155] leading-relaxed font-normal mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#151B28] text-white flex items-center justify-center font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#151B28] text-sm">{t.author}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. APPLE / DEEL DARK CULTURE MODULE */}
      <section className="py-12 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="bg-[#151B28] text-white rounded-[36px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3B82F6] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>

          <div className="max-w-[700px] mb-12 relative z-10">
            <span className="text-xs font-extrabold text-[#60A5FA] uppercase tracking-wider block mb-3">Our Operating Standard</span>
            <h2 className="text-[34px] sm:text-[46px] font-black tracking-tight leading-[1.1] mb-6">
              Rooted in Lagos. <br />
              Trusted by global teams.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We bring deep local regulatory insight paired with world-class operational governance. Whether managing ten employees or hundreds across border lines, our infrastructure guarantees seamless continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="bg-[#1F2430] p-6 rounded-2xl border border-white/5">
              <Lock className="w-6 h-6 text-[#60A5FA] mb-4" />
              <h4 className="font-bold text-white text-base mb-1">Complete Legal Shield</h4>
              <p className="text-xs text-gray-400">Total compliance with statutory labor laws and tax filing requirements.</p>
            </div>

            <div className="bg-[#1F2430] p-6 rounded-2xl border border-white/5">
              <Sparkles className="w-6 h-6 text-[#FBBF24] mb-4" />
              <h4 className="font-bold text-white text-base mb-1">Culture Transformation</h4>
              <p className="text-xs text-gray-400">Building workplace cultures where high performance and wellbeing thrive together.</p>
            </div>

            <div className="bg-[#1F2430] p-6 rounded-2xl border border-white/5">
              <Activity className="w-6 h-6 text-[#34D399] mb-4" />
              <h4 className="font-bold text-white text-base mb-1">Seamless Payroll</h4>
              <p className="text-xs text-gray-400">Zero-error wage calculation, benefit distribution, and tax deductions.</p>
            </div>

            <div className="bg-[#1F2430] p-6 rounded-2xl border border-white/5">
              <Users className="w-6 h-6 text-[#F472B6] mb-4" />
              <h4 className="font-bold text-white text-base mb-1">Dedicated HR Partners</h4>
              <p className="text-xs text-gray-400">Direct access to experienced consultants who understand your industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HEADQUARTERS & CONTACT BANNER */}
      <section className="py-20 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="bg-white rounded-3xl border border-[#151B28]/10 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-[600px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
              Get In Touch
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-[#151B28] tracking-tight">
              Ready to simplify your HR and build a winning team?
            </h3>
            <p className="text-base text-gray-600">
              Speak with our senior HR consultants today. We will review your current workforce needs and craft a tailored roadmap.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#151B28]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-gray-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase">Headquarters</p>
                  <p className="font-semibold text-xs">18 Ramoni St, Surulere, Lagos</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#151B28]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-gray-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase">Email Us</p>
                  <p className="font-semibold text-xs">info@jotalentpartners.com.ng</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
            <Link 
              href="mailto:info@jotalentpartners.com.ng"
              className="bg-[#151B28] text-white px-8 py-4 rounded-full text-center text-sm font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2"
            >
              Contact Our Consultants <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/demo"
              className="bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-8 py-4 rounded-full text-center text-sm font-semibold hover:bg-[#DBEAFE] transition-all"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FOOTER (EXACT THEMED DESIGN SYSTEM) */}
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
                  <li><Link href="/" className="hover:text-white transition-colors">HR Advisory</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Talent Solutions</Link></li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-[15px] font-semibold text-white mb-6">Solutions</h4>
                <ul className="space-y-4 text-[14px] text-[#A1A1A6]">
                  <li><Link href="/" className="hover:text-white transition-colors">Compliance</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Recruitment</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Culture Transformation</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Policy Development</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Learning & Dev</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Insurance Advisory</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-[15px] font-semibold text-white mb-6">Company</h4>
                <ul className="space-y-4 text-[14px] text-[#A1A1A6]">
                  <li><Link href="/about" className="hover:text-white transition-colors text-white font-semibold">About Us</Link></li>
                  <li><Link href="/about#story" className="hover:text-white transition-colors">Our Story</Link></li>
                  <li><Link href="/about#vision" className="hover:text-white transition-colors">Vision & Mission</Link></li>
                  <li><Link href="/about#values" className="hover:text-white transition-colors">Core Values</Link></li>
                  <li><Link href="mailto:info@jotalentpartners.com.ng" className="hover:text-white transition-colors">Contact</Link></li>
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
