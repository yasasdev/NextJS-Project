"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Digital Solutions",
    description:
      "Tailored webapp and software development for small businesses to establish a digital presence.",
    img: "/Images/Services1.png",
    link: "#",
  },
  {
    title: "Digital Marketing Services",
    description:
      "Strategies and execution to increase visibility and drive customer engagement online.",
    img: "/Images/Services2.png",
    link: "#",
  },
  {
    title: "ShopAssist Pro (Mini ERP System)",
    description:
      "A scalable solution for billing, invoicing, inventory, service tracking, and business analytics",
    img: "/Images/Services3.png",
    link: "#",
  },
  {
    title: "Technical Consulting",
    description:
      "Specialized consulting services for large organizations undergoing digital transformation.",
    img: "/Images/Services4.png",
    link: "#",
  },
];

const ServicesSection = () => {
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-4xl font-bold text-black mb-4">
            Our Services
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into powerful digital solutions that drive your
            business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-50 flex flex-col justify-between h-full group hover:border-blue-200 transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                {!imageError[index] ? (
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-contain transition-transform duration-500"
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded">
                    <span className="text-gray-500">Image unavailable</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-4">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <Link
                    href={service.link || "#"}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
