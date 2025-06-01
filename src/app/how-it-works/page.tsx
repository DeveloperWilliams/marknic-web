"use client";

import React from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

function HowItWorks() {
  const steps = [
    {
      title: "Step 1: Choose Your Loan",
      description:
        "Explore our personal, logbook, or group loan options and choose the one that fits your needs.",
      icon: <DocumentTextIcon className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Step 2: Submit Application",
      description:
        "Fill out a simple application form and upload the necessary documents online or in person.",
      icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Step 3: Get Approved",
      description:
        "Our team reviews your application and gets back to you within 24 hours with a decision.",
      icon: <ClockIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Step 4: Receive Your Funds",
      description:
        "Once approved, the loan amount is disbursed directly to your bank or mobile money account.",
      icon: <CurrencyDollarIcon className="h-10 w-10 text-rose-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      {/* Hero Section */}
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
              How It{" "}
              <span className="bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fadeInDown delay-150">
              A simple 4-step process to help you secure the funds you need.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex gap-6 items-start transition duration-300 hover:shadow-xl"
            >
              <div className="shrink-0">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
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
                  <button className="bg-gradient-to-r from-red-600 to-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-xl">
                    Apply for a Loan
                  </button>
                  <button className="bg-transparent border-2 border-blue-600 text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
            {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
        <a
          href="#"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current text-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="ml-2 font-medium hidden sm:inline">WhatsApp</span>
        </a>
      </div>
      </div>
    </div>
  );
}

export default HowItWorks;
