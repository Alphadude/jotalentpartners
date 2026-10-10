import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  AlertTriangle, ShieldCheck, FileText, Scale, 
  HelpCircle, Mail, ArrowRight, ExternalLink, CheckCircle2 
} from "lucide-react";

export const metadata = {
  title: "Disclaimer | JO Talent Partners",
  description: "Legal disclaimer regarding human resource advisory, regulatory compliance information, and operational consulting provided by JO Talent Partners.",
};

export default function DisclaimerPage() {
  const sections = [
    {
      id: "general-information",
      title: "1. General Informational Nature",
      content: [
        "The information, tools, insights, and publications presented on this website (jotalentpartners.com.ng) and affiliated digital channels are provided strictly for general informational, educational, and operational guidance purposes.",
        "While JO Talent Partners endeavors to keep all content current, accurate, and reflective of modern human resources management standards, we make no express or implied representations or warranties regarding the absolute completeness, reliability, or applicability of any website materials to your specific enterprise without a formal engagement."
      ]
    },
    {
      id: "no-legal-counsel",
      title: "2. No Legal or Formal Statutory Counsel",
      content: [
        "JO Talent Partners is a professional human resources consultancy firm specializing in workforce advisory, recruitment, talent operations, payroll administration, and workplace culture development.",
        "Unless expressly formalized through a specific, fully executed Service Level Agreement (SLA), nothing on this website constitutes formal legal opinion, statutory legal representation, or certified accounting/tax advice. While our solutions are compliance-driven and designed in alignment with prevailing labor codes and statutory standards, organizations facing complex employment litigation, tribunal disputes, or specific tax audits should consult licensed legal counsel and certified tax practitioners."
      ]
    },
    {
      id: "regulatory-changes",
      title: "3. Dynamic Labor Laws & Statutory Updates",
      content: [
        "Employment regulations, statutory deductions (PAYE, pension remittances, social insurance), and immigration requirements in Nigeria and international jurisdictions evolve continually.",
        "JO Talent Partners does not guarantee that every legislative update or statutory amendment is immediately reflected on our website in real time. We strongly advise scheduling a personalized advisory session with our consultants before implementing major workforce reorganizations or statutory payroll transitions."
      ]
    },
    {
      id: "limitation-of-liability",
      title: "4. Limitation of Professional Liability",
      content: [
        "To the maximum extent permitted by applicable law, JO Talent Partners, its partners, directors, advisors, and agents shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the access, use, or inability to use this website, or reliance upon any informational content posted herein.",
        "Any decisions made by a visitor or business entity based solely on general articles, guides, or website copy without our individualized written assessment are made at their sole discretion and risk."
      ]
    },
    {
      id: "third-party-links",
      title: "5. Third-Party Websites & External Resources",
      content: [
        "This website may feature links or references to external websites, government portals, regulatory agencies, or third-party enterprise tools for visitor convenience.",
        "JO Talent Partners exercises no control over the content, privacy practices, or accuracy of third-party platforms. The inclusion of external hyperlinks does not imply an endorsement, affiliation, or verification of their published data."
      ]
    },
    {
      id: "formal-engagement",
      title: "6. Formal Client Engagement Protocol",
      content: [
        "Browsing this website, submitting an inquiry via our contact form, or receiving marketing communications does not create an official client-consultant or advisory relationship.",
        "A binding engagement commences only when both parties execute a mutual Service Level Agreement detailing clear scopes of work, deliverables, confidentiality covenants, and compensation terms."
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
            <Scale className="w-3.5 h-3.5" /> LEGAL & ADVISORY NOTICE
          </div>
          <h1 className="text-[38px] sm:text-[54px] md:text-[62px] font-black tracking-tight text-[#151B28] leading-[1.1] mb-4">
            Disclaimer
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#334155] max-w-[680px] mx-auto leading-relaxed">
            Important legal clarifications regarding our human resource advisory services, compliance guidance, and website content.
          </p>
          <div className="mt-4 text-xs font-semibold text-gray-500">
            Last Updated: October 2026 • Official Version 2.4
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1040px] mx-auto">
        
        {/* IMPORTANT NOTICE CALLOUT */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#FFF4EC] border border-[#FDE3CF] flex items-start gap-5 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/20 flex items-center justify-center shrink-0 text-[#D95F00]">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#151B28] mb-1.5">
              Notice Regarding Human Resource Advisory
            </h3>
            <p className="text-sm sm:text-[15px] text-[#334155] leading-relaxed">
              The solutions, articles, and insights published by JO Talent Partners are designed to assist growing businesses in structuring effective human resources frameworks. However, every enterprise possesses unique requirements. Please consult directly with our advisory specialists or your legal counsel before making binding statutory decisions.
            </p>
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

        {/* LEGAL QUESTIONS CONTACT BOX */}
        <div className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-[#151B28]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Questions Regarding This Disclaimer?
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-[#151B28]">
              Reach our Legal & Governance Desk
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Contact our team directly at <span className="font-semibold text-[#151B28]">info@jotalentpartners.com.ng</span>
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#151B28] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 shrink-0"
          >
            Contact Governance Desk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      <Footer />
    </div>
  );
}
