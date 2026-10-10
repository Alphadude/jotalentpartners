import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Shield, Lock, Eye, FileText, CheckCircle2, 
  UserCheck, Server, Globe, Mail, ArrowRight, Database
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | JO Talent Partners",
  description: "Learn how JO Talent Partners collects, uses, protects, and manages personal data in compliance with NDPR, NDPA, and international data protection standards.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction & Overview",
      content: [
        "At JO Talent Partners ('we', 'us', 'our'), safeguarding your privacy and protecting the confidentiality of your personal and corporate information is a core commitment.",
        "This Privacy Policy outlines how we collect, process, store, and protect data provided by clients, prospective employees, job applicants, and visitors when accessing our website (jotalentpartners.com.ng) or utilizing our human resource management, recruitment, advisory, and payroll services.",
        "We adhere strictly to the Nigeria Data Protection Act (NDPA 2023), Nigeria Data Protection Regulation (NDPR), and globally accepted principles of data confidentiality and fair processing."
      ]
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content: [
        "Depending on how you interact with our platform, we collect the following categories of information:",
        "• Client Contact & Business Details: Name, corporate email address, telephone number, company name, industry, company size, and specific workforce requirements submitted via our contact and quote forms.",
        "• Talent & Candidate Profiles: Resumes/CVs, employment history, academic qualifications, references, certifications, language proficiency, and compensation expectations provided during recruitment processes.",
        "• Operational & Payroll Information: For clients engaging our fractional HR and payroll solutions, we process relevant statutory personnel data (e.g., tax identification numbers, pension beneficiary details, bank account information for salary disbursement).",
        "• Technical & Automated Data: IP addresses, browser types, operating systems, referring URLs, pages visited, and interaction timestamps collected via cookies and analytical web tools."
      ]
    },
    {
      id: "how-we-use-data",
      title: "3. How We Use Your Information",
      content: [
        "We utilize collected data strictly for legitimate operational, contractual, and business purposes, including:",
        "• Delivering HR advisory, workplace audits, fractional people operations, and executive search services.",
        "• Evaluating job applicants, conducting pre-employment screenings, and matching qualified talent with client career opportunities.",
        "• Administering statutory payroll, tax withholdings (PAYE), and pension remitments in full alignment with national labor standards.",
        "• Responding to client inquiries, providing customized service quotations, and sending operational notifications.",
        "• Improving our website interface, platform performance, and security mechanisms against unauthorized intrusion."
      ]
    },
    {
      id: "data-sharing",
      title: "4. Information Sharing & Third Parties",
      content: [
        "JO Talent Partners maintains a strict zero-tolerance policy against selling, renting, or leasing personal data to third-party advertisers or marketers.",
        "We only share data under the following verified conditions:",
        "• Authorized Service Providers: Trusted cloud hosting, enterprise database systems, and secure communications tools operating under binding non-disclosure and data protection contracts.",
        "• Statutory & Regulatory Authorities: When required by law to submit tax filings or statutory labor notifications (e.g., FIRS, State Internal Revenue Services, National Pension Commission).",
        "• Corporate Transactions: In the event of a merger, acquisition, or restructuring, subject to strict confidentiality protections."
      ]
    },
    {
      id: "data-security",
      title: "5. Data Security & Technical Safeguards",
      content: [
        "We implement robust technical and organizational security controls designed to safeguard personal data against unauthorized access, loss, misuse, or alteration.",
        "These include TLS/SSL cryptographic encryption for data in transit, encrypted storage repositories, multi-factor authentication for internal systems, role-based access restrictions, and regular vulnerability audits."
      ]
    },
    {
      id: "data-subject-rights",
      title: "6. Your Data Subject Rights",
      content: [
        "Under prevailing data protection laws, you possess the following rights regarding your personal information:",
        "• Right to Access: You may request confirmation and a copy of the personal data we hold about you.",
        "• Right to Rectification: You may request correction of inaccurate, incomplete, or outdated data.",
        "• Right to Erasure ('Right to be Forgotten'): You may request deletion of your information when it is no longer required for legitimate contractual or statutory obligations.",
        "• Right to Object or Restrict Processing: You may object to the processing of your data for specific purposes, such as direct marketing communications.",
        "• Right to Data Portability: You may request the transfer of your structured data to another provider where technically feasible."
      ]
    },
    {
      id: "data-retention",
      title: "7. Data Retention Policy",
      content: [
        "We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, satisfy contractual commitments, or comply with statutory retention requirements (such as payroll and tax record retention laws requiring documentation to be kept for statutory audit windows).",
        "Upon expiration of applicable retention schedules, data is securely anonymized or permanently deleted."
      ]
    },
    {
      id: "policy-updates",
      title: "8. Amendments to this Privacy Policy",
      content: [
        "We may periodically update this Privacy Policy to reflect advancements in our service suite, technological upgrades, or shifts in legal requirements.",
        "Significant changes will be highlighted via notice on our website, with the 'Last Updated' date at the top reflecting the current effective date."
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
            <Lock className="w-3.5 h-3.5" /> DATA PROTECTION & PRIVACY COMMITMENT
          </div>
          <h1 className="text-[38px] sm:text-[54px] md:text-[62px] font-black tracking-tight text-[#151B28] leading-[1.1] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#334155] max-w-[680px] mx-auto leading-relaxed">
            Our commitment to protecting your personal data, ensuring confidentiality, and maintaining statutory transparency.
          </p>
          <div className="mt-4 text-xs font-semibold text-gray-500">
            Last Updated: October 2026 • Compliant with NDPA 2023 & NDPR
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1040px] mx-auto">
        
        {/* PRIVACY PILLARS SUMMARY */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-6 border border-[#151B28]/10 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#151B28]">Bank-Grade Security</h3>
              <p className="text-xs text-gray-500">TLS encrypted transmission & restricted access</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#151B28]/10 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#151B28]">Zero Data Selling</h3>
              <p className="text-xs text-gray-500">Never monetized or sold to third parties</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#151B28]/10 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FEFCE8] border border-[#FEF08A] flex items-center justify-center text-[#CA8A04] shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#151B28]">Statutory Adherence</h3>
              <p className="text-xs text-gray-500">Full NDPA 2023 & NDPR governance</p>
            </div>
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

        {/* DPO CONTACT BOX */}
        <div className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-[#151B28]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
              Data Subject Requests & Inquiries
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-[#151B28]">
              Contact our Data Protection Office
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              To exercise your rights or request data erasure, email: <span className="font-semibold text-[#151B28]">info@jotalentpartners.com.ng</span>
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#151B28] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 shrink-0"
          >
            Submit Data Request <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      <Footer />
    </div>
  );
}
