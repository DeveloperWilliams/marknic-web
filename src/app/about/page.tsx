"use client";
import { useState } from "react";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  LightBulbIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  HandRaisedIcon,
  ArrowPathIcon,
  GlobeAmericasIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const teamMembers = [
    {
      name: "Nicholas Macharia",
      role: "CEO & Founder",
      bio: "20+ years in financial services with expertise in risk management and business strategy.",
      image: "/images/ceo.jpg",
    },
    {
      name: "Nicole Williams",
      role: "Chief Operations Officer",
      bio: "Former banking executive with deep knowledge of loan processing and customer experience.",
      image: "/images/coo.jpg",
    },
    {
      name: "David Kimani",
      role: "Head of Credit",
      bio: "Credit analysis specialist with a track record of minimizing defaults while maximizing approvals.",
      image: "/images/credit.jpg",
    },
    {
      name: "Sarah Odhiambo",
      role: "Customer Relations",
      bio: "Dedicated to ensuring every client receives personalized attention and support throughout their journey.",
      image: "/images/customer.jpg",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We operate with transparency and honesty in all our dealings.",
      icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Innovation",
      description:
        "Continuously improving our services to meet evolving customer needs.",
      icon: <LightBulbIcon className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Empowerment",
      description:
        "Helping clients achieve financial independence and business growth.",
      icon: <HandRaisedIcon className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Sustainability",
      description:
        "Responsible lending that supports long-term financial health.",
      icon: <ArrowPathIcon className="h-10 w-10 text-red-600" />,
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "MarkNic started with a vision to revolutionize financial access in Kenya.",
    },
    {
      year: "2017",
      title: "First Branch Opened",
      description: "Established our flagship office in Westlands, Nairobi.",
    },
    {
      year: "2019",
      title: "Digital Platform Launch",
      description:
        "Introduced online loan applications and account management.",
    },
    {
      year: "2021",
      title: "10,000 Clients",
      description:
        "Reached a major milestone serving over 10,000 satisfied customers.",
    },
    {
      year: "2023",
      title: "National Expansion",
      description: "Expanded services to 5 major counties across Kenya.",
    },
  ];

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
        <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-red-300/20 animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInDown">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fadeInDown delay-150">
              Empowering Kenyans with accessible financial solutions since 2015
            </p>
          </div>
        </div>
      </div>


      {/* Our Story - Timeline */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600">
              From humble beginnings to becoming a trusted financial partner for
              thousands of Kenyans
            </p>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="border-l-4 border-blue-500 absolute left-1/2 ml-[-2px] h-full top-0 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="text-blue-600 font-bold text-lg">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold my-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center text-white font-bold z-10 relative">
                        {milestone.year.substring(2)}
                      </div>
                      <div className="hidden md:block absolute top-1/2 w-8 h-1 bg-blue-500 z-0 left-full"></div>
                      <div className="hidden md:block absolute top-1/2 w-8 h-1 bg-blue-500 z-0 right-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do to deliver the best for
            our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">{icon}</div>
              <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals who bring passion, expertise, and
              commitment every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="p-6">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="h-48 w-full object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
          <p className="text-gray-600">
            Delivering measurable results and customer satisfaction at every
            step.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600">5,000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600">15M+</div>
            <div className="text-gray-600">Loans Disbursed (KES)</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">10</div>
            <div className="text-gray-600">Years in Operation</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
