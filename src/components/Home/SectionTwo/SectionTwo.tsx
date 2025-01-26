"use client"
import React, { useState } from 'react';

const features = [
  {
    title: "Customizable Templates",
    description: "Choose from a range of beautiful, responsive templates and tailor them to fit your personal style.",
    icon: "/assets/descicon1.svg"
  },
  {
    title: "AI-Powered Content",
    description: "Let AI assist you in crafting compelling content that enhances your portfolio or product showcase.",
    icon: "/assets/gemini.svg"
  },
  {
    title: "Unique URLs",
    description: "Get a personalized URL to share your work effortlessly and boost your online presence.",
    icon: "/assets/descicon2.svg"
  }
];

const SectionTwo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
    <div className="flex flex-col w-full h-screen items-center  bg-[#f4f4f4] z-0">
      <h2 className="text-9xl font-bold text-[#6B4A32] mb-6">Why Choose MORI?</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative  w-full h-40 bg-[#D9CFD9] rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-500 
            ${hoveredIndex === index ? 'h-60' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-4">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              <h3 className="text-2xl font-semibold text-[#6B4A32]">{feature.title}</h3>
            </div>

            <p
              className={`mt-4 text-2xl text-[#412E1A] transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 h-0'
                }`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SectionTwo;