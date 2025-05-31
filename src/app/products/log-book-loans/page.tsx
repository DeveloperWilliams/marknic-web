"use client";
import { useState } from "react";
import {
  DocumentTextIcon,
  CalculatorIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const LogbookLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [loanTerm, setLoanTerm] = useState(6);
  const [activeFaq, setActiveFaq] = useState(0);

  const features = [
    {
      title: "High Loan Amounts",
      description: "Borrow up to 80% of your vehicle's value",
      icon: <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Quick Processing",
      description: "Approval within 24 hours after document submission",
      icon: <ClockIcon className="h-8 w-8 text-red-600" />,
    },
    {
      title: "Keep Your Vehicle",
      description: "Continue using your car while repaying the loan",
      icon: <ArrowPathIcon className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Flexible Repayment",
      description: "Choose terms from 3 to 24 months",
      icon: <CalculatorIcon className="h-8 w-8 text-red-600" />,
    },
  ];

  const faqs = [
    {
      question: "What documents do I need for a logbook loan?",
      answer:
        "You'll need your original logbook, national ID, proof of income (last 3 payslips or bank statements), and valid vehicle insurance documents.",
    },
    {
      question: "Can I apply if my car is still under financing?",
      answer:
        "Yes, as long as you have completed at least 50% of your current car loan payments. We'll need permission from your current financier.",
    },
    {
      question: "What happens if I can't repay the loan?",
      answer:
        "We work with customers facing difficulties to restructure payments. As a last resort, we may repossess the vehicle, but this is rare with our responsible lending approach.",
    },
    {
      question: "How is my vehicle value determined?",
      answer:
        "We assess your vehicle's current market value based on make, model, year, condition, mileage and current market rates.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No, we are fully transparent. Our only fees are the processing fee (2% of loan amount) and standard late payment penalties if applicable.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Calculate estimated repayment
  const interestRate = 0.12; // 12% per annum
  const monthlyInterest = interestRate / 12;
  const monthlyRepayment =
    (loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm))) /
    (Math.pow(1 + monthlyInterest, loanTerm) - 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-white to-rose-100 text-gray-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg viewBox="0 0 1000 800" className="w-full h-full">
            <path
              d="M0,100 C150,200 350,0 500,100 C650,200 750,300 1000,100 L1000,00 L0,0 Z"
              fill="currentColor"
              className="text-blue-500"
            ></path>
          </svg>
        </div>

        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-500/10 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-red-500/10 animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInDown">
                  Logbook Loans for{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                    Instant Cash
                  </span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 animate-fadeInDown delay-150">
                  Unlock the value in your vehicle without selling it. Get cash
                  in 24 hours while keeping your car!
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-red-700 transition-all">
                    Apply Now
                  </button>
                  <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
                    How It Works
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-600 to-red-600 w-64 h-64 rounded-full flex items-center justify-center opacity-20 absolute -top-6 -left-6 animate-pulse"></div>
                  <div className="bg-gradient-to-r from-red-600 to-blue-600 w-64 h-64 rounded-full flex items-center justify-center opacity-20 absolute -bottom-6 -right-6 animate-pulse delay-700"></div>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-80 h-80 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Logbook Loans
            </h2>
            <p className="text-gray-600">
              Get the financial flexibility you need with your vehicle as
              collateral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-gradient-to-r from-blue-100 to-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan Calculator */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-800">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-red-600 p-2 rounded-lg">
                  <CalculatorIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-3">Loan Calculator</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-3 font-medium">
                      Loan Amount (KES)
                    </label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="50000"
                        max="2000000"
                        step="50000"
                        value={loanAmount}
                        onChange={(e) =>
                          setLoanAmount(parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 font-bold min-w-[100px] text-right">
                        {new Intl.NumberFormat("en-KE", {
                          style: "currency",
                          currency: "KES",
                        }).format(loanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>50,000</span>
                      <span>2,000,000</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-3 font-medium">
                      Repayment Period (Months)
                    </label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="3"
                        max="24"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 font-bold min-w-[30px] text-right">
                        {loanTerm} months
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>3</span>
                      <span>24</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-6 h-full">
                    <h3 className="text-lg font-bold mb-4">
                      Your Estimated Repayment
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Loan Amount:</span>
                        <span className="font-bold">
                          {new Intl.NumberFormat("en-KE", {
                            style: "currency",
                            currency: "KES",
                          }).format(loanAmount)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest Rate:</span>
                        <span className="font-bold">12% per annum</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing Fee:</span>
                        <span className="font-bold">
                          {new Intl.NumberFormat("en-KE", {
                            style: "currency",
                            currency: "KES",
                          }).format(loanAmount * 0.02)}
                        </span>
                      </div>
                      <div className="h-px bg-gray-300 my-2"></div>
                      <div className="flex justify-between">
                        <span>Monthly Payment:</span>
                        <span className="font-bold text-blue-600">
                          {new Intl.NumberFormat("en-KE", {
                            style: "currency",
                            currency: "KES",
                          }).format(Number(monthlyRepayment.toFixed(0)))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Repayment:</span>
                        <span className="font-bold text-red-600">
                          {new Intl.NumberFormat("en-KE", {
                            style: "currency",
                            currency: "KES",
                          }).format(
                            Number((monthlyRepayment * loanTerm).toFixed(0))
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold py-4 rounded-lg hover:from-blue-700 hover:to-red-700 transition-all">
                  Apply for This Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              How Our Logbook Loan Works
            </h2>
            <p className="text-gray-600">
              Simple steps to get the cash you need in 24 hours
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-500 to-red-500 z-0"></div>

              {[
                {
                  step: "1",
                  title: "Apply Online",
                  description:
                    "Complete our simple application form in minutes",
                },
                {
                  step: "2",
                  title: "Submit Documents",
                  description: "Provide your logbook, ID, and proof of income",
                },
                {
                  step: "3",
                  title: "Vehicle Inspection",
                  description: "Quick assessment of your vehicle's value",
                },
                {
                  step: "4",
                  title: "Get Cash",
                  description: "Receive funds within 24 hours of approval",
                },
              ].map((step, index) => (
                <div key={index} className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility & Documents */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Eligibility */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-red-600 p-2 rounded-lg">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-3">
                  Eligibility Requirements
                </h2>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="ml-3">Kenyan citizen aged 21-65 years</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="ml-3">Vehicle registered in your name</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="ml-3">
                    Proof of regular income (KES 30,000+ monthly)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="ml-3">
                    Valid logbook with no outstanding charges
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="ml-3">Comprehensive insurance cover</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="ml-3">Vehicle not older than 10 years</p>
                </li>
              </ul>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-red-600 p-2 rounded-lg">
                  <DocumentTextIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-3">Required Documents</h2>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mt-1">
                    <DocumentTextIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="ml-3 font-medium">
                    Original logbook (in your name)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mt-1">
                    <DocumentTextIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="ml-3 font-medium">National ID or Passport</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mt-1">
                    <DocumentTextIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="ml-3 font-medium">KRA PIN Certificate</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mt-1">
                    <DocumentTextIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="ml-3 font-medium">
                    Proof of income (payslips or bank statements)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mt-1">
                    <DocumentTextIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="ml-3 font-medium">
                    Valid vehicle insurance certificate
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mt-1">
                    <DocumentTextIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="ml-3 font-medium">
                    Recent utility bill (proof of residence)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about our logbook loans
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  activeFaq === index ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  <div className="bg-gradient-to-r from-blue-600 to-red-600 p-1 rounded-full">
                    <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
                  </div>
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
      <div className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <ShieldCheckIcon className="h-16 w-16 mx-auto text-white mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Apply for your logbook loan today and get cash in your account
              within 24 hours
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
                Call Us: +254 712 345 678
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:from-blue-700 hover:to-red-700 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current text-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="ml-2 font-medium hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};

export default LogbookLoansPage;
