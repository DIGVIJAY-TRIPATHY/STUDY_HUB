import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiBookOpen } from "react-icons/fi";
import { RxFileText } from "react-icons/rx";
import { FaUsers, FaAward } from "react-icons/fa";

const WhatWeOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  const features = [
    { icon: FiBookOpen, title: "Course Management", description: "Access and manage courses, subjects, and learning content in one place." },
    { icon: RxFileText, title: "Study Materials", description: "Get notes, PDFs, assignments, and other academic resources easily." },
    { icon: FaUsers, title: "Student & Instructor", description: "Connect students and instructors through a common learning platform." },
    { icon: FaAward, title: "Learning Progress", description: "Stay organized and keep track of academic activities and learning progress." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12" data-aos="fade-down">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl font-bold mt-3">What We Offer</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Everything students and instructors need for a better and more organized learning experience.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-7 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeOffer;
