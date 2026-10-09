"use client";

import { useState } from "react";
import { 
  ArrowRight, CheckCircle2, Globe, FileCheck2, Users, Briefcase, 
  Activity, Target, Shield, Award, ChevronRight, ChevronDown,
  Sparkles, Check, Star, Lock, MapPin, Mail, Phone,
  Clock, Send, MessageSquare, Building2, HelpCircle
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "HR Advisory & Consulting",
    companySize: "1-20 employees",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const contactChannels = [
    {
      title: "Headquarters",
      detail: "18 Ramoni St, Surulere, Lagos, Nigeria",
      subtext: "Operating Regionally & Internationally",
      icon: MapPin,
      bg: "bg-[#EFF6FF]",
      border: "border-[#DBEAFE]",
      iconColor: "text-[#2563EB]"
    },
    {
      title: "Direct Email",
      detail: "info@jotalentpartners.com.ng",
      subtext: "Average response time < 2 hours",
      icon: Mail,
      bg: "bg-[#F0FDF4]",
      border: "border-[#DCFCE7]",
      iconColor: "text-[#16A34A]"
    },
    {
      title: "Direct Phone Line",
      detail: "+1234567890",
      subtext: "Monday – Friday: 8:00 AM – 6:00 PM WAT",
      icon: Phone,
      bg: "bg-[#FFF4EC]",
      border: "border-[#FDE3CF]",
      iconColor: "text-[#EA580C]"
    },
    {
      title: "Consultation Hours",
      detail: "Schedule a 30-min Strategy Call",
      subtext: "Meet directly with a Senior HR Partner",
      icon: Clock,
      bg: "bg-[#FAF5FF]",
      border: "border-[#F3E8FF]",
      iconColor: "text-[#9333EA]"
    }
  ];

  const faqs = [
    {
      q: "Where is JO Talent Partners located?",
      a: "Our headquarters is located at 18 Ramoni St, Surulere, Lagos, Nigeria. We serve businesses across Nigeria, West Africa, and global remote organizations."
    },
    {
      q: "How quickly can you implement our workforce or HR policies?",
      a: "Standard HR advisory onboarding and initial policy drafting typically takes between 48 hours to 7 business days, depending on the scale and complexity of your organization."
    },
    {
      q: "What types of businesses do you work with?",
      a: "We partner with high-growth tech startups, financial institutions, retail chains, logistics providers, and global enterprises expanding into African markets."
    },
    {
      q: "Do you handle complete payroll processing and tax compliance?",
      a: "Yes. We manage automated payroll calculations, statutory PAYE taxes, pension remittances, employee benefits, and error-free wage disbursements."
    },
    {
      q: "Can you help resolve ongoing employee disputes or regulatory audits?",
      a: "Our seasoned labor compliance specialists handle union negotiations, employment dispute resolution, and audit defenses to protect your corporate reputation."
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
            <Link href="/services" className="hover:text-black transition-colors">Services</Link>
            <Link href="/contact" className="text-[#151B28] font-bold border-b-2 border-[#151B28] pb-0.5">Contact</Link>
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
            <Mail className="w-3.5 h-3.5" /> CONTACT JO TALENT PARTNERS
          </div>
          <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-black tracking-tight text-[#151B28] leading-[1.05] mb-6">
            <span className="bg-white px-5 sm:px-6 py-1 inline-block rounded-2xl shadow-sm mb-2 text-[#151B28]">Get in Touch</span> <br className="hidden sm:inline" />
            With Our Team
          </h1>
          <p className="text-[17px] sm:text-[20px] text-[#334155] mb-8 max-w-[700px] mx-auto leading-relaxed font-normal">
            Have a question or need support? We’re here to help. Reach out to us for inquiries, consultations, or more information about our services — we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* 3. MAIN CONTACT & INQUIRY SECTION (BENTO GRID) */}
      <section className="py-20 px-4 sm:px-6 max-w-[1240px] mx-auto -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Channels & HQ (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#151B28]/10 shadow-sm">
              <h2 className="text-2xl font-black text-[#151B28] mb-2 tracking-tight">
                Our Strength Is Our Community
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                True strength comes from unity. When individuals and businesses work together toward a shared vision, incredible things happen. We are proud to build a network of support, collaboration, and lasting impact.
              </p>

              <div className="space-y-4">
                {contactChannels.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div 
                      key={i} 
                      className={`${c.bg} ${c.border} border p-4 sm:p-5 rounded-2xl flex items-start gap-4 transition-transform hover:scale-[1.01]`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className={`w-5 h-5 ${c.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">{c.title}</h4>
                        <p className="text-sm sm:text-base font-black text-[#151B28] mt-0.5">{c.detail}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{c.subtext}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Assurance Card */}
            <div className="bg-[#151B28] text-white p-7 rounded-3xl shadow-lg border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base">Direct Response Guarantee</h4>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                All client inquiries submitted through this form are reviewed directly by our senior human resources advisory partners within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#151B28]/10 shadow-sm relative">
              
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#151B28] tracking-tight">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Fill out the form below and we will get back to you shortly.
                  </p>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> Rapid Consultation
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-2xl font-black text-[#151B28]">Thank You! Message Received.</h4>
                  <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                    We have received your inquiry. One of our senior HR consultants will contact you at <strong className="text-[#151B28]">{formData.email || "your email"}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "HR Advisory & Consulting",
                        companySize: "1-20 employees",
                        message: ""
                      });
                    }}
                    className="mt-6 inline-block bg-[#151B28] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        First & Last Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#151B28]/10 text-sm text-[#151B28] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Your Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#151B28]/10 text-sm text-[#151B28] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#151B28]/10 text-sm text-[#151B28] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Inquiry Subject / Service
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#151B28]/10 text-sm text-[#151B28] focus:outline-hidden focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all"
                      >
                        <option value="HR Advisory & Consulting">HR Advisory & Consulting</option>
                        <option value="Executive Recruitment">Executive Recruitment & Talent Sourcing</option>
                        <option value="Workplace Policy Development">Workplace Policy Development & Handbooks</option>
                        <option value="Payroll Management">Automated Payroll & Pension Processing</option>
                        <option value="Labor Compliance Support">Labor Compliance & Dispute Support</option>
                        <option value="Culture Transformation">Culture & Leadership Transformation</option>
                        <option value="General Inquiries">General Questions / Quotes</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Company Size
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["1-20 employees", "21-100 employees", "100+ employees"].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setFormData({ ...formData, companySize: size })}
                          className={`py-3 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                            formData.companySize === size
                              ? "bg-[#151B28] text-white border-[#151B28] shadow-xs"
                              : "bg-[#FAF7F2] text-gray-700 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Message / Scope Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe your current workforce challenges, team size, timeline, or what you would like assistance with..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#151B28]/10 text-sm text-[#151B28] placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#151B28] text-white py-4 rounded-full text-sm font-semibold hover:bg-black transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-black/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    We respect your privacy. Your corporate information is kept strictly confidential under NDA.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS ACCORDION BENTO */}
      <section className="py-20 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151B28]/5 text-xs font-bold text-[#151B28] tracking-wider uppercase mb-3">
            Quick Answers
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-black tracking-tight text-[#151B28]">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] text-[#475569] mt-3">
            Got questions before reaching out? Here are answers to common questions about our services, process, and headquarters.
          </p>
        </div>

        <div className="max-w-[840px] mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#151B28]/10 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base text-[#151B28] hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FOOTER */}
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
                  <li><Link href="/contact" className="hover:text-white transition-colors text-white font-semibold">Contact</Link></li>
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
