
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";

const CourseCTA = () => {
  return (
    <section
      data-aos="fade-up"
      className="bg-gradient-to-r from-orange-600 to-red-700 py-16 px-6 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">

        <FaGraduationCap size={55} className="mx-auto mb-5" />

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Start Your Learning Journey Today!
        </h2>

        <p className="text-blue-100 text-lg leading-8 mb-8">
          Explore our courses, improve your knowledge,
          develop new skills, and build a brighter future.
        </p>

        <button
          onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
          })}
          className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition"
        >
          Explore Courses
          <FaArrowRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default CourseCTA;
