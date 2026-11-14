
import { FaHeadset } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-14 px-6"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center">

        <FaHeadset size={45} className="mx-auto mb-5" />

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We're Always Here to Help!
        </h2>

        <p className="text-blue-100 max-w-2xl mx-auto">
          Your learning experience matters to us. Reach out whenever
          you need help or have questions.
        </p>

      </div>
    </section>
  );
};

export default ContactCTA;
