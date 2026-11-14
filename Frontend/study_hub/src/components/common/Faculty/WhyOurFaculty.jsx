import { FaGraduationCap,FaBookOpen, FaUsers,FaLightbulb } from "react-icons/fa";


const features = [
  {
    icon: FaGraduationCap,
    title: "Experienced Educators",
    description:
      "Learn from qualified educators with strong academic knowledge.",
  },
  {
    icon: FaLightbulb,
    title: "Practical Learning",
    description:
      "Understand concepts through practical examples and activities.",
  },
  {
    icon: FaBookOpen,
    title: "Quality Education",
    description:
      "Access structured learning materials and academic guidance.",
  },
  {
    icon: FaUsers,
    title: "Student Support",
    description:
      "Get guidance and support throughout your learning journey.",
  },
];

const WhyOurFaculty = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Learn From Our Faculty?
          </h2>

          <p className="text-gray-600 mt-3">
            We focus on providing students with a better learning experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="p-7 rounded-2xl bg-gray-50 text-center hover:shadow-lg transition duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon size={30} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyOurFaculty;
