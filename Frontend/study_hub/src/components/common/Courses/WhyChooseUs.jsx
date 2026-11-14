import { FaGraduationCap,FaBookOpen,FaClock } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";


const WhyChooseUs = () => {

  const benefits = [
    {
      icon: FaGraduationCap,
      title: "Expert Instructors",
      desc: "Learn from experienced teachers and educators.",
    },
    {
      icon: FaBookOpen,
      title: "Quality Resources",
      desc: "Access organized notes, PDFs and study materials.",
    },
    {
      icon: MdMonitor,
      title: "Easy Learning",
      desc: "A simple and user-friendly digital learning platform.",
    },
    {
      icon: FaClock,
      title: "Flexible Access",
      desc: "Access your learning resources whenever you need them.",
    },
  ];

  return (
    <section className="bg-rose-50 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold">
            Why Choose Our LMS?
          </h2>

          <p className="text-gray-500 mt-3">
            Everything you need for a better learning experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="text-center p-7 rounded-2xl bg-slate-50 hover:bg-blue-50 transition duration-300"
              >

                <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Icon size={32} />
                </div>

                <h3 className="font-bold text-lg mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 leading-6">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
