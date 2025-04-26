'use client';

import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  const coreValues = [
    { name: "Innovation", icon: "/Images/Who1.png", description: "Embracing new ideas and technologies to drive growth" },
    { name: "Simplicity", icon: "/Images/Who2.png", description: "Creating intuitive solutions that are easy to use" },
    { name: "Personalization", icon: "/Images/Who3.png", description: "Tailoring our approach to your unique business needs" },
    { name: "Collaboration", icon: "/Images/Who4.png", description: "Working together to achieve remarkable results" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-blue-700 mb-8 relative">
              Who we are
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-blue-500"></span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Innova Global is dedicated to helping small businesses thrive in the digital era. We offer simple, personalized, and affordable digital solutions that address real business challenges.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Our team combines technical expertise with business acumen to deliver results that matter for your growth and success.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="aspect-square relative overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <Image 
                src="/Images/who11.jpg" 
                alt="Digital code" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-2xl shadow-lg transform translate-y-8 transition duration-300 hover:scale-105">
              <Image 
                src="/Images/who22.jpg" 
                alt="Hand with digital icons" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-700 mb-4 relative inline-block">
            Our Core Values
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></span>
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            These principles guide our approach and ensure we deliver exceptional value to every client.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y--2 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all duration-300">
                <Image 
                  src={value.icon} 
                  alt={value.name} 
                  width={40} 
                  height={40} 
                  className="transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h4 className="text-xl font-bold text-blue-800 mb-4">{value.name}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;