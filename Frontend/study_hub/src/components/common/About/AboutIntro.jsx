import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiGraduationCapFill } from "react-icons/ri";

const AboutIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-5" data-aos="zoom-in">
          <RiGraduationCapFill size={60} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-5" data-aos="fade-up" data-aos-delay="150">
          About Our LMS Portal
        </h1>
        <p className="text-lg md:text-xl text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
          Empowering students and instructors through smart,
          accessible, and modern digital learning.
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
