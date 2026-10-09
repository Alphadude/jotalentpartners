import { 
  ArrowRight, CheckCircle2, Globe, FileCheck2, Users, Briefcase, 
  Activity, Target, Shield, Award, ChevronRight,
  Sparkles, Check, Star, Lock, MapPin, Mail, Phone,
  TrendingUp, BarChart3, Building2, Coins, Layers,
  Compass, HelpCircle, UserCheck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Services & Solutions | JO Talent Partners",
  description: "Comprehensive HR advisory, business consulting, payroll management, and workforce solutions tailored for growing enterprises.",
};

export default function ServicesPage() {
  const primaryPillars = [
    {
      title: "Strategy & Planning",
      badge: "Vision & Execution",
      desc: "We help define your vision and chart a strategic path forward. From market analysis to goal-setting, we turn ideas into structured, achievable plans.",
      icon: Target,
      bg: "bg-[#EFF6FF]",
      border: "border-[#DBEAFE]",
      iconBg: "bg-[#2563EB] text-white",
      points: [
        "Workforce capability analysis & forecasting",
        "Organizational restructuring & leadership alignment",
        "Market benchmarking & compensation frameworks"
      ]
    },
    {
      title: "Business Growth",
      badge: "Scale & Operations",
      desc: "Unlock the next stage of growth. We identify opportunities, streamline operations, and guide your business toward sustainable, long-term success.",
      icon: TrendingUp,
      bg: "bg-[#FEFCE8]",
      border: "border-[#FEF08A]",
      iconBg: "bg-[#CA8A04] text-white",
      points: [
        "End-to-end people operations optimization",
        "Rapid remote & on-premise talent scaling",
        "Performance management & retention structures"
      ]
    },
    {
      title: "Financial Advice & Payroll",
      badge: "Clarity & Returns",
      desc: "Make informed financial decisions with confidence. Our experts offer tailored advice on budgeting, investing, and managing resources effectively.",
      icon: Coins,
      bg: "bg-[#F0FDF4]",
      border: "border-[#DCFCE7]",
      iconBg: "bg-[#16A34A] text-white",
      points: [
        "Statutory payroll management & pension compliance",
        "Employee benefits & compensation architecture",
        "Tax advisory & cost-of-employment modeling"
      ]
    }
  ];

  const fullServices = [
    {
      title: "HR Advisory & Fractional Leadership",
      category: "Advisory",
      desc: "High-level strategic counsel for executive leadership. We step in as your on-demand HR department, steering talent roadmap, policies, and executive decision-making.",
      icon: Compass,
      accent: "text-blue-600",
      bg: "bg-blue-50/50"
    },
    {
      title: "Executive Recruitment & Sourcing",
      category: "Talent Acquisition",
      desc: "Attracting, screening, and securing exceptional talent across technical, financial, and executive leadership roles with industry-leading placement retention.",
      icon: Users,
      accent: "text-amber-600",
      bg: "bg-amber-50/50"
    },
    {
      title: "Policy Development & Handbooks",
      category: "Governance",
      desc: "Custom-drafted employee handbooks, remote work agreements, code-of-conduct manuals, and disciplinary protocols strictly conforming to national labor laws.",
      icon: FileCheck2,
      accent: "text-emerald-600",
      bg: "bg-emerald-50/50"
    },
    {
      title: "Culture & Organizational Transformation",
      category: "Culture",
      desc: "Workplace climate diagnostics, change management, employee wellness initiatives, and engagement programs that transform culture into competitive advantage.",
      icon: Sparkles,
      accent: "text-purple-600",
      bg: "bg-purple-50/50"
    },
    {
      title: "Automated Payroll Management",
      category: "Operations",
      desc: "Zero-error payroll processing, PAYE tax computation, pension remitments, health insurance allocations, and automated multi-currency worker disbursements.",
      icon: Activity,
      accent: "text-rose-600",
      bg: "bg-rose-50/50"
    },
    {
      title: "Labor Law Compliance & Risk Mitigation",
      category: "Compliance",
      desc: "Proactive compliance reviews protecting businesses from regulatory sanctions, labor union disputes, unfair dismissal claims, and statutory audit penalties.",
      icon: Shield,
      accent: "text-indigo-600",
      bg: "bg-indigo-50/50"
    },
    {
      title: "Learning & Leadership Development",
      category: "Upskilling",
      desc: "Curated training modules, executive coaching sessions, and supervisory skill development to build high-performance managers and future leaders.",
      icon: Award,
      accent: "text-teal-600",
      bg: "bg-teal-50/50"
    },
    {
      title: "Tax Management & Corporate Advisory",
      category: "Finance",
      desc: "Seamlessly navigate complex tax planning and statutory reporting with structured consultancy that maximizes deductions while maintaining pristine audit standing.",
      icon: BarChart3,
      accent: "text-cyan-600",
      bg: "bg-cyan-50/50"
    },
    {
      title: "Insurance & Risk Protection",
      category: "Security",
      desc: "Protect what matters most. Tailored corporate health, life, and workplace liability insurance packages designed for both growing businesses and key executives.",
      icon: Lock,
      accent: "text-amber-700",
      bg: "bg-orange-50/50"
    }
  ];

  const industryCases = [
    {
      sector: "Fintech & Financial Services",
      desc: "Assisting high-growth digital banks and fintech startups in scaling engineering teams while maintaining strict financial regulatory and anti-poaching compliance.",
      metric: "99.8%",
      metricLabel: "Audit Compliance Rating",
      tag: "Fintech"
    },
    {
      sector: "Retail & Consumer Commerce",
      desc: "Structuring distributed retail workforce operations, shift scheduling, performance incentives, and frontline staff onboarding across multiple regional outlets.",
      metric: "40%",
      metricLabel: "Reduction in Turnover",
      tag: "Retail"
    },
    {
      sector: "Global Trade & Logistics",
      desc: "Drafting cross-border employment policies, visa allocations, statutory customs logistics labor protocols, and remote contractor governance.",
      metric: "15+",
      metricLabel: "Cross-Border Territories",
      tag: "Logistics"
    },
    {
      sector: "Early-Stage to Scaleup Startups",
      desc: "Setting up the complete foundational people infrastructure: hiring the first 50 team members, establishing compensation bands, and instituting company handbooks.",
      metric: "14 Days",
      metricLabel: "Average Time-to-Onboard",
      tag: "Startups"
    }
  ];

  const advisors = [
    {
      name: "James Deo",
      role: "Chief Finance Officer",
      focus: "Fiscal planning, compensation benchmarking, and corporate tax advisory.",
      initials: "JD"
    },
    {
      name: "Gina Kennedy",
      role: "Marketing & Growth Director",
      focus: "Employer branding, talent acquisition strategy, and market expansion.",
      initials: "GK"
    },
    {
      name: "Dennis Norris",
      role: "Chief Administrator & Operations",
      focus: "People operations, workplace policy enforcement, and audit defense.",
      initials: "DN"
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
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/services" className="text-[#151B28] font-bold border-b-2 border-[#151B28] pb-0.5">Services</Link>
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

        <div className="max-w-[900px] mx-auto z-10 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white text-xs font-bold text-[#1E5D9B] mb-6 shadow-xs">
            <Briefcase className="w-3.5 h-3.5" /> ENTERPRISE HR & BUSINESS SERVICES
          </div>
          <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-black tracking-tight text-[#151B28] leading-[1.05] mb-6">
            <span className="bg-white px-5 sm:px-6 py-1 inline-block rounded-2xl shadow-sm mb-2 text-[#151B28]">Our Experience</span> <br className="hidden sm:inline" />
            Spans Every Industry
          </h1>
          <p className="text-[17px] sm:text-[20px] text-[#334155] mb-8 sm:mb-10 max-w-[720px] mx-auto leading-relaxed font-normal">
            From finance to retail, and from fast-moving startups to global trade, we’ve worked across sectors to create meaningful, measurable outcomes. Our work is shaped by real-world impact and a people-first approach.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/demo" className="bg-[#151B28] text-white px-8 py-4 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
              Get started with solutions
            </Link>
            <Link href="#pillars" className="bg-white/90 text-[#151B28] px-7 py-4 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-sm border border-black/5">
              Explore service suite
            </Link>
          </div>
        </div>

        {/* 3D GRAPHIC FLOW VISUAL */}
        <div className="w-full max-w-[1140px] mx-auto mt-14 sm:mt-18 relative z-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <div className="relative aspect-[16/9] w-full max-h-[560px]">
              <Image 
                src="/services-flow.jpg" 
                alt="JO Talent Partners Enterprise Service Architecture" 
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Left Badge */}
            <div className="hidden sm:flex absolute left-6 bottom-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80 items-center gap-3.5 z-30">
              <div className="w-10 h-10 rounded-xl bg-[#0284C7]/10 flex items-center justify-center text-[#0284C7] shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Industry Coverage</p>
                <p className="text-sm font-black text-[#151B28]">Finance • Retail • Startups • Global Trade</p>
              </div>
            </div>

            {/* Floating Right Badge */}
            <div className="hidden sm:flex absolute right-6 bottom-6 bg-[#151B28]/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 items-center gap-3.5 text-white z-30">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center text-[#34D399] shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Quality Guarantee</p>
                <p className="text-sm font-black text-white">Full-Spectrum Statutory Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE STRATEGIC PILLARS ("WE HELP TO GET SOLUTIONS!") */}
      <section id="pillars" className="py-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151B28]/5 text-xs font-bold text-[#151B28] tracking-wider uppercase mb-3">
            Strategic Foundations
          </div>
          <h2 className="text-[36px] sm:text-[48px] font-black tracking-tight text-[#151B28]">
            We Help to Get Solutions!
          </h2>
          <p className="text-[17px] text-[#475569] mt-3">
            Every business faces unique roadblocks. We combine high-level strategic foresight with ground-level execution to unlock clarity, growth, and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {primaryPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i} 
                className={`${pillar.bg} ${pillar.border} border rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 bg-white/90 rounded-full text-gray-600 border border-black/5">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#151B28] mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[15px] text-[#334155] leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-black/5">
                    {pillar.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-gray-700">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-black/5">
                  <Link href="/demo" className="text-sm font-bold text-[#151B28] group-hover:text-blue-600 flex items-center gap-1.5 transition-colors">
                    Learn more about this pillar <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. THE COMPLETE SERVICES SUITE (BENTO GRID) */}
      <section className="py-24 px-4 sm:px-6 bg-[#F4EFEB]/60 border-y border-[#151B28]/10">
        <div className="max-w-[1240px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-[680px]">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Our Capabilities</span>
              <h2 className="text-[34px] sm:text-[48px] font-black tracking-tight text-[#151B28] leading-[1.1]">
                Full-Spectrum HR & Advisory Suite
              </h2>
            </div>
            <p className="text-[16px] text-gray-600 max-w-[420px] leading-relaxed">
              Designed to serve modern enterprises through every phase: from initial startup incorporation to multi-country workforce scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-[#151B28]/10 shadow-xs hover:shadow-md hover:border-[#151B28]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${service.bg} flex items-center justify-center ${service.accent} group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-500 uppercase px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#151B28] mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-gray-400">Tailored Program</span>
                    <Link href="/demo" className="text-[#151B28] group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                      Inquire <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. COMPLETED CASES & INDUSTRY IMPACT */}
      <section className="py-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151B28]/5 text-xs font-bold text-[#151B28] tracking-wider uppercase mb-3">
            Proven Execution
          </div>
          <h2 className="text-[36px] sm:text-[48px] font-black tracking-tight text-[#151B28]">
            Completed Cases Across Key Industries
          </h2>
          <p className="text-[17px] text-[#475569] mt-3">
            Real impact across diverse sectors. Here is how our specialized talent and compliance models deliver tangible results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {industryCases.map((c, i) => (
            <div 
              key={i} 
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#151B28]/10 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-[#151B28]/5 text-[#151B28] rounded-full">
                    {c.tag}
                  </span>
                  <div className="text-right">
                    <p className="text-2xl sm:text-3xl font-black text-[#1E5D9B]">{c.metric}</p>
                    <p className="text-[11px] font-semibold text-gray-500 uppercase">{c.metricLabel}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#151B28] mb-3">
                  {c.sector}
                </h3>
                <p className="text-base text-[#475569] leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                <span>Verified Client Deployment</span>
                <span className="text-green-600 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 stroke-[3]" /> Case Resolved
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ADVISORS & SPECIALISTS */}
      <section className="py-24 px-4 sm:px-6 bg-white border-y border-[#151B28]/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[680px] mx-auto mb-16">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Our People</span>
            <h2 className="text-[34px] sm:text-[48px] font-black tracking-tight text-[#151B28]">
              Advisors &amp; Specialists
            </h2>
            <p className="text-[16px] sm:text-[18px] text-gray-600 mt-3 font-normal">
              Seasoned executive advisors and operational leaders dedicated to safeguarding your business and empowering your workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((adv, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#151B28]/10 text-center flex flex-col items-center justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="w-20 h-20 rounded-full bg-[#151B28] text-white flex items-center justify-center font-black text-2xl mb-6 mx-auto group-hover:scale-105 transition-transform shadow-md">
                    {adv.initials}
                  </div>
                  <h3 className="text-2xl font-black text-[#151B28] mb-1">
                    {adv.name}
                  </h3>
                  <p className="text-sm font-bold text-[#1E5D9B] mb-4">
                    {adv.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {adv.focus}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 w-full">
                  <span className="text-xs font-semibold text-gray-500">
                    Senior Partner Consultation Available
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS (FROM REAL WEBSITE) */}
      <section className="py-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151B28]/5 text-xs font-bold text-[#151B28] tracking-wider uppercase mb-3">
            Client Feedback
          </div>
          <h2 className="text-[36px] sm:text-[48px] font-black tracking-tight text-[#151B28]">
            Our Clients&apos; Reviews
          </h2>
          <p className="text-[17px] text-[#475569] mt-3">
            Client satisfaction is at the heart of everything we do. Over the years, we&apos;ve built strong relationships based on trust, results, and consistent support.
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

      {/* 8. APPLE / DEEL DARK ENTERPRISE MODULE */}
      <section className="py-12 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="bg-[#151B28] text-white rounded-[36px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3B82F6] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>

          <div className="max-w-[720px] mb-12 relative z-10">
            <span className="text-xs font-extrabold text-[#60A5FA] uppercase tracking-wider block mb-3">Service Guarantee</span>
            <h2 className="text-[34px] sm:text-[46px] font-black tracking-tight leading-[1.1] mb-6">
              Precision execution. <br />
              Zero compliance loopholes.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              When scaling across cities or borders, regulatory oversights can be costly. JO Talent Partners acts as your dedicated shield, delivering airtight contract drafting, statutory auditing, and proactive dispute resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="bg-[#1F2430] p-6 rounded-2xl border border-white/5">
              <Shield className="w-6 h-6 text-[#60A5FA] mb-4" />
              <h4 className="font-bold text-white text-base mb-1">Audit-Ready</h4>
              <p className="text-xs text-gray-400">Total compliance with national labor laws and statutory tax requirements.</p>
            </div>

            <div className="bg-[#1F2430] p-6 rounded-2xl border border-white/5">
              <Activity className="w-6 h-6 text-[#34D399] mb-4" />
              <h4 className="font-bold text-white text-base mb-1">On-Time Payroll</h4>
              <p className="text-xs text-gray-400">100% timely salary processing, pensions, tax remittances, and pay slips.</p>
            </div>

            <div className="bg-[#1F2430] p-6 rounded-2xl border border-white/5">
              <UserCheck className="w-6 h-6 text-[#FBBF24] mb-4" />
              <h4 className="font-bold text-white text-base mb-1">Verified Placements</h4>
              <p className="text-xs text-gray-400">Rigorous candidate vetting, background verification, and skills testing.</p>
            </div>

            <div className="bg-[#1F2430] p-6 rounded-2xl border border-white/5">
              <Building2 className="w-6 h-6 text-[#F472B6] mb-4" />
              <h4 className="font-bold text-white text-base mb-1">Corporate Protection</h4>
              <p className="text-xs text-gray-400">Protection against labor disputes, union negotiations, and severance risks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HEADQUARTERS & GET A QUOTE BANNER */}
      <section className="py-20 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="bg-white rounded-3xl border border-[#151B28]/10 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-[620px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
              Work With Us
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-[#151B28] tracking-tight">
              Ready to elevate your people operations and business growth?
            </h3>
            <p className="text-base text-gray-600">
              Tell us your organization&apos;s goals. Our senior partners will prepare a customized proposal addressing your exact staffing, payroll, and advisory needs.
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
                  <p className="text-[11px] font-bold text-gray-400 uppercase">Direct Email</p>
                  <p className="font-semibold text-xs">info@jotalentpartners.com.ng</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
            <Link 
              href="mailto:info@jotalentpartners.com.ng?subject=Inquiry%20regarding%20Services"
              className="bg-[#151B28] text-white px-8 py-4 rounded-full text-center text-sm font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2"
            >
              Request a Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/demo"
              className="bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-8 py-4 rounded-full text-center text-sm font-semibold hover:bg-[#DBEAFE] transition-all"
            >
              Book an Advisory Call
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
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
                  <li><Link href="/services" className="hover:text-white transition-colors text-white font-semibold">Services</Link></li>
                  <li><Link href="/services#pillars" className="hover:text-white transition-colors">Key Pillars</Link></li>
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
