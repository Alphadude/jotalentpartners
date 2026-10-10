import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FileText, CheckCircle, Scale, Shield, 
  HelpCircle, Mail, ArrowRight, Briefcase, Award
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | JO Talent Partners",
  description: "Terms and conditions governing human resource advisory, recruitment, payroll management, and client engagements with JO Talent Partners.",
};

export default function TermsOfServicePage() {
  const sections = [
    {
      id: "agreement",
      title: "1. Acceptance of Terms",
      content: [
        "These Terms of Service ('Terms', 'Agreement') constitute a legally binding agreement between you or the entity you represent ('Client', 'User', 'you') and JO Talent Partners ('we', 'us', 'our').",
        "By accessing our website (jotalentpartners.com.ng), requesting a consultation, or engaging any of our human resource advisory, recruitment, payroll, or business consulting solutions, you acknowledge that you have read, understood, and agree to be bound by these Terms."
      ]
    },
    {
      id: "services-scope",
      title: "2. Scope of Services & Engagements",
      content: [
        "JO Talent Partners provides corporate workforce solutions, including fractional HR advisory, talent acquisition and executive search, labor compliance diagnostics, policy drafting and handbook development, employee engagement frameworks, and automated payroll management.",
        "Specific engagement deliverables, performance timelines, SLA metrics, and bespoke terms are defined in individual Service Level Agreements ('SLAs') or Statements of Work ('SOWs') executed between JO Talent Partners and the Client. In the event of a direct conflict between these general website Terms and a signed SLA, the provisions of the signed SLA shall prevail."
      ]
    },
    {
      id: "client-obligations",
      title: "3. Client Responsibilities & Data Veracity",
      content: [
        "To enable us to provide accurate advisory and flawless execution, the Client agrees to:",
        "• Provide accurate, complete, and timely corporate records, job specifications, and employee documentation necessary for payroll, recruitment, or statutory filings.",
        "• Designate an authorized representative to coordinate decision-making, approvals, and contract sign-offs.",
        "• Ensure all personnel actions initiated by the Client align with applicable local labor legislation and nondiscrimination laws.",
        "• Promptly notify us of any organizational changes, statutory notices, or legal disputes that may impact our advisory or payroll responsibilities."
      ]
    },
    {
      id: "fees-payment",
      title: "4. Fees, Invoicing & Billing Terms",
      content: [
        "• Service Fees: Fees for advisory retainers, one-time consulting projects, or recruitment placements are quoted and billed as set forth in the applicable proposal or agreement.",
        "• Payment Terms: Unless otherwise specified in writing, invoices are payable within fourteen (14) calendar days of the invoice date.",
        "• Taxes & Statutory Remittances: All quoted fees are exclusive of applicable Value Added Tax (VAT) and statutory withholdings, which will be billed in accordance with prevailing statutory tax codes.",
        "• Late Payments: Overdue balances may accrue interest at the prevailing commercial rate or result in temporary suspension of active advisory and recruitment services until settled."
      ]
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property & Deliverables",
      content: [
        "• Proprietary Materials: All intellectual property rights in our pre-existing methodologies, diagnostic algorithms, proprietary assessment frameworks, and branding remain the sole property of JO Talent Partners.",
        "• Client Deliverables: Upon full and final settlement of all invoiced fees, the Client receives a perpetual, non-exclusive, non-transferable internal license to utilize custom deliverables (such as approved company handbooks, organizational charts, and internal policy documents) created specifically for their organization."
      ]
    },
    {
      id: "confidentiality",
      title: "6. Confidentiality & Non-Disclosure",
      content: [
        "Both parties agree that during the course of any interaction or engagement, confidential corporate information, compensation figures, strategic roadmap documents, and personal workforce data may be disclosed.",
        "Each party covenants to protect such proprietary information with the same degree of care it exercises with its own confidential data, and shall not disclose it to any third party except as strictly necessary to fulfill the engagement or required by judicial order."
      ]
    },
    {
      id: "recruitment-warranties",
      title: "7. Talent Acquisition & Placement Standards",
      content: [
        "While JO Talent Partners exercises rigorous screening, background verification, and candidate evaluation procedures, the ultimate decision to hire or engage any candidate rests exclusively with the Client.",
        "Specific probationary guarantees, replacement windows (such as standard 30 to 90-day replacement terms for permanent executive placements), and candidate exclusivity periods are defined in individual executive recruitment contracts."
      ]
    },
    {
      id: "liability-limitation",
      title: "8. Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, JO Talent Partners shall not be liable for any indirect, special, incidental, consequential, or punitive damages, including loss of profits, data loss, or business interruption.",
        "Our aggregate liability arising out of or related to any engagement, whether in contract, tort, or otherwise, shall be strictly capped at the total fees paid by the Client to JO Talent Partners under the specific agreement during the six (6) months immediately preceding the event giving rise to liability."
      ]
    },
    {
      id: "governing-law",
      title: "9. Governing Law & Dispute Resolution",
      content: [
        "These Terms and any dispute arising out of or relating to our services shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
        "In the event of any controversy, the parties agree to first seek an amicable settlement through senior executive dialogue. If unresolved within thirty (30) days, the dispute shall be resolved through binding arbitration administered in Lagos, Nigeria."
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
            <FileText className="w-3.5 h-3.5" /> CLIENT ENGAGEMENT FRAMEWORK
          </div>
          <h1 className="text-[38px] sm:text-[54px] md:text-[62px] font-black tracking-tight text-[#151B28] leading-[1.1] mb-4">
            Terms of Service
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#334155] max-w-[680px] mx-auto leading-relaxed">
            Standard terms, client responsibilities, service deliverables, and mutual protections governing our advisory engagements.
          </p>
          <div className="mt-4 text-xs font-semibold text-gray-500">
            Last Updated: October 2026 • Version 3.1
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1040px] mx-auto">
        
        {/* ENGAGEMENT PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-6 border border-[#151B28]/10 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#151B28]">Clear Scope</h3>
              <p className="text-xs text-gray-500">Transparent deliverables and SLA timelines</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#151B28]/10 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#151B28]">Strict Non-Disclosure</h3>
              <p className="text-xs text-gray-500">Complete corporate confidentiality</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#151B28]/10 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FEFCE8] border border-[#FEF08A] flex items-center justify-center text-[#CA8A04] shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#151B28]">Statutory Alignment</h3>
              <p className="text-xs text-gray-500">Compliant with federal labor codes</p>
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

        {/* QUESTIONS CONTACT BOX */}
        <div className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-[#151B28]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Need Contract Clarifications?
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-[#151B28]">
              Contact our Client Advisory Team
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Email us with your contract questions at: <span className="font-semibold text-[#151B28]">info@jotalentpartners.com.ng</span>
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#151B28] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 shrink-0"
          >
            Start Engagement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      <Footer />
    </div>
  );
}
