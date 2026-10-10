import React from "react";
import Link from "next/link";
import { 
  Building2, Sparkles, Shield, Target, 
  Layers, HeartHandshake, Award, ArrowRight, Check
} from "lucide-react";

interface WhyChooseUsProps {
  showCta?: boolean;
  className?: string;
}

export default function WhyChooseUs({ showCta = true, className = "" }: WhyChooseUsProps) {
  const reasons = [
    {
      num: "01",
      title: "We Understand Growing Businesses",
      desc: "We specialize in supporting startups and small to mid-sized businesses, providing practical HR solutions that fit your size, budget, and growth stage.",
      icon: Building2,
      badge: "Tailored For Scale",
      bg: "bg-[#FFF4EC]",
      border: "border-[#FDE3CF]",
      accentText: "text-[#D95F00]",
      badgeBg: "bg-[#FF7A00]/10 text-[#D95F00]",
      colSpan: "lg:col-span-2",
      pills: ["Startups & SMEs", "Budget-Aligned", "Growth-Stage Adaptability"]
    },
    {
      num: "02",
      title: "We Simplify HR for You",
      desc: "We take the complexity out of human resource management, giving you clear systems, processes, and guidance so you can focus on running your business.",
      icon: Sparkles,
      badge: "Clear & Streamlined",
      bg: "bg-[#EFF6FF]",
      border: "border-[#DBEAFE]",
      accentText: "text-[#1D4ED8]",
      badgeBg: "bg-[#2563EB]/10 text-[#1D4ED8]",
      colSpan: "lg:col-span-1",
      pills: ["Zero Confusion", "Streamlined Workflows"]
    },
    {
      num: "03",
      title: "We Are Compliance-Driven",
      desc: "We help you stay aligned with employment laws and best HR practices, reducing risks and protecting your business.",
      icon: Shield,
      badge: "Risk Mitigation",
      bg: "bg-[#F0FDF4]",
      border: "border-[#DCFCE7]",
      accentText: "text-[#15803D]",
      badgeBg: "bg-[#16A34A]/10 text-[#15803D]",
      colSpan: "lg:col-span-1",
      pills: ["Statutory Compliance", "Risk Shield"]
    },
    {
      num: "04",
      title: "We Focus on Real Results",
      desc: "Our solutions are not theoretical—we design HR systems that improve performance, strengthen teams, and support business growth.",
      icon: Target,
      badge: "Proven Outcomes",
      bg: "bg-[#FEFCE8]",
      border: "border-[#FEF08A]",
      accentText: "text-[#A16207]",
      badgeBg: "bg-[#CA8A04]/10 text-[#A16207]",
      colSpan: "lg:col-span-1",
      pills: ["Measurable KPIs", "High Performance"]
    },
    {
      num: "05",
      title: "We Offer Tailored Solutions",
      desc: "Every business is different. We don’t use one-size-fits-all approaches; we build HR systems that match your goals and culture.",
      icon: Layers,
      badge: "Custom Architecture",
      bg: "bg-[#FAF5FF]",
      border: "border-[#F3E8FF]",
      accentText: "text-[#7E22CE]",
      badgeBg: "bg-[#9333EA]/10 text-[#7E22CE]",
      colSpan: "lg:col-span-1",
      pills: ["Bespoke Systems", "Culture Fit"]
    },
    {
      num: "06",
      title: "We Are Your HR Partner",
      desc: "We don’t just provide services—we work with you as an extension of your team, offering continuous support and expert guidance.",
      icon: HeartHandshake,
      badge: "True Extension",
      bg: "bg-[#F0FDFA]",
      border: "border-[#CCFBF1]",
      accentText: "text-[#0F766E]",
      badgeBg: "bg-[#0D9488]/10 text-[#0F766E]",
      colSpan: "lg:col-span-1",
      pills: ["Dedicated Advisory", "Always Accessible"]
    },
    {
      num: "07",
      title: "We Build High-Performing Teams",
      desc: "From recruitment to talent management and compensation, we help you attract, develop, and retain the right people for long-term success.",
      icon: Award,
      badge: "End-to-End People Ops",
      bg: "bg-[#FFF8F0]",
      border: "border-[#FEEDDB]",
      accentText: "text-[#C2410C]",
      badgeBg: "bg-[#EA580C]/10 text-[#C2410C]",
      colSpan: "lg:col-span-2",
      pills: ["Talent Acquisition", "Retention Strategy", "Executive Compensation"]
    }
  ];

  return (
    <section id="why-choose-us" className={`py-20 sm:py-24 px-4 sm:px-6 max-w-[1240px] mx-auto ${className}`}>
      {/* SECTION HEADER */}
      <div className="text-center max-w-[760px] mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151B28]/5 text-xs font-bold text-[#151B28] tracking-wider uppercase mb-3">
          Why Businesses Trust Us
        </div>
        <h2 className="text-[34px] sm:text-[46px] md:text-[52px] font-black tracking-tight text-[#151B28] leading-[1.1] mb-5">
          Why Choose Us
        </h2>
        <p className="text-[17px] sm:text-[19px] text-[#475569] leading-relaxed font-normal">
          Choosing the right HR partner can make the difference between a struggling workforce and a thriving organization. Here’s why businesses trust us:
        </p>
      </div>

      {/* BENTO GRID (7 REASONS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {reasons.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.num}
              className={`${item.bg} ${item.border} ${item.colSpan} border rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}
            >
              <div>
                {/* Header row: Number badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-white/90 text-[#151B28] border border-black/5 shadow-xs">
                      {item.num}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-white/90 border border-black/5 flex items-center justify-center text-[#151B28] shadow-xs group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${item.accentText}`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-[26px] font-black text-[#151B28] mb-3 tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] sm:text-[16px] text-[#334155] leading-relaxed font-normal mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Feature Pills & Verification tag */}
              <div className="pt-5 border-t border-black/5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.pills.map((pill, pIdx) => (
                    <span 
                      key={pIdx}
                      className="text-[11px] font-semibold text-[#151B28]/70 bg-white/70 px-2.5 py-1 rounded-md border border-black/5"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Verified Benefit
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* OPTIONAL BOTTOM CTA CARD */}
      {showCta && (
        <div className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-[#151B28]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-[620px] text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black text-[#151B28] mb-2 tracking-tight">
              Ready to elevate your HR operations and workforce results?
            </h4>
            <p className="text-sm sm:text-base text-gray-600">
              Get in touch with our team today to discover tailored HR solutions built specifically for your business.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#151B28] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 shrink-0 text-sm sm:text-base"
          >
            Partner with us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
