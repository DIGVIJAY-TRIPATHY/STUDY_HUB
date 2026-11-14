import { LuMessageCircleMore } from "react-icons/lu";
const ContactIntro = () => {
  return (
    <section
      className="bg-gradient-to-r from-slate-900 via-teal-900 to-cyan-800 text-white py-20 px-6"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto text-center">
        <LuMessageCircleMore size={50} className="mx-auto mb-5 text-cyan-300" />

        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Contact Us
        </h1>

        <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
          Have questions or need assistance? We are here to help.
          Get in touch with our team.
        </p>
      </div>
    </section>
  );
};

export default ContactIntro;
