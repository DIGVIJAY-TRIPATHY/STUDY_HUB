import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiGraduationCapFill } from "react-icons/ri";

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">Who We Are</span>
          <h2 className="text-3xl font-bold mt-3 mb-5">Transforming Education Through Technology</h2>
          <p className="text-gray-600 leading-8">
            We are a digital learning platform designed to simplify the educational experience for
            students and instructors. Our College LMS Portal provides a centralized space to access
            study materials, manage courses, share academic resources, and support effective communication.
          </p>
        </div>
        <div className="bg-blue-100 rounded-3xl p-10 flex justify-center items-center" data-aos="fade-left" data-aos-delay="150">
          <RiGraduationCapFill size={150} className="text-blue-700" strokeWidth={1.2} />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
