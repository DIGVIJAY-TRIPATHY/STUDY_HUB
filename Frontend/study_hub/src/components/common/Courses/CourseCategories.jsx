import { FaCode,FaGlobe,FaDatabase,FaBrain,FaPalette } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";

const CourseCategories = () => {

  const categories = [
    { name: "Programming", icon: FaCode, color: "bg-blue-100 text-blue-600" },
    { name: "Web Development", icon: FaGlobe, color: "bg-green-100 text-green-600" },
    { name: "Database", icon: FaDatabase, color: "bg-purple-100 text-purple-600" },
    { name: "Artificial Intelligence", icon: FaBrain, color: "bg-orange-100 text-orange-600" },
    { name: "UI/UX Design", icon: FaPalette, color: "bg-pink-100 text-pink-600" },
    { name: "App Development", icon: MdSmartphone, color: "bg-indigo-100 text-indigo-600" },
  ];

  return (
    <section className="bg-emerald-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-blue-600 font-semibold uppercase tracking-wider">
          Categories
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Explore Course Categories
        </h2>

        <p className="text-gray-500 mt-3">
          Find the right subject and start learning.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center ${category.color}`}>
                <Icon size={28} />
              </div>

              <h3 className="font-semibold text-sm mt-4">
                {category.name}
              </h3>
            </div>
          );
        })}

      </div>
      </div>
    </section>
  );
};

export default CourseCategories;
