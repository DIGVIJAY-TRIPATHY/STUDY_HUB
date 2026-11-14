import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuTarget } from "react-icons/lu";

const OurMission = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-blue-100 hover:shadow-lg transition" data-aos="fade-up">
          <LuTarget size={42} className="text-blue-600 mb-5" />
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-8">
            Our mission is to make education more accessible, organized, and interactive by using
            technology to improve the teaching and learning experience. We aim to provide students
            and instructors with the tools they need for effective learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
