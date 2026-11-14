import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoGoal } from "react-icons/go";

const OurGoal = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  return (
    <section className="bg-gradient-to-r from-teal-700 to-cyan-800 py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-5" data-aos="zoom-in">
          <GoGoal size={55} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up" data-aos-delay="150">Our Goal</h2>
        <p className="text-blue-100 text-lg leading-8" data-aos="fade-up" data-aos-delay="300">
          Our goal is to bridge the gap between traditional classroom learning and modern digital
          education. We strive to provide a simple, reliable, and efficient learning management
          system that helps students learn better, instructors teach effectively, and colleges
          manage educational resources efficiently.
        </p>
      </div>
    </section>
  );
};

export default OurGoal;
