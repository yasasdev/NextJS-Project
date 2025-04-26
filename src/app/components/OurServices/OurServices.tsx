"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Software Development",
    description:
      "We deliver custom applications for efficiency and scalability.",
    img: "/Images/Services1.png",
    link: "#",
    comingSoon: false,
  },
  {
    title: "Digital Transformation",
    description: "Upgrading businesses with cloud and automation solutions.",
    img: "/Images/Services2.png",
    link: "#",
    comingSoon: false,
  },
  {
    title: "AI-Driven Business Intelligence",
    description: "Advanced analytics for data-driven decisions.",
    img: "/Images/Services3.png",
    comingSoon: true,
  },
  {
    title: "Consultation Services",
    description: "Expert guidance to align technology with business goals.",
    img: "/Images/Services4.png",
    link: "#",
    comingSoon: false,
  },
];

const ServicesSection = () => {
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-100 p-6 rounded-xl shadow-md flex flex-col justify-between relative h-full text-left"
            >
              <div className="h-40 relative mb-4">
                {!imageError[index] ? (
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-contain"
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded">
                    <span className="text-gray-500">Image unavailable</span>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-800 mb-6">
                {service.description}
              </p>

              <div className="mt-auto">
                {!service.comingSoon ? (
                  <Link
                    href={service.link || "#"}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Learn more
                  </Link>
                ) : (
                  <span className="bg-slate-200 text-black font-bold text-xs px-3 py-1 rounded-full inline-block">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
