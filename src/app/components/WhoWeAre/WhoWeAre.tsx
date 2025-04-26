'use client';

import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Who we are</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl">
          Innova Global is dedicated to helping small businesses thrive in the digital era. We offer simple, personalized, and affordable digital solutions that address real business challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center">
            <Image src="/code-image.jpg" alt="Digital code" width={300} height={400} className="rounded-2xl" />
          </div>
          <div className="flex justify-center">
            <Image src="/hand-apps.jpg" alt="Hand with digital icons" width={300} height={400} className="rounded-2xl" />
          </div>
        </div>

        <h3 className="text-3xl font-bold text-blue-600 mb-8">Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Core Value Card */}
          <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center">
            <Image src="/innovation-icon.png" alt="Innovation" width={50} height={50} />
            <h4 className="mt-4 text-lg font-semibold">Innovation</h4>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center">
            <Image src="/simplicity-icon.png" alt="Simplicity" width={50} height={50} />
            <h4 className="mt-4 text-lg font-semibold">Simplicity</h4>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center">
            <Image src="/personalization-icon.png" alt="Personalization" width={50} height={50} />
            <h4 className="mt-4 text-lg font-semibold">Personalization</h4>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center">
            <Image src="/collaboration-icon.png" alt="Collaboration" width={50} height={50} />
            <h4 className="mt-4 text-lg font-semibold">Collaboration</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
