import { BiSolidBellRing } from "react-icons/bi";

const NoticeCTA = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-14 px-6"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center">
        <BiSolidBellRing size={42} className="mx-auto mb-4" />

        <h2 className="text-3xl font-bold mb-4">
          Don't Miss Important Updates!
        </h2>

        <p className="text-blue-100 max-w-2xl mx-auto">
          Visit the notices page regularly to stay updated with
          important academic announcements and activities.
        </p>
      </div>
    </section>
  );
};

export default NoticeCTA;
