"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Product() {
  const [activeFaq, setActiveFaq] = useState(0); // First FAQ open by default

  const services = [
    {
      title: "Personal Loans",
      description: "Flexible personal loan packages tailored to your goals.",
      href: "/products/personal-loans",
      image: "/images/personal-loan.jpg",
    },
    {
      title: "Log Book Loans",
      description:
        "Secure fast cash using your vehicle logbook — simple and quick.",
      href: "/products/log-book-loans",
      image: "/images/log-book-loan.jpg",
    },
    {
      title: "Group Loans",
      description: "Empower your group with shared access to affordable loans.",
      href: "/products/group-loans",
      image: "/images/group-loan.jpg",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can I get a loan approved?",
      answer:
        "Most loans are approved within 24 hours of application submission, provided all required documentation is submitted.",
    },
    {
      question: "What documents do I need for a logbook loan?",
      answer:
        "You'll need your original logbook, national ID, proof of income, and vehicle insurance documents.",
    },
    {
      question: "Can I repay my loan early?",
      answer:
        "Yes, you can repay your loan early without any prepayment penalties.",
    },
    {
      question: "What loan amounts do you offer?",
      answer:
        "We offer loans ranging from KES 20,000 to KES 5,000,000 depending on the loan type and your eligibility.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team via phone, email, WhatsApp, or by visiting our offices during business hours.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We use bank-level encryption and follow strict data protection protocols to keep your information safe.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-white to-rose-100 text-gray-900">
        {/* SVG Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg viewBox="0 0 1000 800" className="w-full h-full">
            <path
              d="M0,100 C150,200 350,0 500,100 C650,200 750,300 1000,100 L1000,00 L0,0 Z"
              fill="currentColor"
              className="text-blue-300"
            ></path>
          </svg>
        </div>

        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-300/20 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-rose-300/20 animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInDown">
              Apply for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent">
                a Loan
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fadeInDown delay-150">
              Achieve your financial goals with ease. Whether you're planning,
              investing, or need a little extra support, our loan solutions are
              designed to fit your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                Our Offerings
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Financial Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your diverse financial
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <a
                href={service.href}
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                    Learn more <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our loan services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 animate-on-scroll ${
                  activeFaq === index ? "ring-2 ring-blue-500" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform duration-300 ${
                      activeFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeFaq === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-100 via-white to-rose-100 rounded-2xl shadow-xl p-12 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-200/20 z-0 blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-rose-200/20 z-0 blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Apply for your loan today and get funds in your account within
                24 hours
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-transparent border-2 border-blue-600 text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
