"use client";
import { useState, useEffect } from "react";
import {
  UserGroupIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CalculatorIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const GroupLoansPage = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [groupSize, setGroupSize] = useState(5);
  const [activeFaq, setActiveFaq] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Group Eligibility",
      description: "Loans based on collective creditworthiness",
      icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Shared Responsibility",
      description: "Members support each other's repayment",
      icon: <UserGroupIcon className="h-8 w-8 text-red-600" />,
    },
    {
      title: "Higher Loan Limits",
      description: "Access larger amounts with group strength",
      icon: <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Better Interest Rates",
      description: "Group discounts on interest rates",
      icon: <ChartBarIcon className="h-8 w-8 text-red-600" />,
    },
  ];

  const faqs = [
    {
      question: "What types of groups are eligible?",
      answer:
        "We support registered chamas, SACCOs, investment groups, cooperatives, and community organizations with at least 6 months of financial history.",
    },
    {
      question: "How many members must a group have?",
      answer:
        "Groups must have 5-30 members to qualify. Larger groups may be eligible for special programs with higher loan limits.",
    },
    {
      question: "What happens if one member defaults?",
      answer:
        "The group is collectively responsible. We work with groups to restructure payments, and offer insurance options to cover member defaults.",
    },
    {
      question: "How quickly can groups access funds?",
      answer:
        "Approved groups receive funds within 48 hours. New groups may take up to 7 days for verification.",
    },
    {
      question: "Are there group training programs?",
      answer:
        "Yes, we provide free financial literacy training and business management workshops for all member groups.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Calculate estimated repayment
  const interestRate = 0.1 - groupSize * 0.001; // Lower rates for larger groups
  const monthlyInterest = interestRate / 12;
  const monthlyRepayment =
    (loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm))) /
    (Math.pow(1 + monthlyInterest, loanTerm) - 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      {/* Floating Navigation */}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-red-800 text-white pt-8">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-500/10 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-red-500/10 animate-pulse delay-700"></div>
          <svg viewBox="0 0 1000 800" className="w-full h-full">
            <path
              d="M0,100 C150,200 350,0 500,100 C650,200 750,300 1000,100 L1000,00 L0,0 Z"
              fill="currentColor"
              className="text-blue-500"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                    Group Loans
                  </span>{" "}
                  for Collective Success
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Empower your group with affordable financing. Higher limits,
                  lower rates, and shared responsibility for your chama, SACCO,
                  or community organization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-red-700 transition-all shadow-lg">
                    Apply Now
                  </button>
                  <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
                    Learn More
                  </button>
                </div>
                <div className="mt-10 flex items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className="w-12 h-12 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center"
                      >
                        <div className="bg-gray-200 border-2 border-dashed rounded-full w-8 h-8" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-600 to-red-600 w-64 h-64 rounded-full flex items-center justify-center opacity-20 absolute -top-6 -left-6 animate-pulse"></div>
                  <div className="bg-gradient-to-r from-red-600 to-blue-600 w-64 h-64 rounded-full flex items-center justify-center opacity-20 absolute -bottom-6 -right-6 animate-pulse delay-700"></div>
                  <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
                    <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-xl p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-r from-blue-600 to-red-600 p-4 rounded-full">
                          <UserGroupIcon className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful Benefits for Groups
            </h2>
            <p className="text-gray-600">
              Designed specifically for collective financing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-blue-100"
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
      <div
        id="calculator"
        className="py-16 bg-gradient-to-r from-blue-900 to-red-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-800">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-red-600 p-2 rounded-lg">
                  <CalculatorIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-3">
                  Group Loan Calculator
                </h2>
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
                        min="100000"
                        max="10000000"
                        step="100000"
                        value={loanAmount}
                        onChange={(e) =>
                          setLoanAmount(parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-gradient-to-r from-blue-300 to-red-300 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 font-bold min-w-[120px] text-right">
                        {new Intl.NumberFormat("en-KE", {
                          style: "currency",
                          currency: "KES",
                        }).format(loanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>100,000</span>
                      <span>10,000,000</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-3 font-medium">
                      Repayment Period (Months)
                    </label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="6"
                        max="60"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                        className="w-full h-2 bg-gradient-to-r from-blue-300 to-red-300 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 font-bold min-w-[40px] text-right">
                        {loanTerm} months
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>6</span>
                      <span>60</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-3 font-medium">
                      Group Size (Members)
                    </label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="5"
                        max="30"
                        value={groupSize}
                        onChange={(e) => setGroupSize(parseInt(e.target.value))}
                        className="w-full h-2 bg-gradient-to-r from-blue-300 to-red-300 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 font-bold min-w-[40px] text-right">
                        {groupSize}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>5</span>
                      <span>30</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-6 h-full">
                    <h3 className="text-lg font-bold mb-4">
                      Your Group's Estimated Repayment
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
                        <span>Group Size:</span>
                        <span className="font-bold">{groupSize} members</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest Rate:</span>
                        <span className="font-bold">
                          {(interestRate * 100).toFixed(1)}% per annum
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing Fee:</span>
                        <span className="font-bold">
                          {new Intl.NumberFormat("en-KE", {
                            style: "currency",
                            currency: "KES",
                          }).format(loanAmount * 0.015)}
                        </span>
                      </div>
                      <div className="h-px bg-gradient-to-r from-blue-300 to-red-300 my-3"></div>
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
                        <span>Per Member:</span>
                        <span className="font-bold">
                          {new Intl.NumberFormat("en-KE", {
                            style: "currency",
                            currency: "KES",
                          }).format(
                            Number((monthlyRepayment / groupSize).toFixed(0))
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total Repayment:</span>
                        <span className="text-red-600">
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
                <button className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold py-4 rounded-lg hover:from-blue-700 hover:to-red-700 transition-all shadow-md">
                  Apply for Group Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How Group Loans Work</h2>
            <p className="text-gray-600">
              Simple process for collective financing
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-500 to-red-500 z-0"></div>

              {[
                {
                  step: "1",
                  title: "Group Application",
                  description: "Designated leader submits group details",
                },
                {
                  step: "2",
                  title: "Member Verification",
                  description: "We verify all group members",
                },
                {
                  step: "3",
                  title: "Documentation",
                  description: "Submit group constitution and financials",
                },
                {
                  step: "4",
                  description: "Receive funds in group account",
                  title: "Fund Disbursement",
                },
              ].map((step, index) => (
                <div key={index} className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl shadow-lg p-6 text-center border border-blue-100">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Types */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              We Support All Group Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Chamas", color: "from-blue-500 to-red-500" },
                { name: "SACCOs", color: "from-blue-600 to-red-600" },
                { name: "Cooperatives", color: "from-blue-700 to-red-700" },
              ].map((group, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 transform hover:-translate-y-1 transition-transform"
                >
                  <div
                    className={`bg-gradient-to-r ${group.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <UserGroupIcon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{group.name}</h4>
                  <p className="text-gray-600">
                    {group.name === "Chamas"
                      ? "Investment groups and merry-go-rounds"
                      : group.name === "SACCOs"
                      ? "Savings and credit cooperatives"
                      : "Agricultural and trade cooperatives"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     

      {/* FAQ Section */}
      <div id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything groups need to know about our loans
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-red-50 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
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
            <h2 className="text-3xl font-bold mb-4">
              Ready to Empower Your Group?
            </h2>
            <p className="text-xl mb-8">
              Apply for a group loan today and unlock your collective potential
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg">
                Start Application
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
                Contact Group Advisor
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
          <span className="ml-2 font-medium hidden sm:inline">
            WhatsApp Support
          </span>
        </a>
      </div>
    </div>
  );
};

export default GroupLoansPage;
