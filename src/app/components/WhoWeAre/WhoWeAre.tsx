'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  // Create a state to control client-side rendering
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to update the state after mounting
  useEffect(() => {
    setIsClient(true);
  }, []);

  const coreValues = [
    { name: "Innovation", icon: "/Images/Who2.png"},
    { name: "Simplicity", icon: "/Images/Who4.png"},
    { name: "Personalization", icon: "/Images/Who1.png"},
    { name: "Collaboration", icon: "/Images/Who3.png"},
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
              Innova Global is dedicated to helping small businesses thrive in the digital era. We offer simple, personalized, and affordable digital solutions that address real business challenges.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our team combines technical expertise with business acumen to deliver results that matter for your growth and success.
            </p>
          </div>
          
          {isClient && (
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square relative overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
                <Image 
                  src="/Images/who11.jpg" 
                  alt="Digital code" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-2xl shadow-lg transform translate-y-6 transition duration-300 hover:scale-105">
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

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-700 mb-4 relative inline-block">
            Our Core Values
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></span>
          </h3>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            These principles guide our approach and ensure we deliver exceptional value to every client.
          </p>
        </div>

        {isClient && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="relative h-40 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0">
                  <Image 
                    src={value.icon} 
                    alt={value.name} 
                    fill
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/30"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                  <h4 className="text-xl font-bold text-white mb-1">{value.name}</h4>
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