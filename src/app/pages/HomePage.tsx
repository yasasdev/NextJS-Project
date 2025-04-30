"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaCode, FaProjectDiagram, FaHome, FaUsers } from "react-icons/fa";

const features = [
  { icon: <FaCode className="text-3xl sm:text-4xl" />, title: 'Software Development' },
  { icon: <FaProjectDiagram className="text-3xl sm:text-4xl" />, title: 'Digital Transformation' },
  { icon: <FaHome className="text-3xl sm:text-4xl" />, title: 'Smart Home Systems' },
  { icon: <FaUsers className="text-3xl sm:text-4xl" />, title: 'Consultation Services' },
];

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - Text content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
                <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-400 mb-3">
                  Welcome to Our Platform
                </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your journey to <br /> 
                <span className="bg-none text-gray-500">digital transformation</span> <br /> 
                starts with us
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="#"
                  className="px-6 py-1.5 bg-gradient-to-r from-blue-500 to-blue-300 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                >
                  Our Services
                </Link>

                <Link
                  href="/portfolio"
                  className="px-6 py-1.5 border border-slate-300 text-slate-700 font-medium rounded-full hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 text-center"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10 rounded-2xl"></div>
              <Image
                src="/Images/HomePageImage.png"
                alt="Digital workspace illustration"
                fill
                priority
              />
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 backdrop-blur-lg rounded-lg animate-float z-20"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-500/20 backdrop-blur-lg rounded-full animate-float-delay z-20"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <div className="rounded-2xl border border-blue-400 bg-blue-100/30 p-8 flex flex-wrap justify-around items-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-black">{feature.icon}</div>
                <span className="font-semibold mt-2 text-black text-sm sm:text-base">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
