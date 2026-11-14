import { FaClock,FaBookOpen,FaArrowRight,FaUser } from "react-icons/fa";


const CourseList = () => {

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "John Smith",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and MongoDB.",
      duration: "12 Weeks",
      level: "Beginner",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    },
    {
      id: 2,
      title: "Python Programming",
      instructor: "David Kumar",
      description: "Understand Python programming from basics to advanced concepts.",
      duration: "8 Weeks",
      level: "Beginner",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    },
    {
      id: 3,
      title: "Database Management System",
      instructor: "Sarah Williams",
      description: "Learn SQL, database design, normalization and queries.",
      duration: "6 Weeks",
      level: "Intermediate",
      category: "Database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      instructor: "Robert Brown",
      description: "Explore AI concepts, machine learning and intelligent systems.",
      duration: "10 Weeks",
      level: "Advanced",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    },
    {
      id: 5,
      title: "UI/UX Design",
      instructor: "Emily Johnson",
      description: "Learn user interface design, user experience and prototyping.",
      duration: "5 Weeks",
      level: "Beginner",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
    },
    {
      id: 6,
      title: "Mobile App Development",
      instructor: "Michael Lee",
      description: "Learn the fundamentals of building modern mobile applications.",
      duration: "9 Weeks",
      level: "Intermediate",
      category: "Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?w=800",
    },
  ];

  return (
    <section className="bg-sky-100 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Courses
          </p>

          <h2 className="text-3xl font-bold mt-3">
            Popular Courses
          </h2>

          <p className="text-gray-500 mt-3">
            Choose a course and start building your future.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <div
              key={course.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
            >

              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-full">
                  {course.category}
                </span>

                <h3 className="text-xl font-bold mt-4 mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-500 text-sm leading-6">
                  {course.description}
                </p>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-5">
                  <FaUser size={17} />
                  {course.instructor}
                </div>

                <div className="flex items-center justify-between mt-5 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <FaClock size={16} />
                    {course.duration}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaBookOpen size={16} />
                    {course.level}
                  </span>
                </div>

                <button
                  onClick={() => alert(`You selected ${course.title}`)}
                  className="w-full mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
                >
                  View Course
                  <FaArrowRight size={18} />
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CourseList;
