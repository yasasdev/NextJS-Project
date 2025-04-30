"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const AboutSection = () => {
  // Create a state to control client-side rendering
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to update the state after mounting
  useEffect(() => {
    setIsClient(true);
  }, []);

  const coreValues = [
    {
      name: "Innovation",
      icon: "/Images/Who2.png",
      description:
        "Pushing boundaries with creative solutions for tomorrow's challenges.",
    },
    {
      name: "Simplicity",
      icon: "/Images/Who4.png",
      description:
        "Complex problems, elegant solutions. We believe in keeping things clear and effective.",
    },
    {
      name: "Personalization",
      icon: "/Images/Who1.png",
      description:
        "Tailored approaches that reflect your unique business needs and goals.",
    },
    {
      name: "Collaboration",
      icon: "/Images/Who3.png",
      description:
        "Working together to achieve more than what's possible individually.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-700 mb-8 relative">
              Who we are
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-blue-500"></span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Innova Global is dedicated to helping small businesses thrive in
              the digital era. We offer simple, personalized, and affordable
              digital solutions that address real business challenges.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our team combines technical expertise with business acumen to
              deliver results that matter for your growth and success.
            </p>
          </div>

          {isClient && (
            <div className="md:w-1/2 grid grid-cols-2 gap-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition duration-300 h-80 w-45">
                <Image
                  src="/Images/who11.jpg"
                  alt="Digital code"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform translate-y-6 transition duration-300 h-80 w-45">
                <Image
                  src="/Images/who22.jpg"
                  alt="Hand with digital icons"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-700 mb-4 relative inline-block">
            Our Core Values
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></span>
          </h3>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            These principles guide our approach and ensure we deliver
            exceptional value to every client.
          </p>
        </div>

        {isClient && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={value.icon}
                    alt={value.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
                      {value.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-white">
                  <div className="w-8 h-1 bg-blue-500 mb-2 transform origin-left transition-all duration-300 group-hover:w-full"></div>
                  <h5 className="text-blue-700 font-medium">{value.name}</h5>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
