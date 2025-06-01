"use client";
import { useState, useEffect, useRef } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  PaperAirplaneIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [activeContact, setActiveContact] = useState("form");
  const [activeFaq, setActiveFaq] = useState(0); // First FAQ open by default
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  // Animation on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          el.classList.add("animate-fadeInUp");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial check

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  // Contact methods
  const contactMethods = [
    {
      icon: <PhoneIcon className="h-8 w-8 text-white" />,
      title: "Call Us",
      details: "+254 (0) 715 04-6021",
      action: "Call Now",
      color: "bg-gradient-to-r from-blue-600 to-red-600",
    },
    {
      icon: <EnvelopeIcon className="h-8 w-8 text-white" />,
      title: "Email Us",
      details: "support@marknic.co.ke",
      action: "Send Email",
      color: "bg-gradient-to-r from-red-600 to-blue-600",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />,
      title: "WhatsApp",
      details: "Chat with our team",
      action: "Start Chat",
      color: "bg-gradient-to-r from-blue-600 to-red-600",
    },
    {
      icon: <MapPinIcon className="h-8 w-8 text-white" />,
      title: "Visit Us",
      details: "Westlands, Nairobi, Kenya",
      action: "Get Directions",
      color: "bg-gradient-to-r from-red-600 to-blue-600",
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
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fadeInDown delay-150">
              We're here to help you with all your financial needs. Reach out to
              us through any channel and we'll respond promptly.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div
            className={`bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-700 ${
              activeContact === "form" ? "scale-105 shadow-2xl" : "scale-100"
            }`}
            ref={formRef}
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 p-2 rounded-lg">
                <PaperAirplaneIcon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold ml-3">Send Us a Message</h2>
            </div>

            {submitSuccess ? (
              <div className="bg-gradient-to-r from-blue-50 to-red-50 border border-blue-200 text-blue-700 px-4 py-6 rounded-xl mb-6 text-center animate-fadeIn">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="text-xl font-bold mb-2">
                  Message Sent Successfully!
                </h3>
                <p>
                  We'll get back to you within 24 hours. Thank you for
                  contacting us.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option>General Inquiry</option>
                      <option>Loan Application</option>
                      <option>Account Support</option>
                      <option>Partnership</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold rounded-lg flex items-center justify-center transition-all hover:from-blue-700 hover:to-red-700 ${
                    isSubmitting ? "opacity-80" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>

                {submitError && (
                  <div className="mt-4 text-red-600 text-center animate-fadeIn">
                    {submitError}
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Methods */}

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-100 via-white to-rose-100 rounded-2xl shadow-xl p-8 text-gray-800 animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">Phone Numbers</h3>
                    <p className="text-gray-600 mt-1">+254 (0) 715 04-6021</p>
                    <p className="text-gray-600">+254 (0) 715 04-6021</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">Email Addresses</h3>
                    <p className="text-gray-600 mt-1">support@marknic.co.ke</p>
                    <p className="text-gray-600">loans@marknic.co.ke</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">Our Location</h3>
                    <p className="text-gray-600 mt-1">
                      Westlands Business Center
                    </p>
                    <p className="text-gray-600">3rd Floor, Suite 302</p>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Animated SVG Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 1000 1000"
          className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 opacity-10 text-blue-300 animate-rotate-slow"
        >
          <path
            d="M500,200 Q700,300 800,500 Q700,700 500,800 Q300,700 200,500 Q300,300 500,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="20"
          />
        </svg>

        <svg
          viewBox="0 0 1000 1000"
          className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 opacity-10 text-red-300 animate-rotate-slow-reverse"
        >
          <path
            d="M500,100 Q800,300 900,500 Q800,700 500,900 Q200,700 100,500 Q200,300 500,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="20"
          />
        </svg>
      </div>
    </div>
  );
};

export default ContactPage;
