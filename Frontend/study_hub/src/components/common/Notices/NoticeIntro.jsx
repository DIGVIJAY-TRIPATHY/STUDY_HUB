
import { FaBell } from "react-icons/fa";


const NoticeIntro = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto text-center">
        <FaBell size={50} className="mx-auto mb-5" />

        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Notices & Announcements
        </h1>

        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Stay informed about the latest announcements, examination
          schedules, academic updates, and important events.
        </p>
      </div>
    </section>
  );
};

export default NoticeIntro;
