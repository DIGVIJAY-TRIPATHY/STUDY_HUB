import { IoMailSharp } from "react-icons/io5";

import { useState } from "react";


const faculty = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    designation: "Professor & HOD",
    qualification: "Ph.D. in Computer Science",
    email: "rajesh@example.com",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 2,
    name: "Prof. Priya Sharma",
    designation: "Associate Professor",
    qualification: "M.Tech in CSE",
    email: "priya@example.com",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    designation: "Assistant Professor",
    qualification: "Ph.D. in Computer Science",
    email: "amit@example.com",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 4,
    name: "Prof. Sneha Das",
    designation: "Assistant Professor",
    qualification: "M.Tech in CSE",
    email: "sneha@example.com",
    image: "https://i.pravatar.cc/300?img=44",
  },
  {
    id: 5,
    name: "Dr. Rahul Singh",
    designation: "Associate Professor",
    qualification: "Ph.D. in Computer Science",
    email: "rahul@example.com",
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    id: 6,
    name: "Prof. Ananya Roy",
    designation: "Assistant Professor",
    qualification: "M.Tech in Software Engineering",
    email: "ananya@example.com",
    image: "https://i.pravatar.cc/300?img=45",
  },
];

const FacultyList = () => {
  const [search, setSearch] = useState("");

  const filteredFaculty = faculty.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Faculty
          </h2>
          <p className="text-gray-600 mt-3">
            Learn from experienced and dedicated educators.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-10" data-aos="fade-up">
          <input
            type="text"
            placeholder="Search faculty by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member, index) => (
            <div
              key={member.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-5 border-4 border-blue-100"
              />

              <h3 className="text-xl font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="text-blue-600 font-medium mt-2">
                {member.designation}
              </p>

              <p className="text-gray-600 text-sm mt-3">
                {member.qualification}
              </p>

              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 mt-5 text-blue-600 hover:text-blue-800"
              >
                <IoMailSharp size={17} />
                Contact Faculty
              </a>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No faculty members found.
          </p>
        )}

      </div>
    </section>
  );
};

export default FacultyList;
