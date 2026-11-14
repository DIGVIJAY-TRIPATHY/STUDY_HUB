import { IoMailSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const FacultyCTA = () => {
  return (
    <section
      className="px-6 py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Academic Guidance?
        </h2>

        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Connect with our faculty members for academic guidance,
          learning support, and assistance.
        </p>

        <a
          href="mailto:yourcollege@example.com"
          className="inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
        >
          <IoMailSharp size={19} />
          Contact Us
          <FaArrowRight size={18} />
        </a>

      </div>
    </section>
  );
};

export default FacultyCTA;
