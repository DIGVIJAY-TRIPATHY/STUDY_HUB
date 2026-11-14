
import {FaUsers} from "react-icons/fa";

const FacultyIntro = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto text-center">
        <FaUsers size={55} className="mx-auto mb-5" />

        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Our Faculty
        </h1>

        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Meet our dedicated and experienced faculty members who inspire
          students to learn, innovate, and achieve academic excellence.
        </p>
      </div>
    </section>
  );
};

export default FacultyIntro;
