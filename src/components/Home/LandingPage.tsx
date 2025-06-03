"use client";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRightIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";



const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);


  const StarRating = ({ count = 5 }) => (
  <div className="flex space-x-0.5 mb-3">
    {Array(count)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-[#fbbc04] fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.4 12.18 1 8.09l6.09-.909L10 2l2.91 5.181L19 8.09l-4.4 4.09 1.278 5.91z" />
        </svg>
      ))}
  </div>
);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if stats section is in view
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        setStatsInView(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const features = [
    {
      title: "Instant Approval",
      description: "Get loan decisions within minutes, not days",
      icon: <ClockIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Competitive Rates",
      description: "Enjoy some of the lowest interest rates in Kenya",
      icon: <CurrencyDollarIcon className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Secure Process",
      description: "Bank-level security for all your financial data",
      icon: <ShieldCheckIcon className="h-6 w-6 text-green-600" />,
    },
  ];

  const testimonials = [
    {
      name: "James Mwangi",
      role: "Small Business Owner",
      content:
        "MarkNic helped my business survive during tough times. Their logbook loan process was fast and professional. I got the funds I needed within 24 hours!",
      avatar: "/images/manager.png",
    },
    {
      name: "Sarah Akinyi",
      role: "Teacher",
      content:
        "I needed funds for my daughter's education. MarkNic provided a personal loan with reasonable terms. Their customer service is exceptional.",
      avatar: "/images/why.jpg",
    },
    {
      name: "David Ochieng",
      role: "Entrepreneur",
      content:
        "The business loan I received helped me expand my shop. The repayment terms are flexible, and the staff is always ready to assist.",
      avatar: "/images/3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative pt-34 md:pt-16 lg:pt-14 pb-16 md:pb-24 bg-gray-50 text-gray-900 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-blue-100 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-red-100 animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-100 animate-pulse delay-500"></div>

          {/* Floating circles */}
          <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-blue-200/80 animate-bounce-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-red-200/80 animate-bounce-slow delay-500"></div>
          <div className="absolute top-1/2 left-1/3 w-5 h-5 rounded-full bg-blue-200/80 animate-bounce-slow delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Text */}
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
                Financial Solutions{" "}
                <span className="text-blue-600">Tailored</span> for You
              </h1>
              <p className="text-xl text-gray-700 max-w-xl mb-8 animate-fadeIn delay-150">
                Fast, flexible, and affordable loan services designed to help
                you achieve your financial goals. Get approved in minutes, not
                days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-300">
                <div className="flex flex-col items-center">
                  <Link
                    href="/products"
                    className="bg-gradient-to-r from-blue-600 to-red-500 text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                  >
                    Apply for a Loan
                  </Link>
                  <span className="mt-2 text-center text-gray-600 text-sm">
                    Fast approval & flexible terms
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image - Clean, No Box/Shadow */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/images/Car finance.svg"
                alt="Hero Image"
                width={600}
                height={600}
                className="object-contain w-full h-auto sm:h-[400px] md:h-[500px]"
              />
            </div>
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

      {/* Why Choose Us */}
      {/* Why Choose Us */}
      <div className="py-6 bg-blue-50 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="relative overflow-hidden">
                <div className=" relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/Why1.svg"
                      alt="Why Choose Us"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Financial Partner
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We're committed to providing exceptional financial services with
                transparency and integrity.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple & Transparent
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get the funds you need in just four easy steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-1 bg-blue-200 z-0"></div>

              {[
                {
                  step: "1",
                  title: "Apply Online",
                  description: "Complete our simple application in minutes",
                  icon: (
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      1
                    </div>
                  ),
                },
                {
                  step: "2",
                  title: "Submit Documents",
                  description: "Provide required documents digitally",
                  icon: (
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      2
                    </div>
                  ),
                },
                {
                  step: "3",
                  title: "Get Approved",
                  description: "Receive decision within hours",
                  icon: (
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      3
                    </div>
                  ),
                },
                {
                  step: "4",
                  title: "Receive Funds",
                  description: "Money in your account within 24 hours",
                  icon: (
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      4
                    </div>
                  ),
                },
              ].map((step, index) => (
                <div key={index} className="relative z-10">
                  {step.icon}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
 <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our customers are saying
          </h2>
          <p className="text-gray-600">
            Real feedback from people who improved their financial lives with Marknic Credit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-lg">
                    {testimonial.name[0]}
                  </div>
                )}
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <StarRating count={5} />

              <p className="text-gray-700 text-[15px] leading-relaxed italic">
                “{testimonial.content}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-blue-100 via-purple-50 to-rose-100 text-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div
              className={`p-6 transition-all duration-1000 ease-out ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-800">
                8+
              </div>
              <div className="text-gray-500">Years Experience</div>
            </div>
            <div
              className={`p-6 transition-all duration-1000 ease-out delay-150 ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-pink-700">
                25K+
              </div>
              <div className="text-gray-500">Clients Served</div>
            </div>
            <div
              className={`p-6 transition-all duration-1000 ease-out delay-300 ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-rose-600">
                KES 2B+
              </div>
              <div className="text-gray-500">Loans Disbursed</div>
            </div>
            <div
              className={`p-6 transition-all duration-1000 ease-out delay-450 ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-red-700">
                98%
              </div>
              <div className="text-gray-500">Satisfaction Rate</div>
            </div>
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
  );
};

export default LandingPage;
