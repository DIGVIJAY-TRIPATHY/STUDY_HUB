
import { FaBookOpen } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const CourseHero = () => {
  return (
    <section
      id="courses"
      data-aos="fade-down"
      className="scroll-mt-20 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-800 text-white py-20 px-6"    >
      <div className="max-w-6xl mx-auto text-center">

        <span className="bg-white/20 px-5 py-2 rounded-full text-sm">
          Explore The World of Learning
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-7 mb-5">
          Discover Your Next <br />
          <span className="text-yellow-300">Learning Experience</span>
        </h1>

        <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-8">
          Explore a wide range of courses, improve your skills,
          and achieve your academic goals with our College LMS Portal.
        </p>

        <div className="max-w-xl mx-auto mt-9 flex items-center bg-white rounded-xl p-2 shadow-xl">
          <FaSearch className="text-gray-400 ml-3" size={22} />

          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full px-4 py-3 text-gray-700 outline-none"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
            Search
          </button>
        </div>

        <div className="flex justify-center items-center gap-3 mt-8">
          <FaBookOpen size={20} />
          <span className="text-blue-100">
            Learn Anytime, Anywhere
          </span>
        </div>

      </div>
    </section>
  );
};

export default CourseHero;
