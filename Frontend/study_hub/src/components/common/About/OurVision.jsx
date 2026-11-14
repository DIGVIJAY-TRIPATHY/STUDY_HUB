import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegEye } from "react-icons/fa";

const OurVision = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  return (
    <section className="bg-emerald-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-indigo-50 p-8 md:p-10 rounded-2xl border border-indigo-100 hover:shadow-lg transition" data-aos="fade-up">
          <FaRegEye size={42} className="text-indigo-600 mb-5" />
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-8">
            Our vision is to create a smart digital learning environment where every student can
            access quality educational resources, develop new skills, and achieve academic success
            without limitations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
